const pool = require("../config/db");
const { sendContactNotification } = require("../utils/mailer");

async function createContactMessage(req, res) {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Required fields missing"
      });
    }

    // 1️⃣ Save to DB
    await pool.execute(
      `INSERT INTO contact_messages (name, email, phone, subject, message)
       VALUES (?, ?, ?, ?, ?)`,
      [name, email, phone, subject, message]
    );

    // 2️⃣ Send Gmail notification
    await sendContactNotification({
      name,
      email,
      phone,
      subject,
      message
    });

    return res.json({
      success: true,
      message: "Message stored and email notification sent"
    });

  } catch (error) {
    console.error("Contact API error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
}

module.exports = createContactMessage;
