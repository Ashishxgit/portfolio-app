import nodemailer from 'nodemailer';

let transporter = null;

export const initMailer = async () => {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (user && pass && user !== 'your_email@gmail.com') {
    transporter = nodemailer.createTransport({
      host: host || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465',
      auth: { user, pass },
    });
    console.log(`[Nodemailer] Transporter initialized for ${user}`);
    return transporter;
  }

  // Fallback: Create Ethereal test SMTP account for development/testing
  try {
    const testAccount = await nodemailer.createTestAccount();
    transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
    console.log(`[Nodemailer] Ethereal Test Transporter initialized.`);
    console.log(`[Nodemailer Test Account] User: ${testAccount.user}`);
    return transporter;
  } catch (err) {
    console.warn(`[Nodemailer Warning] Test mailer creation error: ${err.message}. Email dispatching will run in mock log mode.`);
    return null;
  }
};

export const sendContactEmail = async ({ name, email, subject, message }) => {
  const recipient = process.env.RECEIVER_EMAIL || 'alex.mercer@example.com';

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; background-color: #09090b; color: #f4f4f5; padding: 24px; border-radius: 12px;">
      <h2 style="color: #10b981; margin-bottom: 16px;">New Portfolio Contact Request</h2>
      <hr style="border-color: #27272a; margin-bottom: 20px;" />
      
      <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
      <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #06b6d4;">${email}</a></p>
      <p style="margin: 8px 0;"><strong>Subject:</strong> ${subject}</p>
      
      <div style="background-color: #18181b; border: 1px solid #27272a; padding: 16px; border-radius: 8px; margin-top: 16px;">
        <p style="margin: 0; white-space: pre-wrap;">${message}</p>
      </div>
      
      <p style="font-size: 12px; color: #71717a; margin-top: 24px;">Received via Portfolio POST /api/contact</p>
    </div>
  `;

  if (!transporter) {
    console.log(`[Nodemailer Mock Dispatch] Email to ${recipient} containing message from ${name} (${email}): "${subject}"`);
    return { success: true, mode: 'mock' };
  }

  try {
    const info = await transporter.sendMail({
      from: `"Portfolio Contact Form" <no-reply@portfolio.dev>`,
      to: recipient,
      replyTo: email,
      subject: `[Portfolio Inquiry] ${subject}`,
      html: htmlContent,
    });

    console.log(`[Nodemailer Success] Message sent: ${info.messageId}`);
    if (nodemailer.getTestMessageUrl(info)) {
      console.log(`[Nodemailer Test Email URL] ${nodemailer.getTestMessageUrl(info)}`);
    }
    return { success: true, messageId: info.messageId, previewUrl: nodemailer.getTestMessageUrl(info) };
  } catch (error) {
    console.error(`[Nodemailer Error] Email dispatch failed: ${error.message}`);
    return { success: false, error: error.message };
  }
};
