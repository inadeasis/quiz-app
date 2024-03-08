const createQuiz = document.getElementById("create-quiz");
const createQuizCard = document.getElementById("add-quiz");

// Shows the Create Quiz when Button is Clicked
createQuiz.addEventListener("click", () => {
  createQuizCard.classList.remove("hide")
})

// Submit Form
const form = document.getElementById("quiz-form")

  form.addEventListener('submit', (e) => {
  e.preventDefault()

  const title = document.getElementById("title").value
  const description = document.getElementById("description").value
  const question = document.getElementById("question").value
  const optionA = document.getElementById("option-a").value
  const optionB = document.getElementById("option-b").value
  const optionC = document.getElementById("option-c").value
  const optionD = document.getElementById("option-d").value

  console.log(title, description, question, optionA, optionB, optionC, optionD)

})
