const express = require('express');
const router  = express.Router();
const { createQuizzes } = require('../db/queries/createQuizzes');

router.get('/', (req, res) => {
  res.render('quizzes');
});

// Route for adding a new quiz to db
router.post('/', (req, res) => {
  const username = req.session.name;

  if (!username) {
    res
      .status(401)
      .send('Must be logged in to create quiz');
  }
  const quiz = JSON.parse(Object.keys(req.body)[0]);

  createQuizzes(quiz, username)
    .then(urls => {
      res.json(urls);
    });
});

module.exports = router;
