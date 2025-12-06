const express = require('express');
const contactRouter = require('../controllers/contact');

const router = express.Router();

// Contact form routes
router.use('/contact', contactRouter);

module.exports = router;