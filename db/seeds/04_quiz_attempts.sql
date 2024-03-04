-- Seed for quiz_attempts table
INSERT INTO quiz_attempts (user_id, quiz_id, attempted_id, total_questions, created_at)
VALUES 
  (1, 1, 4, 5, NOW()), -- User 1 attempts Quiz 1 and scores 4 out of 5
  (2, 1, 3, 5, NOW()), -- User 2 attempts Quiz 1 and scores 3 out of 5
  (3, 1, 5, 5, NOW()), -- User 3 attempts Quiz 1 and scores 5 out of 5
  (1, 2, 3, 5, NOW()), -- User 1 attempts Quiz 2 and scores 3 out of 5
  (2, 2, 4, 5, NOW()), -- User 2 attempts Quiz 2 and scores 4 out of 5
  ;
