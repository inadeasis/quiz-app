const express = require('express');
const router = express.Router();
const { getQuiz } = require('../db/queries/getQuiz');

router.get('/:id', (req, res) => {
  const quizId = req.params.id;

  getQuiz(quizId)
    .then(quizData => {
      if (!quizData || !quizData.questions || quizData.questions.length === 0) {
        return res.status(404).send('Quiz not found');
      }
      res.render('quiz-info', { quiz: quizData });
    })
    .catch(err => {
      console.error('Error fetching quiz:', err);
      res.status(500).send('Server error');
    });
});

module.exports = router;
