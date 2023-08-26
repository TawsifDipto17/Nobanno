const mysql = require('mysql2/promise'); // Use the promise-based version of the package

// Configure the database connection
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
};

async function run() {
  let connection;

  try {
    // Create a connection to the database
    connection = await mysql.createConnection(dbConfig);

    // Execute a query
    const [rows, fields] = await connection.execute('SELECT * FROM users');

    console.log(rows); // Display the query results
  } catch (err) {
    console.error('Error:', err);
  } finally {
    if (connection) {
      try {
        // Close the connection
        connection.end();
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
}

run();



