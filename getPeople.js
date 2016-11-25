const dbConn = require('./db_connection');

module.exports = {
  people: cb => {
    // select all table entries
    dbConn.query(
      /* 
      - selecting all entries
      */
      "SELECT * FROM people;", (error, data) =>
      (error
        ? cb(error)
        : cb(null, data.rows)));
  },
  ages: cb => {
    dbConn.query(
      /*
      - select first and last names of people between 24 and 28 years old
      */
      "SELECT firstName, surname FROM people WHERE age BETWEEN 24 AND 28;", (error, data) =>
      (error
        ? cb(error)
        : cb(null, data.rows)));
  },
  superpowers: cb => {
    dbConn.query(
      /*
      - select first names of people between 25 and 29 years old with a superpower containing the pattern 'ing'
      */
      "SELECT firstName FROM people WHERE age BETWEEN 25 and 29 INTERSECT SELECT firstName FROM people \
      WHERE superpower LIKE '%ing%';", (error, data) =>
      (error
        ? cb(error)
        : cb(null, data.rows)));
  },
  alter: cb => {
    dbConn.query(
      /*
      - alter the type of column firstName to CHAR(50) from VARCHAR(100)
      */
      "ALTER TABLE people ALTER COLUMN firstName TYPE CHAR(50) USING firstName::VARCHAR;", (error, data) =>
      (error
        ? cb(error)
        : cb(null, data.rows)));
  },
  type: cb => {
    dbConn.query(
      /*
      - select data types of firstName column
      */
      "SELECT pg_typeof(firstName) FROM people", (error, data) =>
      (error
        ? cb(error)
        : cb(null, data.rows)));
  }
};
