const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

const sendContactNotification = async (data) => {
  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    subject: `📩 New Contact Message: ${data.subject}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Phone:</b> ${data.phone || "Not provided"}</p>
      <p><b>Subject:</b> ${data.subject}</p>
      <p><b>Message:</b></p>
      <p>${data.message}</p>
      <hr />
      <small>Received at ${new Date().toLocaleString()}</small>
    `
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendContactNotification };
