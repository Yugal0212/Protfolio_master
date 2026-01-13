import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields" },
        { status: 400 }
      )
    }

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email to owner (you receive the message)
    const ownerEmailHTML = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      line-height: 1.6;
      color: #333;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: white;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 40px 30px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 28px;
      font-weight: 700;
    }
    .badge {
      display: inline-block;
      background: rgba(255,255,255,0.2);
      padding: 8px 20px;
      border-radius: 20px;
      font-size: 14px;
      margin-top: 10px;
      backdrop-filter: blur(10px);
    }
    .content {
      padding: 40px 30px;
    }
    .info-card {
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      padding: 20px;
      border-radius: 15px;
      margin-bottom: 20px;
      border-left: 5px solid #667eea;
    }
    .info-label {
      font-size: 12px;
      color: #667eea;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 5px;
    }
    .info-value {
      font-size: 16px;
      color: #333;
      font-weight: 600;
    }
    .message-box {
      background: #f8f9fa;
      padding: 25px;
      border-radius: 15px;
      border: 2px solid #e9ecef;
      margin: 20px 0;
    }
    .message-text {
      color: #495057;
      line-height: 1.8;
      font-size: 15px;
    }
    .footer {
      background: #f8f9fa;
      padding: 25px 30px;
      text-align: center;
      border-top: 3px solid #667eea;
    }
    .footer-text {
      color: #6c757d;
      font-size: 14px;
      margin: 5px 0;
    }
    .icon {
      display: inline-block;
      margin-right: 8px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📬 New Contact Form Submission</h1>
      <div class="badge">Portfolio Website</div>
    </div>
    
    <div class="content">
      <div class="info-card">
        <div class="info-label">👤 Name</div>
        <div class="info-value">${name}</div>
      </div>
      
      <div class="info-card">
        <div class="info-label">📧 Email Address</div>
        <div class="info-value">${email}</div>
      </div>
      
      ${subject ? `
      <div class="info-card">
        <div class="info-label">📌 Subject</div>
        <div class="info-value">${subject}</div>
      </div>
      ` : ''}
      
      <div class="message-box">
        <div class="info-label">💬 Message</div>
        <div class="message-text">${message.replace(/\n/g, '<br>')}</div>
      </div>
      
      <p style="color: #6c757d; font-size: 14px; margin-top: 30px;">
        <strong>⏰ Received:</strong> ${new Date().toLocaleString('en-IN', { 
          timeZone: 'Asia/Kolkata',
          dateStyle: 'full',
          timeStyle: 'long'
        })}
      </p>
    </div>
    
    <div class="footer">
      <p class="footer-text"><strong>Response Required</strong></p>
      <p class="footer-text">Please reply to this contact form submission at your earliest convenience.</p>
      <p class="footer-text" style="margin-top: 15px; font-size: 12px;">
        This email was sent from your portfolio contact form
      </p>
    </div>
  </div>
</body>
</html>
    `

    // Confirmation email to sender (user receives confirmation)
    const senderEmailHTML = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      line-height: 1.6;
      color: #333;
      background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: white;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    .header {
      background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
      color: white;
      padding: 50px 30px;
      text-align: center;
    }
    .header h1 {
      margin: 0 0 10px 0;
      font-size: 32px;
      font-weight: 700;
    }
    .checkmark {
      width: 80px;
      height: 80px;
      margin: 0 auto 20px;
      background: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 48px;
      animation: scaleIn 0.5s ease-out;
    }
    @keyframes scaleIn {
      from { transform: scale(0); }
      to { transform: scale(1); }
    }
    .content {
      padding: 40px 30px;
    }
    .success-message {
      text-align: center;
      margin-bottom: 30px;
    }
    .success-title {
      font-size: 24px;
      color: #00d4ff;
      margin-bottom: 10px;
      font-weight: 700;
    }
    .success-text {
      color: #6c757d;
      font-size: 16px;
      line-height: 1.6;
    }
    .details-box {
      background: linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%);
      padding: 30px;
      border-radius: 15px;
      margin: 25px 0;
      border: 2px solid #00d4ff;
    }
    .detail-row {
      margin-bottom: 15px;
      padding-bottom: 15px;
      border-bottom: 1px solid rgba(0,212,255,0.2);
    }
    .detail-row:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }
    .detail-label {
      font-size: 12px;
      color: #7c3aed;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 5px;
    }
    .detail-value {
      font-size: 15px;
      color: #333;
      font-weight: 500;
    }
    .info-box {
      background: #fff8e1;
      padding: 20px;
      border-radius: 12px;
      border-left: 4px solid #ffc107;
      margin: 25px 0;
    }
    .info-box p {
      margin: 0;
      color: #856404;
      font-size: 14px;
    }
    .footer {
      background: #f8f9fa;
      padding: 30px;
      text-align: center;
      border-top: 3px solid #00d4ff;
    }
    .social-links {
      margin: 20px 0;
    }
    .social-link {
      display: inline-block;
      margin: 0 10px;
      color: #00d4ff;
      text-decoration: none;
      font-weight: 600;
      font-size: 14px;
    }
    .footer-text {
      color: #6c757d;
      font-size: 13px;
      margin: 5px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="checkmark">✓</div>
      <h1>Message Received!</h1>
      <p style="margin: 0; opacity: 0.9; font-size: 16px;">Thank you for reaching out</p>
    </div>
    
    <div class="content">
      <div class="success-message">
        <h2 class="success-title">Hi ${name}! 👋</h2>
        <p class="success-text">
          Your message has been successfully received and I'll get back to you as soon as possible. 
          Usually within 24-48 hours.
        </p>
      </div>
      
      <div class="details-box">
        <h3 style="margin-top: 0; color: #00d4ff; font-size: 18px;">📋 Your Message Details</h3>
        
        <div class="detail-row">
          <div class="detail-label">Name</div>
          <div class="detail-value">${name}</div>
        </div>
        
        <div class="detail-row">
          <div class="detail-label">Email</div>
          <div class="detail-value">${email}</div>
        </div>
        
        ${subject ? `
        <div class="detail-row">
          <div class="detail-label">Subject</div>
          <div class="detail-value">${subject}</div>
        </div>
        ` : ''}
        
        <div class="detail-row">
          <div class="detail-label">Message</div>
          <div class="detail-value">${message.substring(0, 150)}${message.length > 150 ? '...' : ''}</div>
        </div>
        
        <div class="detail-row">
          <div class="detail-label">Sent On</div>
          <div class="detail-value">${new Date().toLocaleString('en-IN', { 
            timeZone: 'Asia/Kolkata',
            dateStyle: 'full',
            timeStyle: 'short'
          })}</div>
        </div>
      </div>
      
      <div class="info-box">
        <p><strong>💡 What's Next?</strong></p>
        <p style="margin-top: 10px;">
          I've received your message and will review it carefully. If your inquiry requires an immediate response, 
          feel free to reach out via phone at <strong>+91 97230 23403</strong>.
        </p>
      </div>
      
      <p style="text-align: center; color: #6c757d; font-size: 14px; margin-top: 30px;">
        In the meantime, feel free to explore my projects and connect on social media!
      </p>
    </div>
    
    <div class="footer">
      <p style="font-weight: 700; color: #333; margin-bottom: 15px; font-size: 18px;">Yugal Jakasaniya</p>
      <p class="footer-text">Full-Stack Developer | MERN/MEAN Stack</p>
      <p class="footer-text">Rajkot, Gujarat, India</p>
      
      <div class="social-links">
        <a href="https://github.com/Yugal0212" class="social-link">GitHub</a>
        <span style="color: #dee2e6;">•</span>
        <a href="https://www.linkedin.com/in/yugal-jakasaniya-95b979314" class="social-link">LinkedIn</a>
      </div>
      
      <p class="footer-text" style="margin-top: 20px; font-size: 11px;">
        This is an automated confirmation email. Please do not reply directly to this email.
      </p>
    </div>
  </div>
</body>
</html>
    `

    // Send email to owner
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: `🔔 New Contact Form: ${subject || 'No Subject'} - from ${name}`,
      html: ownerEmailHTML,
      replyTo: email,
    })

    // Send confirmation email to sender
    await transporter.sendMail({
      from: `"Yugal Jakasaniya" <${process.env.EMAIL_FROM}>`,
      to: email,
      subject: "✅ Message Received - Yugal Jakasaniya Portfolio",
      html: senderEmailHTML,
    })

    return NextResponse.json(
      { 
        message: "Emails sent successfully! Check your inbox for confirmation.",
        success: true 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Email error:", error)
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    )
  }
}
