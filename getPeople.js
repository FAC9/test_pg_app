const dbConn = require('./db_connection');

module.exports = cb =>
  dbConn.query('SELECT * FROM people;', (error, data) =>
    (error
      ? cb(error)
      : cb(null, data.rows)));
