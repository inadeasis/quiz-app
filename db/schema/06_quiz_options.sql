-- Drop and recreate quiz_options table (Example)

DROP TABLE IF EXISTS quiz_options CASCADE;
CREATE TABLE quiz_options (
  id SERIAL PRIMARY KEY NOT NULL,
  question_id INTEGER REFERENCES quiz_questions(id) ON DELETE CASCADE,
  choices TEXT NOT NULL,
  is_correct BOOLEAN NOT NULL
);