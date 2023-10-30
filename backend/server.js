const express = require('express');
const cors = require('cors');
const app = express();
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const recipientEmail = process.env.RECIPIENT_EMAIL;

app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
    const msg = {
        to: recipientEmail,  // Your email where you want to get the messages
        from: req.body.email,  // User's email
        subject: req.body.subject,
        text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`,
        html: `<strong>Name: ${req.body.name}</strong><br>Email: ${req.body.email}<br>Message: ${req.body.message}`
    };

    try {
        await sgMail.send(msg);
        res.status(200).send('Email sent successfully.');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Email not sent.');
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3001, () => {
    console.log('Server started on http://localhost:3001');
});