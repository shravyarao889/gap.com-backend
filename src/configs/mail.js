const nodemailer = require("nodemailer");


module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "3e728d5cda730e", // generated ethereal user
      pass: "f8f77f974d7d54", // generated ethereal password
    },
  });