// const env = require('dotenv').config().parsed;
//
// // get the client
// const mysql = require('mysql2');
//
// // create the connection to database
// const connection = mysql.createConnection({
//   // host: env.NODE_DB_HOST,
//   host: env.NODE_DB_HOST,
//   user: env.NODE_DB_USERNAME,
//   password: env.NODE_DB_PASSWORD,
//   database: env.NODE_DB_DATABASE
// });
//
//
// connection.connect(function(err) {
//   if (err) {
//     console.log("Not Connected! > >>  > > >> > > > > > >> > > > >> > > > > > >> > > > > > >> > ");
//
//     throw err;
//   }
//   console.log("Connected! > >>  > > >> > > > > > >> > > > >> > > > > > >> > > > > > >> > ");
// });


const users = require('../models/user');
const teams = require('../models/team');
const tournaments = require('../models/tournament');
const games = require('../models/game');

/**
 * create table if not exists
 *
 */
users.sync().then(() => {
  teams.sync().then(() => {
    tournaments.sync().then(() => {
      games.sync().then(() => {
      });
    });
  });
});

