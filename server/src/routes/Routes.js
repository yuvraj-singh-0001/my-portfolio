const express = require("express");
const createContactMessage = require("../api/contact");

const router = express.Router();

/**
 * FINAL ROUTE
 * POST /api/contact
 */
router.post("/contact", createContactMessage);

module.exports = router;
