const express = require('express');
const router = express.Router();
const { addUser } = require('../db/queries/addUsers');
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.get('/', (req, res) => {
  res.render('register');
});

router.post('/', (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.error('Error hashing password', err);
      return res.status(500).send('Error hashing the password');
    }

    const user = {
      username: username,
      email: email,
      user_password: hash
     };

     addUser(user)
     .then(user => {
      res.redirect('/login');
     })
     .catch(err => {
      console.error('User registration failed', err.message);
      res.status(500).send('Server error during registration');
     });
   })
});

module.exports = router;
