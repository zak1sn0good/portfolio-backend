const Contact = require('../models/contact');
const transporter = require('../utils/nodemailer');
const { validateEmail } = require('../utils/validateEmail');
const dotenv = require('dotenv');
dotenv.config();

const addContact = (req, res) => {

  const { email, subject, message } = req.body;
  if(
      !email || !message || !subject || !validateEmail(email) 
      || typeof message !== 'string' || typeof subject !== 'string' 
    ){

    return res.status(400).json({
      message : 'missing or invalid fields!'
    });

  }else{

    transporter.sendMail({
      from : process.env.HOTMAIL_ACCOUNT,
      to : email,
      subject : `re : ${subject}`,
      text : 'i did recieve your message, tahnks for the feedback!'
    })
    .then(info => {
      const contact = new Contact({
        email : email,
        subject : subject,
        text : message
      });
      return contact.save();
    })
    .then((doc) => {
      res.status(201).json({
        message : "email sent successfully!"
      });
    })
    .catch(err => {
      res.status(500).json({
        message : "something went wrong"
      });
    });

  }

};

module.exports = {
  addContact
};