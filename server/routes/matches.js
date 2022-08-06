const router = require('express').Router();

module.exports = (db) => {
  
  router.get('/', (req, res) => {
    res.json('made it to /matches')
  });
  
  router.get('/:userOne/:userTwo', (req, res) => { // 'Like' another user
    const {userOne, userTwo} = req.params;
    
    // find match, if it exists:
    const queryParams = [userOne, userTwo];
    const queryString = `
      SELECT * FROM matches 
      WHERE ( userOne_id = $1 AND userTwo_id = $2 ) 
      OR ( userOne_id = $2 AND userTwo_id = $1 )`;

    db.query(queryString, queryParams).then(data => {
      if (data.rows.length > 0) { // update the match if one was found:
        const match = data.rows[0];
        const queryParams = [match.id];
        const queryString = `
          UPDATE matches SET userOne_likes_userTwo = true, userTwo_likes_userOne = true WHERE id = $1 RETURNING *`;
        db.query(queryString, queryParams).then(data => {
          res.json(['a row has been updated in the matches table', data.rows[0]]);
        })
      }
      if (data.rows.length == 0) { // create a match if none was found:
        const queryParams = [userOne, userTwo];
        const queryString = `
          INSERT INTO matches (userOne_id, userTwo_id, userOne_likes_userTwo, userTwo_likes_userOne) VALUES ($1, $2, false, true) RETURNING *`;
        db.query(queryString,queryParams).then(data => {
          res.json(["a new row has been created in the matches table", data.rows[0]]);
        })
      }
    })
  });

  return router;
}


// footnote 1:
  // change this route to a 'post' request to './' once it's linked to an axios request.
  // Axios.post should send userOne and userTwo in the req.body. 
  // Using req.params is a temporary workaround so that we can test in the browser with simple GET requests.

// footnote 2:
  // currently, in 'update the match if one was found', we blindly set both booleans to true.
  // this means that user A can force a match with user B by 'liking' them twice.
  // to fix the issue would require a slightly more delicate queryString to target the correct boolean.

// big picture:
/*
click on the SWIPE RIGHT / LIKE button.
Other user has already liked me?
  YES: 
    get their like
    change two_likes_one to true
    now we have a true-true match
    give the user a message "you have a new match!"
  NO:
    make a new like
    set one_likes_two to true
    now we have a true-false match
    give the user a message "you have sent a like!" (?)
show the user a new profile
*/