const express = require('express');
const router = express.Router();
const { addUser } = require('../db/queries/addUsers');

router.get('/', (req, res) => {
  res.render('register');
});

router.post('/', (req, res) => {
   const user = {
    username: req.body.name,
    email: req.body.email,
    user_password: req.body.password
   };

   addUser(user)
     .then(user => {
      res.redirect('/login');
     })
     .catch(err => {
      console.error('User registration failed', err.message);
      res.status(500).send('Server error during registration');
     });
});

module.exports = router;
