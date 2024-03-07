const db = require('../connection');

const addUser = function (user) {
  const query = {
    text: 'INSERT INTO users (username, email, user_password) VALUES ($1, $2, $3) RETURNING *',
    values: [user.username, user.email, user.user_password]
  };

  return db
  .query(query)
  .then((result) => {
    return result.rows[0]; // Return the first row (the newly inserted user)
  })
  .catch((err) => {
    console.log(err.message);
  });

};



module.exports = { addUser };


