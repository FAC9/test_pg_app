const dbConn = require('./db_connection');

module.exports = cb => {
  // select all table entries
  dbConn.query(
    /* Following 5 SQL queries are for:
    - selecting all entries
    - select first and last names of people between 24 and 28 years old
    - select first names of people between 25 and 29 years old with a superpower containing the pattern 'ing'
    - alter the type of column firstName to CHAR(50) from VARCHAR(100)
    - select data types of all columns
    */
    "SELECT * FROM people;\
    SELECT firstName, surname FROM people WHERE age BETWEEN 24 AND 28;\
    SELECT firstName FROM people WHERE age BETWEEN 25 and 29 INTERSECT SELECT firstName FROM people WHERE superpower LIKE '%ing%';\
    ALTER TABLE people ALTER COLUMN firstName TYPE CHAR(50) USING firstName::VARCHAR;\
    SELECT pg_typeof(firstName) FROM people", (error, data) =>
    (error
      ? cb(error)
      : cb(null, data.rows)));
  // select name and surname by superpower
  // select
}
