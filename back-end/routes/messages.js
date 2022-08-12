const router = require('express').Router()

module.exports = (db) => {

  router.get('/', (req, res) => { // get user messages (default to user 1)

    // const queryString = `SELECT content FROM messages WHERE sender_id = $1 AND receiver_id = $2 OR sender_id = $2 AND receiver_id = $1;`
    // const queryParams = [1, 2]

    const queryString = `SELECT * FROM messages WHERE sender_id = $1 OR receiver_id = $1`
    const queryParams = [req.cookies.user_id || 1]
    db.query(queryString, queryParams).then(data => {
      res.json(data.rows)
    })
  })

  router.post('/:id', (req, res) => { // send message to another user (default from user 1)

    const queryString = `INSERT INTO messages (sender_id, receiver_id, content) VALUES ($1, $2, $3)`
    const queryParams = [req.cookies.user_id || 1, req.params.id, req.body.newMessage || "Hello Francis!"]

    db.query(queryString, queryParams).then(data => {
      res.json(data)
    })
  })

return router;
}