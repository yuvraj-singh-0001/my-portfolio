const db = require('../config/db');
const nodemailer = require('nodemailer');

// Configure Nodemailer for Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD // Use App Password, not regular password
    }
});

exports.submitContact = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        
        // 1. Save to MySQL database
        const [result] = await db.execute(
            'INSERT INTO contacts (name, email, subject, message, created_at) VALUES (?, ?, ?, ?, NOW())',
            [name, email, subject, message]
        );
        
        // 2. Send email to your Gmail
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER, // Your email
            subject: `Portfolio Contact: ${subject}`,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        };
        
        await transporter.sendMail(mailOptions);
        
        // 3. Send auto-reply to user
        const autoReplyOptions = {
            from: process.env.GMAIL_USER,
            to: email,
            subject: 'Thank you for contacting me!',
            html: `
                <h3>Thank you for your message, ${name}!</h3>
                <p>I have received your message and will get back to you soon.</p>
                <p>Best regards,<br>[Your Name]</p>
            `
        };
        
        await transporter.sendMail(autoReplyOptions);
        
        res.status(200).json({
            success: true,
            message: 'Message sent successfully!'
        });
        
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send message'
        });
    }
};