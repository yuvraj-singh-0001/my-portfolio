const pool = require("../config/db");
const { sendMail } = require("../utils/mailer");
const { getAutoReplyTemplate } = require("../utils/autoReplyTemplate");

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

    // // 2️⃣ Email to YOU (Admin)
    // await sendMail({
    //   from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
    //   to: process.env.GMAIL_USER,
    //   subject: `📩 New Contact Message: ${subject}`,
    //   html: `
    //     <h3>New Contact Message</h3>
    //     <p><b>Name:</b> ${name}</p>
    //     <p><b>Email:</b> ${email}</p>
    //     <p><b>Phone:</b> ${phone || "N/A"}</p>
    //     <p><b>Subject:</b> ${subject}</p>
    //     <p><b>Message:</b></p>
    //     <p>${message}</p>
    //   `
    // });


    // // 3️⃣ AUTO-REPLY TO USER (IMMEDIATE – RECOMMENDED)
    // const autoReply = getAutoReplyTemplate({ name, subject, message });

    // try {
    //   await sendMail({
    //     from: `"Yuvraj Singh" <${process.env.GMAIL_USER}>`,
    //     to: email,
    //     subject: autoReply.subject,
    //     html: autoReply.html
    //   });

    //   console.log(`Auto-reply sent to ${email}`);
    // } catch (err) {
    //   console.error("Auto-reply email failed:", err);
    // }


    return res.json({
      success: true,
      message: "Message sent successfully"
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
