const mysql = require('mysql2');

// Database configuration
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'portfolio_db',
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
};

// Create connection pool
const pool = mysql.createPool(dbConfig);

// Create a promise wrapper for the pool
const promisePool = pool.promise();

// Test database connection
const connectDatabase = async () => {
  try {
    const connection = await promisePool.getConnection();
    console.log('✅ MySQL Database connected successfully');
    connection.release();
    
    // Create table if not exists
    await createTables();
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    console.log('💡 Please check:');
    console.log('1. Is MySQL running? (mysql -u root -p)');
    console.log('2. Check .env file DB credentials');
    console.log('3. Create database: CREATE DATABASE portfolio_db;');
    process.exit(1);
  }
};

// Create tables function
const createTables = async () => {
  try {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS contacts (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        phone VARCHAR(20),
        subject VARCHAR(200) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        status ENUM('new', 'read', 'replied') DEFAULT 'new',
        ip_address VARCHAR(45),
        user_agent TEXT,
        INDEX idx_status (status),
        INDEX idx_created_at (created_at)
      )
    `;
    
    await promisePool.execute(createTableQuery);
    console.log('✅ Contacts table ready');
  } catch (error) {
    console.error('❌ Error creating tables:', error.message);
  }
};

module.exports = {
  pool: promisePool,
  connectDatabase
};