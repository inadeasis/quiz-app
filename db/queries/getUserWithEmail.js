const db = require('../connection');

const getUserWithEmail = function (email) {
  return db
 .query(`SELECT * FROM users WHERE email = $1;`, [email]) 
 .then((data) => {
   if (data.rows.length > 0) { // Check if any rows were returned
     return data.rows[0]; // Return the first row
   }
   return null; // Return null if no user found
 })
 .catch((err) => {
   console.log(err.message); // Throw an error instead of just logging
 });

};



module.exports = { getUserWithEmail };