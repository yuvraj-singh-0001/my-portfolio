const axios = require("axios");

const sendMail = async ({ to, subject, html }) => {
  try {
    console.log("📧 Sending Email To:", to);

    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: process.env.BREVO_SENDER_NAME,
          email: process.env.BREVO_SENDER_EMAIL
        },
        to: [{ email: to }],
        subject,
        htmlContent: html
      },
      {
        headers: {
          "accept": "application/json",
          "content-type": "application/json",
          "api-key": process.env.BREVO_API_KEY
        }
      }
    );

    console.log("✅ Email Sent Successfully");
    return response.data;
  } catch (error) {
    console.error("❌ Email Failed:", error?.response?.data || error.message);
  }
};

module.exports = { sendMail };
