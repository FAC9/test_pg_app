const env = require('env2');
const fs = require('fs');

env('./config.env');

const conn = require('./db_connection');

const sql = fs.readFileSync(`${__dirname}/build_database.sql`).toString();

conn.query(sql, (error, result) => {
  if(error) {
    console.log('Error', error);
  } else {
    console.log('Result', result);
  }
});
