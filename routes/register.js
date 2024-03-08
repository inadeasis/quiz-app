const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
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
   if(!user.username || !user.email || !user.user_password) {
    return res.send({error: "Enter registratin details"});
   }
   user.user_password = bcrypt.hashSync(user.user_password, 12);

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
