const sgMail = require('@sendgrid/mail');
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY); // Set this in Vercel's environment variables
const recipientEmail = process.env.RECIPIENT_EMAIL;
const senderEmail = process.env.SENDER_EMAIL;

module.exports = async (req, res) => {

    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', 'https://nikoroytio.com'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    const { subject, name, email, message } = req.body;

    const msg = {
        to: recipientEmail,
        from: senderEmail,
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: `<strong>Name: ${name}</strong><br>Email: ${email}<br>Message: ${message}`
    };

    try {
        await sgMail.send(msg);
        res.status(200).send('Email sent successfully.');
    } catch (error) {
        console.error('Error sending email:', error);
        if (error.response) {
            console.error(error.response.body)
        }
        res.status(500).send('Email not sent.');
    }
};