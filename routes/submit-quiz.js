const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('submit-quiz');
});

module.exports = router;
