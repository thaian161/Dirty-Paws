const router = require('express').Router()

module.exports = ()  => {

  router.get('/:id', (req, res) => {
    const userId = req.params.id;

    res.cookie("user_id", userId);
  })
  
  return router;
}