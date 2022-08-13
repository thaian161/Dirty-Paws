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
    const id = req.cookies.user_id || 1;
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

  router.post('/edit', (req, res) => { // edit profile upon form submission. 
    const id = req.body.id || 3;
    const name = req.body.name || 'bob';
    const city = req.body.address || 'Toronto';
    const bio = req.body.bio || 'hello world';
    const avatar = req.body.avatar || 'https://cdn.shoplightspeed.com/shops/633327/files/29258343/ftla-art-kit-painting-acrylic-pikachu.jpg';
    const age = Number.isInteger(req.body.age) ? req.body.age : 22;
    const queryParams = [id, name, city, bio, avatar, age];
    const queryString = `
    UPDATE users SET
    name = $2,
    address = $3,
    bio = $4,
    profile_picture = $5,
    age = $6
    WHERE id = $1
    RETURNING *
    `
    db.query(queryString, queryParams).then(data => {
      res.json(data.rows);
    })
  })

  return router;
}