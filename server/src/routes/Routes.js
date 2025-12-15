const express = require("express");
const contactController = require("../controllers/contact");

const router = express.Router();

// POST /api/contact
router.post("/contact", contactController);

module.exports = router;