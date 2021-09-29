const nodemailer = require("nodemailer");

function enviar(to, subject, text) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "nodemailerprueba3",
      pass: "desafiolatam15*",
    },
  });

  let mailOptions = {
    from: "nodemailerprueba3@gmail.com",
    to,
    subject,
    text,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) console.log('No se pudo entregar el correo', err);
    if (data) console.log('Enviado Correctamente');
  });
}

module.exports = enviar;

