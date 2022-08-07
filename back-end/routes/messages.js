const router = require('express').Router()

module.exports = (db) => {

  router.get('/', (req, res) => {

    const queryString = `SELECT content FROM messages WHERE sender_id = $1 AND receiver_id = $2 OR sender_id = $2 AND receiver_id = $1;`
    const queryParams = [1, 2]

    db.query(queryString, queryParams).then(data => {
      res.json(data.rows)
    })
  })

  router.post('/', (req, res) => {

    const queryString = `INSERT INTO messages (sender_id, receiver_id, content) VALUES ($1, $2, $3)`
    const queryParams = [1, 2, "They sure are!"]

    db.query(queryString, queryParams).then(data => {
      res.json(data)
    })
  })

return router;
}