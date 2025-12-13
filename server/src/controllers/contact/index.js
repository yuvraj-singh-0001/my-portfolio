const express = require("express");
const createContactMessage = require("../../api/contact");

const router = express.Router();

router.post("/contact", createContactMessage);

module.exports = router;
