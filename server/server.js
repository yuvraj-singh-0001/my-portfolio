require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// Import configurations
const { connectDatabase } = require('./config/database');
const { corsOptions } = require('./config/server.config');

// Import middleware
const errorMiddleware = require('./middleware/error.middleware');
const loggerMiddleware = require('./middleware/logger.middleware');

// Import routes
const contactRoutes = require('./api/contact/contact.routes');
const healthRoutes = require('./api/health/health.routes');

// Initialize express app
const app = express();

// Connect to database
connectDatabase();

// Middleware
app.use(helmet()); // Security headers
app.use(cors(corsOptions)); // CORS configuration
app.use(morgan('dev')); // HTTP request logging
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(loggerMiddleware); // Custom logging

// API Routes
app.use('/api/health', healthRoutes);
app.use('/api/contact', contactRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Portfolio Server API',
    status: 'running',
    timestamp: new Date().toISOString(),
    documentation: 'API documentation coming soon...'
  });
});

// 404 Handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'API endpoint not found',
    path: req.originalUrl
  });
});

// Error handling middleware (should be last)
app.use(errorMiddleware);

// Start server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`
  🚀 Server is running
  📡 Port: ${PORT}
  🌐 Environment: ${process.env.NODE_ENV}
  ⏰ Time: ${new Date().toLocaleTimeString()}
  🔗 Health Check: http://localhost:${PORT}/api/health
  `);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('❌ Unhandled Promise Rejection:', err);
  // Close server & exit process
  server.close(() => process.exit(1));
});

module.exports = server;