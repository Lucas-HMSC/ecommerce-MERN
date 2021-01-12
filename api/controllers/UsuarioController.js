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
    const { nome, email, password, loja } = req.body;

    if (!nome || !email || !password || !loja)
      return res
        .status(422)
        .json({ errors: 'Preencha todos os campos de cadastro.' });

    const usuario = new Usuario({ nome, email, loja });
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

  // Recovery

  // Get /recuperar-senha
  showRecovery(req, res, next) {
    return res.render('recovery', { error: null, success: null });
  }

  // Post /recuperar-senha
  createRecovery(req, res, next) {
      const { email } = req.body;
      if (!email) return res.render('recovery', { error: 'Preencha com o seu email', success: null });

      Usuario.findOne({ email }).then((usuario) => {
          if (!usuario) return res.render('recovery', { error: 'Não existe usuário com este email', success: null });
          const recoveryData = usuario.criarTokenRecuperacaoSenha();
          return usuario.save().then(() => {
              enviarEmailRecovery({ usuario, recovery: recoveryData }, (error = null, success = null) => {
                  return res.render('recovery', { error, success });
                });
            }).catch(next);
        }).catch(next);
    }

  // Get /senha-recuperada
  showCompleteRecovery(req, res, next) {
    if (!req.query.token)
      return res.render('recovery', {
        error: 'Token não identificado',
        success: null,
      });
    Usuario.findOne({
      'recovery.token': req.query.token,
    })
      .then((usuario) => {
        if (!usuario)
          return res.render('recovery', {
            error: 'Não existe usuário com este token',
            success: null,
          });
        if (new Date(usuario.recovery.date) < new Date())
          return res.render('recovery', {
            error: 'Token expirado. Tente novamente.',
            success: null,
          });
        return res.render('recovery/store', {
          error: null,
          success: null,
          token: req.query.token,
        });
      })
      .catch(next);
  }

  // Post /senha-recuperada
  completeRecovery(req, res, next) {
    const { token, password } = req.body;
    if (!token || !password)
      return res.render('recovery/store', {
        error: 'Preencha novamente com sua nova senha',
        success: null,
        token: token,
      });
    Usuario.findOne({ 'recovery.token': token }).then((usuario) => {
      if (!usuario)
        return res.render('recovery', {
          error: 'Usuário não identificado',
          success: null,
        });

      usuario.finalizarTokenRecuperacaoSenha();
      usuario.setSenha(password);
      return usuario
        .save()
        .then(() => {
          return res.render('recovery/store', {
            error: null,
            success: 'Senha alterada com sucesso. Tente novamente fazer login.',
            token: null,
          });
        })
        .catch(next);
    });
  }
}

module.exports = UsuarioController;
