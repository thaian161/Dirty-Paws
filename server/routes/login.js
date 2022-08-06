const router = require('express').Router()

module.exports = ()  => {

  router.get('/:id', (req, res) => {
    const userId = req.params.id;

    res.cookie("user_id", userId);
    res.json('made it to login and the userId is ' + userId)
  })
  
  return router;
}