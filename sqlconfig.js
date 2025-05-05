const mySql = require('mysql');

const connection = mySql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  database: 'gh',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:' + err.stack);
    return;
  }
  console.log('Connected to the database!');
});

module.exports = connection;