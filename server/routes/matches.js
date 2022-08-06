const router = require('express').Router();

module.exports = (db) => {
  
  router.get('/', (req, res) => {
    res.json('made it to /matches')
  });
  
  router.get('/:userOne/:userTwo', (req, res) => { // 'Like' another user
    // change this route to be a 'get' request to './' once it is linked to an axios request,
    // which should send userOne and userTwo in the req.body. 
    // Using req.params is a temporary workaround so that we can test in the browser with the url /matches/1/2.
    const {userOne, userTwo} = req.params;
    
    // queryString selects the match between userOne and userTwo, if it exists 
    const queryString = `
    SELECT * FROM matches 
    WHERE ( userOne_id = ${userOne} AND userTwo_id = ${userTwo} ) 
    OR ( userOne_id = ${userTwo} AND userTwo_id = ${userOne} )`

    db.query(queryString).then(data => {
      if (data.rows.length > 0) {
        // in this case there is a match and we should update the booleans
        res.json(data.rows);
      }
      if (data.rows.length == 0) {
        res.json("a match does not exist")
        // in this case we should create a match
      }
    })
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
    // now we have a true-false match
    // give the user a message "you have sent a like!" (?)
// show the user a new profile