const router = require('express').Router();

module.exports = (db) => {
  
  router.get('/', (req, res) => {
    res.json('made it to /matches')
  })
  
  router.post('/', (req, res) => { // Like another user
    // "one_likes_two"
  });

  return router;
}

// click on the SWIPE RIGHT / LIKE button.
// Other user has already liked me?
  // YES: 
    // get their like
    // change two_likes_one to true
    // now we have a true-true match
    // give the user a message "you have a new match!"
  // NO:
    // make a new like
    // set one_likes_two to true
    // now we have a false-false match
    // give the user a message "you have sent a like!" (?)
// show the user a new profile