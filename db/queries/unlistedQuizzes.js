const db = require('../connection');

const unlistedQuizzes = (is_public) => {
  
  return db
  .query(`SELECT * FROM quizzes WHERE is_public = false`)
    .then((data) => {
      if (data.rows.length > 0) {
        return data.rows[0]; //returns first row
      }
      return null; //returns null if no data exists
    })
    .catch((err) => {
      console.log(err.message)
    });
}

module.exports = { unlistedQuizzes };
  

