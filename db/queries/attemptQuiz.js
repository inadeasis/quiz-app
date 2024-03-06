const attemptQuiz = (user_id, quiz_id, chosen_answer) => {
  const submitted_at = new Date(); // Generate current timestamp

  let attemptId; // Variable to store the ID of the attempt

  // Construct the INSERT query string for answers
  let answerQueryString = `
    INSERT INTO quiz_attempt_answers (question_id, chosen_answer)
    VALUES `;

  // Create an array to hold the values for the answers query
  const answerValues = chosen_answer.map((answer) => {
    return `(${answer.question_id}, '${answer.chosen_answer}')`;
  });

  answerQueryString += answerValues.join(', '); // Join the values for the answers query

  // Execute the answers query
  return db
    .query(answerQueryString)
    .then(() => {
      // Construct the INSERT query string for the attempt
      const attemptQueryString = `
        INSERT INTO quiz_attempts (quiz_id, user_id, submitted_at)
        VALUES ($1, $2, $3)
        RETURNING id;`;

      // Define the parameter values for the attempt query
      const attemptValues = [quiz_id, user_id, submitted_at];

      // Execute the attempt query
      return db
      .query(attemptQueryString, attemptValues);
    })
    .then((data) => {
      attemptId = data.rows[0].id; // Get the ID of the newly created attempt
      return attemptId; // Return the ID of the attempt
    })
    .catch((error) => {
      console.log(err.message)
    });
};
