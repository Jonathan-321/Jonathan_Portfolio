import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  const { firstname, lastname, email, phone, service, message } = await req.json();

  // Create a Nodemailer transporter using Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'higermain1@gmail.com',
    subject: 'New Contact Form Submission',
    text: `
      Name: ${firstname} ${lastname}
      Email: ${email}
      Phone: ${phone}
      Service: ${service}
      Message: ${message}
    `,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email', error: error.message }, { status: 500 });
  }
}