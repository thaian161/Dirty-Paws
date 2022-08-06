const router = require('express').Router();

module.exports = (db) => {

  router.get('/', (req, res) => { // get all users
    const queryString = 'SELECT * FROM users';
    db.query(queryString).then(data => {
      res.json(data.rows);
    })
  });

  router.get('/random', (req, res) => { // get random user
    console.log('attempt to get random user');
    const queryString = 'SELECT * FROM users ORDER BY RANDOM() LIMIT 1'
    db.query(queryString).then(data => {
      res.json(data.rows);
    })
  })

  router.get('/:id', (req, res) => { // get profile info for a specific user
    const queryString = `SELECT * FROM users WHERE id=$1`;
    const queryParams = [ req.params.id ]
    db.query(queryString, queryParams).then(data => {
      console.log('get specified user')
      res.json(data.rows);
    })
  });

  router.post('/', (req, res) => { // create new user profile
    // grab new-user data from req.body
    // queryString = INSERT INTO users VALUES (... req.body)
    // db.query(queryString).then(() => {} )
  });

  router.put('/:id', (req, res) => { // allow user to edit their own profile
    const { name, bio, age, address } = req.body

    const queryString = ` 
    UPDATE users
    SET name = $1, bio = $2, age = $3, address = $4
    WHERE id = $5
    `;

    const queryParams = [name, bio, age, address, req.params.id]
    
    db.query(queryString, queryParams).then(data => {
      res.json(data.rows)
    })
  });

  router.delete('/:id', (req, res) => { // delete a user
    res.json('delete feature not yet implemented')
  });






  return router;
}