# PG with Node and Heroku

### How to connect to a local pg database from your node server;
1. Create database 'fac9_database' locally by running postgres
  `CREATE DATABASE fac9_database`
2. Add user 'admin' and assign as the onwer of the database  
  `CREATE USER admin WITH SUPERUSER PASSWORD 'fac9_admin'`  
  `ALTER DATABASE fac9_database OWNER TO admin`
3. Create *.db_connection.js* file to create a new `Pool` of connection options
4. Add *config.env* file to export environment variables containing the url and number of maximum connections of our local database
5. Include *config.env* in the *.gitignore* file


### How to apply some SQL commands of your choice to retrieve and modify a database;

6. Create build_database.sql file to populate table
7. Create build_database.js to make SQL query to the database
