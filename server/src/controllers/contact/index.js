const express = require('express');
const { submitContact } = require('../../api/contact');
const router = express.Router();

router.post('/submit', submitContact);

module.exports = router;