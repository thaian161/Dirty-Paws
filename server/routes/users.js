const router = require('express').Router();

const users = ['Ann', 'Dan', 'Dex', 'Mia'];

module.exports = (db) => {
  // all routes will go here 
  router.get('/', (req, res) => {
      res.json(users);
  });

  return router;
}