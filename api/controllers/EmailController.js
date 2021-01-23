const transporter = require('nodemailer').createTransport(
  require('../config/email'),
);
const { loja: link } = require('../config/index');
const moment = require('moment');

const _send = ({ subject, emails, message }, cb = null) => {
  const mailOptions = {
    from: 'no-response@lojati.com',
    to: emails,
    subject,
    html: message,
  };
  if (process.env.NODE_ENV === 'production') {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.warn(error);
        if (cb) return cb(error);
      } else {
        if (cb) return cb(null, true);
      }
    });
  } else {
    console.log(mailOptions);
    if (cb) return cb(null, true);
  }
};

// Novo Pedido
const enviarNovoPedido = ({ usuario, pedido }) => {};

// Pedido Cancelado
const cancelarPedido = ({ usuario, pedido }) => {};

// Atualizacao de Pagamento e Entrega
const atualizarPedido = ({ usuario, pedido, status, data, tipo }) => {};

module.exports = {
  enviarNovoPedido,
  cancelarPedido,
  atualizarPedido,
};
