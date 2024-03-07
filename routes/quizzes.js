const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('quizzes');
});


const container = document.querySelector(".container");
const createQuizCard = document.getElementById("add-quiz");
const question = document.getElementById("question");
const createQuiz = document.getElementById("create-quiz");

createQuiz.addEventListener("click", () => {
  container.classList.add("hide");
  createQuizCard.classList.remove("hide")

})

module.exports = router;
