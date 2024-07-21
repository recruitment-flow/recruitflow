const mysql = require('mysql2');

const pool = mysql.createPool({
    host: DATABASE_HOST,
    user: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    waitForConnections: true,
    connectionLimit: 10, // Maximum number of connections in the pool
    queueLimit: 0 // Unlimited number of pending connections
  });
  
  // Export the pool for use in other parts of your application
  module.exports = pool.promise();
