(($) => {
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

// POST answers as a quiz attempt, then redirect to results page.
  const submitQuiz = function($quizForm) {
    const data = $quizForm.serializeArray();
    const quiz = createQuizObject(data);
    if (quiz) {
      $.post('/api/results', JSON.stringify(quiz)).then((res) => {
        console.log(res);
        renderConfirmation(res, quiz);
      });
    }
  };

// Create Quiz Object + Validation
  const createQuizObject = function(data) {
    const quiz = {
      questions: {},
    };
    const questions = quiz.questions;

    for (const input of data) {
      const name = input.name;
      const value = input.value;
      if (isNaN(name.charAt(0))) {
        if (!value) {
          return validationError(`#${name}`, `Please include a ${name.split('_')[1]} for your quiz.`);
        }
        quiz[name] = value;
        continue;
      }
      if (!value) {
        return validationError(`#${name}`, `Please fill out all the required fields`);
      }

      const questionId = name.split('-')[0];
      const answerId = name.split('-')[1];

      if (!questions[questionId]) {
        questions[quesId] = {
          answers: {}
        };
      }

      const question = questions[questionId];
      if (!answerId) {
        question.text = value;
        continue;
      }
      if (answerId === 'a') {
        question.correct = value.split('-')[1];
        continue;
      }
      question.answers[answerId] = value;
    }

    if (Object.keys(questions).length < 1) {
      return validationError(null,`You must have at least one question`);
    }

    for (const questionId in questions) {
      if (!questions[questionId].correct) {
        return validationError(`#${questionId}`,`Please select a correct answer for each question`);
      }
    }
    $('.error_message').remove();
    return quiz;
  };

  // Add Question to Form
  const addQuestion = function() {
    const questionNum = Number($('#quiz-form').find('.question').last().attr('id')) + 1 || 1;

    const $newQuestion = $(`
    <fieldset class="question_form">
    <legend>Question ${questionNum}</legend>
    <div class="quiz-list-cont">
    <textarea class="question" name="${questionNum}" id="${questionNum}" placeholder="Your question here..."></textarea>
    <div class="answer_container">
    </div>
    </div>
    </fieldset>`);

    for (let i = 0; i < 4; i++) {
      addAnswer($newQuestion);
    }

    $newQuestion.insertBefore('#form-questions');

    $(`#${questionNum}`).closest(`.question_form`).hide().show(400);

  }
  })(jQuery);
