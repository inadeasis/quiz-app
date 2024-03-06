const db = require('../connection');

const findUserAttempts = (user_id) => {
  return db
  .query(`SELECT quiz_attempts.attempted_id, quiz_questions.*, quiz_attempted_answers.chosen_answer 
    FROM quiz_attempts 
    JOIN quiz_questions ON quiz_questions.id = quiz_id
    JOIN quiz_attempted_answers ON quiz_attempted_answers.id = quiz_questions.id
    WHERE user_id = $1
    `,  [user_id])

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

module.exports = {   findUserAttempts };


