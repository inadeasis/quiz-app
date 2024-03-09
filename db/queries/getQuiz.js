const db = require('../connection');

const getQuiz = (id) => {
  return db
    .query(`
      SELECT
        qz.id as quiz_id,
        qz.title,
        qz.quiz_description,
        qz.is_public,
        qz.created_at as quiz_created_at,
        qq.id as question_id,
        qq.question,
        qq.correct_answer,
        qq.created_at as question_created_at,
        qo.id as option_id,
        qo.choices,
        qo.is_correct
      FROM quizzes qz
      JOIN quiz_questions qq ON qz.id = qq.quizzes_id
      JOIN quiz_options qo ON qq.id = qo.question_id
      WHERE qz.id = $1;
    `, [id])
    .then(data => {
      if (data.rows.length === 0) {
        return null;
      }

      const quiz = {
        id: data.rows[0].quiz_id,
        title: data.rows[0].title,
        quiz_description: data.rows[0].quiz_description,
        is_public: data.rows[0].is_public,
        created_at: data.rows[0].quiz_created_at,
        questions: []
      };

      data.rows.forEach(row => {
        let question = quiz.questions.find(q => q.id === row.question_id);
        if (!question) {
          question = {
            id: row.question_id,
            question: row.question,
            correct_answer: row.correct_answer,
            created_at: row.question_created_at,
            options: []
          };
          quiz.questions.push(question);
        }
        question.options.push({
          id: row.option_id,
          choices: row.choices,
          // is_correct: row.is_correct
        });
      });

      return quiz;
    })
    .catch(err => {
      console.error(err);
      throw err;
    });
};

module.exports = { getQuiz };
