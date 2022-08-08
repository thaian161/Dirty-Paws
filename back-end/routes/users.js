const router = require('express').Router();

// const users = ['Ann', 'Dan', 'Dex', 'Mia'];

module.exports = (db) => {
  // all routes will go here 
  router.get('/', (req, res) => {
    const queryString = 'SELECT * FROM users';

    db.query(queryString).then(data => {
      res.json(data.rows);
    })
  });

  router.get('/:id', (req, res) => {
    
    const queryString = `SELECT * FROM users WHERE users.id = $1`

    const queryParams = [req.params.id]

    db.query(queryString, queryParams)
      .then(data => {
        res.json(data.rows)
      })
  })

  return router;
}