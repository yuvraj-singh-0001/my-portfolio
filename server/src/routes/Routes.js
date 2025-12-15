const express = require("express");
const contactRouter = require("../controllers/contact");

const router = express.Router();

// 👉 /api/contact
router.use("/contact", contactRouter);

module.exports = router;
