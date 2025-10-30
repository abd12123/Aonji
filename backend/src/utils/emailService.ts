import nodemailer from 'nodemailer'

interface ContactEmailData {
  name: string
  email: string
  company: string
  serviceInterest: string
  message: string
}

const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  })
}

export const sendContactEmail = async (data: ContactEmailData) => {
  const { name, email, company, serviceInterest, message } = data

  const transporter = createTransporter()

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_USER, // Send to admin
    replyTo: email,
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Service Interest:</strong> ${serviceInterest}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  }

  // Send confirmation email to user
  const userMailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: 'Thank you for contacting Optimal Solutions',
    html: `
      <h2>Thank you for your inquiry!</h2>
      <p>Dear ${name},</p>
      <p>We have received your message and will get back to you within 24 hours.</p>
      <p>Here's a copy of your message:</p>
      <p><strong>Service Interest:</strong> ${serviceInterest}</p>
      <p><strong>Message:</strong> ${message}</p>
      <br>
      <p>Best regards,<br>The Optimal Solutions Team</p>
    `,
  }

  try {
    // Send both emails
    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(userMailOptions),
    ])
    
    console.log('Contact emails sent successfully')
  } catch (error) {
    console.error('Error sending contact emails:', error)
    throw error
  }
}












