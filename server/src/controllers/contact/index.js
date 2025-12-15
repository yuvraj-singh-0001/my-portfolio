const express = require("express");
const createContactMessage = require("../../api/contact");

const router = express.Router();

// 👉 POST /api/contact
router.post("/", createContactMessage);

module.exports = router;
