DROP TABLE IF EXISTS user_badges CASCADE;

CREATE TABLE user_badges (
  id SERIAL PRIMARY KEY NOT NULL,

  badge_id INTEGER REFERENCES badges (id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users (id) ON DELETE CASCADE
);