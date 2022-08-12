const router = require('express').Router();

module.exports = (db) => {

  router.get('/', (req, res) => { // get all users
    const queryString = 'SELECT * FROM users';

    db.query(queryString).then(data => {
      res.json(data.rows);
    })
  });

  router.get('/random', (req, res) => { // get random user
    const queryString = `SELECT * FROM users ORDER BY RANDOM() LIMIT 1`;
    db.query(queryString).then(data => {
      res.json(data.rows);
    })
  });

  router.get('/myuser', (req, res) => { // get current user by req.cookies (default to 1)
  
    const queryString = `SELECT * FROM users WHERE users.id = $1`

    const queryParams = [req.cookies.user_id || 1]

    db.query(queryString, queryParams)
      .then(data => {
        res.json(data.rows)
      })
  });

  router.post('/treats', (req, res) => { // get current user by req.cookies and add a treat (default to user 1)
    const queryString = `UPDATE users SET treats = treats + 1 WHERE users.id = $1 RETURNING treats`
    const id = req.cookies.id || 1;
    const queryParams = [id]

    db.query(queryString, queryParams)
      .then(data => {
        res.json(data)
      })
  });

  router.get('/treats/:id', (req, res) => { // get user by req.params and add a treat (default to user 1)

    const queryString = `UPDATE users SET treats = treats + 1 WHERE users.id = $1 RETURNING treats`

    const queryParams = [req.params.id || 1]

    db.query(queryString, queryParams)
      .then(data => {
        res.json(data)
      })
  });
  
  router.get('/:id', (req, res) => { // get a user by req.params (default to 2)
    
    const queryString = `SELECT * FROM users WHERE users.id = $1`

    const queryParams = [req.params.id || 2]

    db.query(queryString, queryParams)
      .then(data => {
        res.json(data.rows)
      })
  });

  return router;
}