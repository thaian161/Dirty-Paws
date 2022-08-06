const router = require('express').Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    res.json('made it to /badges');
  });

  return router;
}

  