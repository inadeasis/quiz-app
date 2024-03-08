const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const cookieSession  = require('cookie-session')
const { getUserWithEmail } = require('../db/queries/getUserWithEmail');

router.use(cookieSession ({
  name: 'session',
  keys: ['key1', 'key2'],
  maxAge: 24 * 60 * 60 * 1000, // 24 hours
}));
router.get('/', (req, res) => {
  res.render('login');
});

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  getUserWithEmail(email)
    .then((user) => {
      if (!user) {
        return res.send({ error: "No user with that email" });
      }

      // Compare hashed password with provided password
      if (bcrypt.compareSync(password, user.user_password)) {
        // Passwords match, set session variables
        req.session.userId = user.id;
        res.redirect("/quizzes")
      } else {
        // Passwords do not match
        res.send({ error: "Incorrect password" });
      }
    })
    .catch((err) => {
      console.error('Error:', err);
      res.status(500).send('Server error');
    });
});



module.exports = router;