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

  router.get('/login/:id', (req, res) => { // log in
    const userId = req.params.id;

    res.cookie("user_id", userId);
    res.json('made it to login and the userId is ' + userId)
  })

  router.get('/myprofile', (req, res)=>{ //get current user profile

    const queryString = `SELECT * FROM users WHERE users.id = $1`;
    const queryParams = [req.cookies.user_id]; // <- from the cookie
    db.query(queryString, queryParams)
      .then(data => {
        res.json(data.rows)
      })
    //res.json("OK here is my profile LOL, Dan and Dex Helps me wrote thisssssss <3<3<3");
    //use req.cookies.user_id to make a database query
  })

  return router;

}
