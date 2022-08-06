const router = require('express').Router();

module.exports = (db) => {
  
  router.get('/', (req, res) => {
    res.json('made it to /matches')
  });
  
  router.get('/:userOne/:userTwo', (req, res) => { // 'Like' another user
    // change this route to be a 'post' request to './' once it is linked to an axios request,
    // which should send userOne and userTwo in the req.body. 
    // Using req.params is a temporary workaround so that we can test in the browser with the url /matches/1/2.
    const {userOne, userTwo} = req.params;
    
    // queryString selects the match between userOne and userTwo, if it exists 
    const queryParams = [userOne, userTwo]
    const queryString = `
    SELECT * FROM matches 
    WHERE ( userOne_id = $1 AND userTwo_id = $2 ) 
    OR ( userOne_id = $2 AND userTwo_id = $1 )`
    
    db.query(queryString, queryParams).then(data => {
      if (data.rows.length > 0) {
        // in this case there is a match
        // this code sets both of its booleans to true
        const match = data.rows[0];
        const queryParams = [match.id];
        const queryString = `
        UPDATE matches SET userOne_likes_userTwo = true, userTwo_likes_userOne = true WHERE id = $1`
        db.query(queryString, queryParams).then(data => {
          res.json(match);
        })
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