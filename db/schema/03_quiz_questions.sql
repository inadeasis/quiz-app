-- Drop and recreate quiz_questions table (Example)

DROP TABLE IF EXISTS quiz_questions CASCADE;
CREATE TABLE quiz_questions (
  id SERIAL PRIMARY KEY NOT NULL,
  quizzes_id INTEGER REFERENCES quizzes(id) ON DELETE CASCADE,
  question TEXT NOT NULL,
  correct_answer VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- question does not match question-text in seeds
-- changed correc_answer from VARCHAR(1) to VARCHAR(100), previously can not seed as correct_answer from seeds is longer than 1 character
