-- Seed for quiz_questions table
INSERT INTO quiz_questions (quizzes_id, question_text, correct_answer, created_at)
VALUES 
  (1, 'What is the capital of France?', 'Paris', NOW()),
  (1, 'What is the largest planet in our solar system?', 'Jupiter', NOW()),
  (1, 'Who wrote "Romeo and Juliet"?', 'William Shakespeare', NOW()),
  (1, 'What is the chemical symbol for water?', 'H2O', NOW()),
  (1, 'How many continents are there?', '7', NOW()),
  (2, 'What is 2 + 2?', '4', NOW()),
  (2, 'Who painted the Mona Lisa?', 'Leonardo da Vinci', NOW()),
  (2, 'Which planet is known as the Red Planet?', 'Mars', NOW()),
  (2, 'What is the square root of 16?', '4', NOW()),
  (2, 'Who is known as the "Father of Computer Science"?', 'Alan Turing', NOW());
    
