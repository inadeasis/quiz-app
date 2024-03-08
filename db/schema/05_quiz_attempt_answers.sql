-- Drop and recreate quiz_attempt_answers table (Example)

DROP TABLE IF EXISTS quiz_attempt_answers CASCADE;
CREATE TABLE quiz_attempt_answers (
  id SERIAL PRIMARY KEY NOT NULL,
  question_id INTEGER REFERENCES quiz_questions(id) ON DELETE CASCADE,
  chosen_answer VARCHAR(1) NOT NULL
);

--chosen_answer does not match chosen_option in seeds

