const router = require('express').Router();

module.exports = (db) => {
  
  router.get('/', (req, res) => { // get user badges with req.cookies (default to 1)
    const queryString = `
    SELECT badges.* FROM badges 
    JOIN user_badges ON badges.id = user_badges.badge_id
    WHERE user_badges.user_id = $1
    `
    const queryParams = [req.cookies.user_id || 1];
    db.query(queryString, queryParams).then(data => {
      res.json(data.rows);
    })
  });

  router.get('/all', (req, res) => { // get all badges
    const queryString = `SELECT * FROM badges`;
    db.query(queryString).then(data => {
      res.json(data.rows);
    })
  });

  router.get('/:id', (req, res) => { // get user badges with req.params (default to 1)

    const queryString = `
    SELECT badges.* 
    FROM badges 
    JOIN user_badges ON badges.id = user_badges.badge_id
    JOIN users ON user_badges.user_id = users.id
    WHERE users.id = $1
    `
    const queryParams = [req.params.id || 1]

    db.query(queryString, queryParams).then(data => {
      res.json(data.rows);
    })
    
  });

  return router;
}
