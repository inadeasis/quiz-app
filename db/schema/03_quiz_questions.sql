-- Drop and recreate quiz_questions table (Example)

DROP TABLE IF EXISTS quiz_questions CASCADE;
CREATE TABLE quiz_questions (
  id SERIAL PRIMARY KEY NOT NULL,
  quizzes_id INTEGER REFERENCES quizzes(id) ON DELETE CASCADE,
  question TEXT NOT NULL,
  correct_answer VARCHAR(1) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- question does not match question-text in seeds
