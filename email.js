const nodemailer = require('nodemailer');
require('dotenv').config();

async function sendEmail(subject, text) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVICE,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'exemplo@examplo.com', // Substitua pelo email de destino
      subject: subject,
      text: text,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email enviado com sucesso!');
  } catch (error) {
    console.error('Erro ao enviar email:', error);
  }
}

module.exports = { sendEmail };
