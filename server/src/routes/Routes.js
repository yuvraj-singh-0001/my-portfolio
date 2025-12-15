const express = require("express");
const contactRouter = require("../controllers/contact/index");

const router = express.Router();

// /api/contact
router.use("/contact", contactRouter);

module.exports = router;
