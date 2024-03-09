const express = require('express');
const router  = express.Router();
const bcrypt = require('bcryptjs');
const { findUser } = require('../db/queries/findUser')

//Temporarily comment out cookieSession, will need to use later
// router.use(cookieSession ({
//   name: 'session',
//   keys: ['key1', 'key2'],
//   maxAge: 24 * 60 * 60 * 1000, // 24 hours
// }));
router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', (req, res) => {

  const username = req.body.username;
  const password = req.body.password;

  findUser(username)
    .then(user => {
      if (!user) {
        return res.status(500).send('Invalid username')
      }
      bcrypt.compare(password, user.user_password)
        .then(isValidPass => {
          if (isValidPass) {
            res.redirect('/home');
          } else {
            return res.status(500).send('Invalid password')
          }
        })
        .catch(err => {
          console.error('Password comparison error', err);
          res.status(500).send('An error has occured');
        });
    })
    .catch(err => {
      console.error('Error on user retrieval', err);
      res.status(500).send('An error has occured');
    });
});

module.exports = router;
