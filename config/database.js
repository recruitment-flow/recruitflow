const mysql = require('mysql2');
require('dotenv').config();


const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10, // Maximum number of connections in the pool
    queueLimit: 0 // Unlimited number of pending connections
  });


  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error acquiring database connection:', err);
    }
    if (connection) {   
      console.log('Connected to database');
      connection.release();
    }
  }); 
  
  // Export the pool for use in other parts of your application
  module.exports = pool.promise();
