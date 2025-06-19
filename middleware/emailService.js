// emailService.js

// Use dotenv to securely manage environment variables from a .env file
require('dotenv').config();
const nodemailer = require('nodemailer');

// Configure the Nodemailer Transporter once using credentials from your .env file
// This object is reused for all emails, which is efficient.
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        // IMPORTANT: These credentials should be in a .env file, not in the code.
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASS  // Your Gmail "App Password"
    }
});

/**
 * A generic and reusable function to send any email.
 * @param {object} mailOptions - The Nodemailer mail options object (to, subject, html, attachments, etc.).
 * @returns {Promise<void>}
 */
const sendEmail = async (mailOptions) => {
    try {
        // The sendMail method sends the email and returns a promise
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully! Message ID:', info.messageId);
    } catch (error) {
        console.error('Error occurred while sending email:', error);
        // Depending on your application's needs, you might want to throw the error
        // to be handled by the calling function.
        throw new Error('Failed to send email.');
    }
};

module.exports = sendEmail;