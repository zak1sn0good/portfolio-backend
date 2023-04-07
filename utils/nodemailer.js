const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const transporter = nodemailer.createTransport({
  service : 'hotmail',
  auth: {
    user: process.env.HOTMAIL_ACCOUNT,
    pass: process.env.HOTMAIL_PASSWORD
  }
});

module.exports = transporter;