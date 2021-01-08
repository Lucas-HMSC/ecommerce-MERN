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

  // Put /
  update(req, res, next) {
    const { nome, email, password } = req.body;
    Usuario.findById(req.payload.id)
      .then((usuario) => {
        if (!usuario)
          return res.status(401).json({ errors: 'Usuário não registrado' });
        if (typeof nome !== 'undefined') usuario.nome = nome;
        if (typeof email !== 'undefined') usuario.email = email;
        if (typeof password !== 'undefined') usuario.setSenha(password);

        return usuario
          .save()
          .then(() => {
            return res.json({ usuario: usuario.enviarAuthJSON() });
          })
          .catch(next);
      })
      .catch(next);
  }

  // Delete /
  remove(req, res, next) {
    Usuario.findById(req.payload.id)
      .then((usuario) => {
        if (!usuario)
          return res.status(401).json({ errors: 'Usuário não registrado' });
        return usuario
          .remove()
          .then(() => {
            return res.json({ deletado: true });
          })
          .catch(next);
      })
      .catch(next);
  }

  // Post /login
  login(req, res, next) {
    const { email, password } = req.body;
    if (!email)
      return res
        .status(422)
        .json({ errors: { email: 'não pode ficar vazio' } });
    if (!password)
      return res
        .status(422)
        .json({ errors: { password: 'não pode ficar vazio' } });
    Usuario.findOne({ email })
      .then((usuario) => {
        if (!usuario)
          return res.status(401).json({ errors: 'Usuário não registrado' });
        if (!usuario.validarSenha(password))
          return res.status(401).json({ errors: 'Senha Inválida' });
        return res.json({ usuario: usuario.enviarAuthJSON() });
      })
      .catch(next);
  }
}
