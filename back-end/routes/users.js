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
  
    router.get('/random', (req, res) => {
      const queryString = `SELECT * FROM users ORDER BY RANDOM() LIMIT 1`;
      db.query(queryString).then(data => {
        res.json(data.rows);
      })
    })

    router.get('/myuser', (req, res) => {
    
      const queryString = `SELECT * FROM users WHERE users.id = $1`
  
      const queryParams = [req.cookies.user_id]
  
      db.query(queryString, queryParams)
        .then(data => {
          res.json(data.rows)
        })
    })

    router.post('/treats', (req, res) => { // get user by req.cookies and add a treat
      const queryString = `UPDATE users SET treats = treats + 1 WHERE users.id = $1 RETURNING treats`
      const id = req.cookies.id || 1;
      const queryParams = [id]
  
      db.query(queryString, queryParams)
        .then(data => {
          res.json(data)
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

  router.get('/treats/:id', (req, res) => {

    const queryString = `UPDATE users SET treats = treats + 1 WHERE users.id = $1 RETURNING treats`

    const queryParams = [req.params.id]

    db.query(queryString, queryParams)
      .then(data => {
        res.json(data)
      })
  })

  return router;
}