const router = require('express').Router();

module.exports = (db) => {
  
  router.get('/', (req, res) => { // get current user's matches
    const queryParams = [req.cookies.user_id];
    const queryString = `
      SELECT * FROM matches 
      WHERE (userOne_id = $1 OR userTwo_id = $1)
      AND userOne_likes_userTwo = true
      AND userTwo_likes_userOne = true
      LIMIT 5`;
    db.query(queryString, queryParams).then(data => {
      return res.json(data.rows);
    })
  });
  
  router.get('/ids', (req, res) => { // get ids of current user's matches
    const queryParams = [req.cookies.user_id];
    const queryString = `
      SELECT userOne_id, userTwo_id FROM matches 
      WHERE (userOne_id = $1 OR userTwo_id = $1)
      AND userOne_likes_userTwo = true
      AND userTwo_likes_userOne = true
      LIMIT 6`;
    db.query(queryString, queryParams).then(data => {
      const ids = [];
      data.rows.forEach(row => {
        ids.push(row.userone_id);
        ids.push(row.usertwo_id);
      });
      const filteredIds = ids.filter(id => id != req.cookies.user_id);
      res.json(filteredIds);
    });

  });

  router.get('/:id', (req, res) => { // 'Like' another user
    const userOne = req.cookies.user_id;
    const userTwo = req.params.id;
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
          res.json(['update row', data.rows[0]]);
        })
      }
      if (data.rows.length == 0) { // create a match if none was found:
        const queryParams = [userOne, userTwo];
        const queryString = `
          INSERT INTO matches (userOne_id, userTwo_id, userOne_likes_userTwo, userTwo_likes_userOne) VALUES ($1, $2, true, false) RETURNING *`;
        db.query(queryString,queryParams).then(data => {
          res.json(['new row', data.rows[0]]);
        })
      }
    })
  });

  return router;
}


// FOOTNOTE 1:
  // change this route to a 'post' request to './' once it's linked to an axios request.
  // Axios.post should send userOne and userTwo in the req.body. 
  // Using req.params is a temporary workaround so that we can test in the browser with simple GET requests.

// FOOTNOTE 2:
  // currently, in 'update the match if one was found', we blindly set both booleans to true.
  // this means that user A can force a match with user B by 'liking' them twice.
  // to fix the issue would require a slightly more delicate queryString to target the correct boolean.

// BIG PICTURE:
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