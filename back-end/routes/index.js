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

  return router;

}