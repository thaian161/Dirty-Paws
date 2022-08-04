
DROP TABLE IF EXISTS matches CASCADE;

CREATE TABLE matches (
  id INTEGER PRIMARY KEY NOT NULL,

  userOne_id INTEGER REFERENCES users (id) ON DELETE CASCADE,
  userTwo_id INTEGER REFERENCES users (id) ON DELETE CASCADE,
  
  userOne_likes_userTwo BOOLEAN default false,
  userTwo_likes_userOne BOOLEAN default false
);