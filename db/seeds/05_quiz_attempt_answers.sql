-- Seed for quiz_attempt_answers table
INSERT INTO quiz_attempt_answers (question_id, chosen_answer)
VALUES
  (1, 'Paris'),
  (2, 'Mars'),
  (3, 'William Shakespeare'),
  (4, 'H2O'),
  (5, '7'),
  (6, '4'),
  (7, 'Leonardo da Vinci'),
  (8, 'Mars'),
  (9, '4'),
  (10, 'Alan Turing');

--chosen_option does not match chosen_answer in schema
--changed chosen_option ton chosen_answer to match schema
