const router = require('express').Router();

// const users = ['Ann', 'Dan', 'Dex', 'Mia'];

module.exports = (db) => {
  // all routes will go here 
  router.get('/', (req, res) => {
    // get all users
    const command = 'SELECT * FROM users';
    db.query(command).then(data => {
      res.json(data.rows);
    })
  });

//todo: router.get('/random')

  router.get('/:id', (req, res) => {
    // get profile info for a given user
    const queryString = `SELECT (name, treats, profile_picture, bio, age, address) FROM users WHERE id=$1`;
    const queryParams = [ req.params.id ]
    db.query(queryString, queryParams).then(data => {
      res.json(data.rows[0]);
    })
  });

  router.post('/', (req, res) => {
    // allow user to create new profile
    // grab new-user data from req.body
    // command = INSERT INTO users VALUES (... req.body)
    // db.query(command).then(() => {} )
  })

  router.put('/:id', (req, res) => {
    // allow user to edit their own profile
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
  
    
  })
  return router;
}