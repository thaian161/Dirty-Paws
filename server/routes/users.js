const router = require('express').Router();

// const users = ['Ann', 'Dan', 'Dex', 'Mia'];

module.exports = (db) => {
  // all /users routes will go here 
  router.get('/', (req, res) => {
    const command = 'SELECT * FROM users';

    db.query(command).then(data => {
      res.json(data.rows[Math.floor(Math.random() * data.rows.length)]);
    })
  });

  return router;
}