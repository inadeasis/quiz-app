-- Seeds for quizzes table

-- Insert quiz 1
INSERT INTO quizzes (creator_id, title, quiz_description, is_public, created_at)
VALUES (1, 'History Quiz', 'Test your knowledge of historical events.', true, NOW());

-- Insert quiz 2
INSERT INTO quizzes (creator_id, title, quiz_description, is_public, created_at)
VALUES (2, 'Science Quiz', 'Explore scientific concepts and discoveries.', true, NOW());

-- Insert quiz 3
INSERT INTO quizzes (creator_id, title, quiz_description, is_public, created_at)
VALUES (3, 'Geography Quiz', 'Discover fascinating facts about countries and landscapes.', true, NOW());

-- Insert quiz 4
INSERT INTO quizzes (creator_id, title, quiz_description, is_public, created_at)
VALUES (4, 'Literature Quiz', 'Test your knowledge of famous literary works and authors.', true, NOW());

-- Insert quiz 5
INSERT INTO quizzes (creator_id, title, quiz_description, is_public, created_at)
VALUES (5, 'Music Quiz', 'Guess the song, artist, or album from audio clips.', true, NOW());

-- Insert quiz 6
INSERT INTO quizzes (creator_id, title, quiz_description, is_public, created_at)
VALUES (6, 'Math Quiz', 'Test your mathematical skills with these challenging questions.', true, NOW());

-- Insert quiz 7
INSERT INTO quizzes (creator_id, title, quiz_description, is_public, created_at)
VALUES (7, 'Movie Quiz', 'Guess the movie from famous quotes and scenes.', false, NOW());

-- Insert quiz 8
INSERT INTO quizzes (creator_id, title, quiz_description, is_public, created_at)
VALUES (8, 'Sports Quiz', 'Test your knowledge of sports teams, players, and events.', true, NOW());

-- Insert quiz 9
INSERT INTO quizzes (creator_id, title, quiz_description, is_public, created_at)
VALUES (9, 'Food Quiz', 'Identify dishes and cuisines from around the world.', false, NOW());

-- Insert quiz 10
INSERT INTO quizzes (creator_id, title, quiz_description, is_public, created_at)
VALUES (10, 'Technology Quiz', 'Explore the latest in tech trends and innovations.', true, NOW());
