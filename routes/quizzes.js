const express = require('express');
const router  = express.Router();

router.get('/quizzes', (req, res) => {
  res.render('quizzes');
});
// router.get('/quizzes', (req, res) => {
//   if (req.session.userId) {
//       // User is logged in, render quizzes page
//       res.render('quizzes');
//   } else {
//       // User is not logged in, redirect to login page
//       res.redirect('/login');
//   }
// });

// const container = document.querySelector(".container");
// const createQuiz = document.getElementById("create-quiz");

// const createQuizCard = document.getElementById("add-quiz");
// const question = document.getElementById("question");

// createQuiz.addEventListener("click", () => {
//   createQuizCard.classList.remove("hide")
// })

module.exports = router;
