const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,       // TLS later
  auth: {
    user: process.env.BREVO_SMTP_USER,
    pass: process.env.BREVO_SMTP_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

const sendMail = async (options) => {
  try {
    console.log("📧 Sending Email To:", options.to);

    const result = await transporter.sendMail({
      from: `"${process.env.BREVO_SENDER_NAME}" <${process.env.BREVO_SENDER_EMAIL}>`,
      ...options
    });

    console.log("✅ Email Sent Successfully:", result.messageId);
    return result;
  } catch (error) {
    console.log("❌ Email Failed:", error.message);
    throw error;
  }
};

module.exports = { sendMail };
