const db = require('../connection');

const getQuizWithId = (id) => {
  return db
  .query(`SELECT quizzes.*, quiz_questions.*, quiz_options.* 
    FROM quizzes 
    JOIN quiz_questions ON quizzes.id = quiz_id
    JOIN quiz_options ON quiz_questions.id = question_id
    WHERE id = $1
    `,  [id])

    .then(data => {
      if (data.rows.length > 0) {
        return data.rows[0]; //returns selected quiz
      }
      return null; //returns null if no quiz was found
      
    })
    .catch((err) => {
      console.log(err.message)
    });
};

module.exports = {   getQuizWithId };


