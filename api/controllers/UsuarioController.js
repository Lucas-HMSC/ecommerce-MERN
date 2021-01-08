const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');
const enviarEmailRecovery = require('../helpers/email-recovery');

class UsuarioController {
  // Get /
  index(req, res, next) {
    Usuario.findById(req.payload.id)
      .then((usuario) => {
        if (!usuario)
          return res.status(401).json({ errors: 'Usuário não registrado' });
        return res.json({ usuario: usuario.enviarAuthJSON() });
      })
      .catch(next);
  }

  // Get /:id
  show(req, res, next) {
    Usuario.findById(req.params.id)
      .populate({ path: 'loja' })
      .then((usuario) => {
        if (!usuario)
          return res.status(401).json({ errors: 'Usuário não registrado' });
        return res.json({
          usuario: {
            nome: usuario.nome,
            emai: usuario.email,
            permissao: usuario.permissao,
            loja: usuario.loja,
          },
        });
      })
      .catch(next);
  }

  // Post /registrar
  store(req, res, next) {
    const { nome, email, password } = req.body;

    const usuario = new Usuario({ nome, email });
    usuario.setSenha(password);

    usuario
      .save()
      .then(() => res.json({ usuario: usuario.enviarAuthJSON() }))
      .catch(next);
  }
}
