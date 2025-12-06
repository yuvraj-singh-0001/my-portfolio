const nodemailer = require('nodemailer')

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
})

// Email to you (the portfolio owner)
exports.sendEmailToYou = async (contactData) => {
  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    subject: `🎯 NEW CONTACT: ${contactData.subject}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
          .info-item { margin-bottom: 15px; }
          .label { font-weight: bold; color: #4a5568; }
          .value { color: #2d3748; }
          .urgent { background: #fed7d7; padding: 10px; border-radius: 5px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚨 New Contact Form Submission</h1>
            <p>Someone wants to hire/collaborate with you!</p>
          </div>
          <div class="content">
            <div class="info-item">
              <div class="label">👤 Name:</div>
              <div class="value">${contactData.name}</div>
            </div>
            <div class="info-item">
              <div class="label">📧 Email:</div>
              <div class="value"><a href="mailto:${contactData.email}">${contactData.email}</a></div>
            </div>
            ${contactData.phone ? `
            <div class="info-item">
              <div class="label">📱 Phone:</div>
              <div class="value"><a href="tel:${contactData.phone}">${contactData.phone}</a></div>
            </div>
            ` : ''}
            <div class="info-item">
              <div class="label">📋 Subject:</div>
              <div class="value">${contactData.subject}</div>
            </div>
            <div class="info-item">
              <div class="label">💬 Message:</div>
              <div class="value" style="white-space: pre-line;">${contactData.message}</div>
            </div>
            <div class="urgent">
              ⚡ <strong>Action Required:</strong> Please respond within 24 hours for best results.
            </div>
            <p>
              <a href="mailto:${contactData.email}" style="background: #4299e1; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
                ✉️ Reply Now
              </a>
            </p>
          </div>
        </div>
      </body>
      </html>
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log('📧 Notification email sent to you')
    return true
  } catch (error) {
    console.error('❌ Failed to send notification email:', error)
    return false
  }
}

// Auto-reply to the visitor
exports.sendAutoReply = async (contactData) => {
  const mailOptions = {
    from: `"Yuvraj Singh - Portfolio" <${process.env.GMAIL_USER}>`,
    to: contactData.email,
    subject: '✅ Thanks for reaching out!',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #4299e1 0%, #667eea 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
          .highlight { background: #e6fffa; padding: 15px; border-radius: 5px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Hi ${contactData.name} 👋</h1>
            <p>Thanks for contacting me!</p>
          </div>
          <div class="content">
            <p>I've received your message regarding <strong>"${contactData.subject}"</strong> and I'm excited to discuss it with you.</p>
            
            <div class="highlight">
              <h3>📞 What happens next?</h3>
              <ol>
                <li>I'll review your message within 2-4 hours</li>
                <li>You'll receive a detailed response from me</li>
                <li>We can schedule a call to discuss further</li>
              </ol>
            </div>

            <p><strong>Best regards,</strong><br>Yuvraj Singh<br>Full Stack Developer</p>
            
            <p style="font-size: 12px; color: #718096; margin-top: 30px;">
              This is an automated response. For immediate assistance, call: +91 98765 43210
            </p>
          </div>
        </div>
      </body>
      </html>
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log('📧 Auto-reply sent to visitor')
    return true
  } catch (error) {
    console.error('❌ Failed to send auto-reply:', error)
    return false
  }
}