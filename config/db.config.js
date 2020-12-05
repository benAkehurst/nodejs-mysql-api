'use strict';

const mysql = require('mysql');

// Connect to Localhost DB
const dbConn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'node_mysql_api',
});

dbConn.connect((err) => {
  if (err) throw err;
  console.log('Connected to Database');
});

module.exports = dbConn;
