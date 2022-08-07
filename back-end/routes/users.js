const router = require('express').Router();

// const users = ['Ann', 'Dan', 'Dex', 'Mia'];

module.exports = (db) => {
  // all routes will go here 
  router.get('/', (req, res) => {
    const command = 'SELECT * FROM users';

    db.query(command).then(data => {
      res.json(data.rows);
    })
  });

  return router;
}