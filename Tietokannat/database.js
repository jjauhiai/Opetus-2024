const mysql = require('mysql2');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'testuser',
  password: 'xxxx',
  database: 'test_db2'
});
module.exports = connection;