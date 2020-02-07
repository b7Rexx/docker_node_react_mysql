const env = require('dotenv').config().parsed;

// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  // host: env.NODE_DB_HOST,
  host: env.NODE_DB_HOST,
  user: env.NODE_DB_USERNAME,
  password: env.NODE_DB_PASSWORD,
  database: env.NODE_DB_DATABASE
});


connection.connect(function(err) {
  if (err) {
    console.log("Not Connected! > >>  > > >> > > > > > >> > > > >> > > > > > >> > > > > > >> > ");

    throw err;
  }
  console.log("Connected! > >>  > > >> > > > > > >> > > > >> > > > > > >> > > > > > >> > ");
});

// // simple query
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
//   function(err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );
//
// // with placeholder
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//   ['Page', 45],
//   function(err, results) {
//     console.log(results);
//   }
// );