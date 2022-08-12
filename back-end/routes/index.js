var express = require('express');
var router = express.Router();

module.exports = (db) => {

  router.get('/', function(req, res, next) { // get homepage
    res.render('index', { title: 'Express' });
  });
  router.get('/logout', (req, res) => { // log out (clear cookie)
    res.clearCookie("user_id");
    res.json('you have logged out.')
  })

  router.get('/login/:id', (req, res) => { // log in (default to 1)
    const userId = req.params.id;
    if (userId > 0 && Number.isInteger(parseFloat(userId))) {
      res.cookie("user_id", userId);
      res.json('made it to login and the userId is ' + userId);
    } else {
      res.cookie("user_id", 1);
      res.json('made it to login with bad id. defaulting to user 1');
    }
  })

  router.get('/myprofile', (req, res)=>{ //get current user profile (default to 1)

    const queryString = `SELECT * FROM users WHERE users.id = $1`;
    const queryParams = [req.cookies.user_id || 1];
    db.query(queryString, queryParams)
      .then(data => {
        res.json(data.rows)
      })
  })

  return router;

}
