# PG with Node and Heroku

### How to connect to a local pg database from your node server;
1. Create database 'fac9_database' locally by running postgres
  `CREATE DATABASE fac9_database`
2. Add user 'admin' and assign as the onwer of the database  
  `CREATE USER admin WITH SUPERUSER PASSWORD 'fac9_admin'`  
  `ALTER DATABASE fac9_database OWNER TO admin`
3. Create *db_connection.js* file to create a new `Pool` of connection options
4. Add *config.env* file to export environment variables for the url and number of maximum connections of our local database
5. Include *config.env* in the *.gitignore* file


### How to apply some SQL commands of your choice to retrieve and modify a database;

6. Create *build_database.sql* file to populate a table called people
7. Create *build_database.js* to make SQL query to the database
8. Run `node build_database.js` and check the database has been built following the steps below:
  - Make sure that no errors were thrown when running the *build_database.js*
  - Run the postgres server running `psql`
  - Try `SELECT * FROM people` and that should return all the columns and rows inserted in *build_database.sql*
9. Setup basic Hapi server using a single endpoint to `/people` and create *getPeople.js* module to make queries to our database through this endpoint.

### How to deploy an app (with a database to HEOROKU)

If you created your database on https://postgres.heroku.com/, you will not see the database via your heroku pg:info command. What you can do to add your database to your application, however, would be to:

1. Log into https://postgres.heroku.com/.
2. Click on the database you want to attach to your application.
3. Under 'Connection Settings', click the configuration button at the top right.
4. Then click the 'URL' option.
5. Copy your database URL, this should be something like "postgres://blah:blah@ec2-23-23-122-88.compute-1.amazonaws.com:5432/omg".
6. In your application, on the command line, run heroku config:set DATABASE_URL=postgres://blah:blah@ec2-23-23-122-88.compute-1.amazonaws.com:5432/omg

Reference [stackoverflow](http://stackoverflow.com/questions/11700602/how-can-i-attach-a-database-to-an-app-in-heroku)
