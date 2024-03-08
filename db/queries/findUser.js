const db = require('../connection');

const findUser = (username) => {
  const query = {
    text: 'SELECT * FROM users WHERE username = $1',
    values: [username]
  };

  return db.query(query)
    .then(data => {
      if (data.rows.length > 0) {
        return data.rows[0];
      }
      return null;
    })
    .catch((err) => {
      console.error(err.message);
      throw err;
    })
};

module.exports = { findUser }
