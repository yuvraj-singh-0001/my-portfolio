const pool = require("../config/db");

const createContactMessage = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Required fields missing"
      });
    }

    const sql = `
      INSERT INTO contacts
      (name, email, phone, subject, message, is_read)
      VALUES (?, ?, ?, ?, ?, 0)
    `;

    await pool.execute(sql, [
      name,
      email,
      phone || null,
      subject,
      message
    ]);

    return res.status(201).json({
      success: true,
      message: "Message saved successfully"
    });

  } catch (err) {
    console.error("DB ERROR:", err);
    return res.status(500).json({
      success: false,
      message: "Database error"
    });
  }
};

module.exports = createContactMessage;
