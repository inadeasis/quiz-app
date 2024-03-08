const db = require('../connection');

const createQuizzes = (quiz) => {
  const created_at = new Now(); //generates current timestamp
  const queryParams = [ quiz.creator_id, quiz.title, quiz.quiz_description, quiz.is_public, created_at ];
  
  const queryString = `
    INSERT INTO quizzes (creator_id, title, description, is_public, created_at)
    VALUES ($1, $2, $3, $4, $5)
    returning *;
  `;
  
  return db
  .query(queryString, queryParams)
    .then((data) => {
      return data.rows[0]; //returns the newly created quiz
    })
    .catch((err) => {
      console.log(err.message)
    });
}

module.exports = { createQuizzes };
  

