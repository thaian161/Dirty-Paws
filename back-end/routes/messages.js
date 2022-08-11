const router = require('express').Router()

module.exports = (db) => {

  router.get('/', (req, res) => {

    // const queryString = `SELECT content FROM messages WHERE sender_id = $1 AND receiver_id = $2 OR sender_id = $2 AND receiver_id = $1;`
    // const queryParams = [1, 2]

    const queryString = `SELECT * FROM messages WHERE sender_id = $1 OR receiver_id = $1`
    const queryParams = [req.cookies.user_id]
    db.query(queryString, queryParams).then(data => {
      res.json(data.rows)
    })
  })

  router.post('/:id', (req, res) => {

    const queryString = `INSERT INTO messages (sender_id, receiver_id, content) VALUES ($1, $2, $3)`
    const queryParams = [req.cookies.user_id, req.params.id, req.body.newMessage]

    db.query(queryString, queryParams).then(data => {
      res.json(data)
    })
  })

return router;
}