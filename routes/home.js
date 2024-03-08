const express = require('express');
const router = express.Router();
const db = require('../db/connection');

router.get('/', (req, res) => {
  const query = `SELECT * FROM quizzes WHERE is_public = true;`;

  db.query(query)
    .then(result => {
      const quizzes = result.rows;
      res.render('home', { quizzes });
    })
    .catch(err => {
      console.error('Error fetching public quizzes', err);
      res.status(500).send('Server error: ' + err.message);
    });
});

module.exports = router;
