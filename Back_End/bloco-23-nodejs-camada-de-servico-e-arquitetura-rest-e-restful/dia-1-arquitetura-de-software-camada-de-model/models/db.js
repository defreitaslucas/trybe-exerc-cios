const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'lucas',
  password: 'Lu741963@050492',
  database: 'users_crud'
});

module.exports = connection;
