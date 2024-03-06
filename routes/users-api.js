/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const bcrypt = require("bcrypt");
const userQueries = require('../db/queries/users');
const userReg = require('../db/queries/addUsers');


router.get('/', (req, res) => {
  userQueries.getUsers()
    .then(users => {
      res.json({ users });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

//create a user route
router.post("/addusers", (req, res) => {
  const user = req.body;
  if (!user.username || !user.email || !user.user_password) {
    return res.send({error: "Enter registration details"});
  }
  user.user_password = bcrypt.hashSync(user.user_password, 12);
  userReg
    .addUser(user)
    .then((user) => {
      req.session.userId = user.id;
      res.send("User Created");
    })
    .catch((e) => res.send(e));
});

module.exports = router;
