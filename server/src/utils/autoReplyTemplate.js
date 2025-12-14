const getAutoReplyTemplate = ({ name, subject, message }) => {
  let subjectLine = "Thank you for contacting me";

  if (subject === "hire") subjectLine = "Regarding Your Hiring Inquiry";
  if (subject === "project") subjectLine = "Regarding Your Project Discussion";
  if (subject === "collaboration") subjectLine = "Regarding Collaboration Opportunity";

  return {
    subject: subjectLine,
    html: `
      <div style="font-family: Arial, sans-serif; line-height:1.6; color:#333;">
        <p>Dear ${name},</p>

        <p>
          Thank you for reaching out and for taking the time to contact me.
          I have successfully received your message and appreciate your interest.
        </p>

        <p><strong>Your message:</strong></p>
        <blockquote style="border-left:3px solid #4f46e5; padding-left:10px; color:#555;">
          ${message}
        </blockquote>

        <p>
          I am currently reviewing your message and will get back to you
          with a detailed response within <strong>3 hours</strong>.
        </p>

        <p>
          If your inquiry is urgent, feel free to reply to this email
          or contact me directly.
        </p>

        <br/>

        <p>Best regards,</p>
        <p>
          <strong>Yuvraj Singh</strong><br/>
          Full Stack Developer<br/>
           singhyuvraj8420@gmail.com<br/>
           Noida, India
        </p>

        <hr style="margin-top:30px;" />
        <p style="font-size:12px; color:#777;">
          This is an automated response confirming receipt of your message.
        </p>
      </div>
    `
  };
};

module.exports = { getAutoReplyTemplate };
