const mongoose = require('mongoose');
const Loja = mongoose.model('Loja');

class LojaController {
  // Get /
  index(req, res, next) {
    Loja.find({  })
      .select('_id nome cnpj email telefones endereco')
      .then((lojas) => res.send({ lojas }))
      .catch(next);
  }

  // Get /:id
  show(req, res, next) {
    Loja.findById(req.params.id)
      .select('_id nome cnpj email telefones endereco')
      .then((loja) => res.send({ loja }))
      .catch(next);
  }

  // Post /
  store(req, res, next) {
    const { nome, cnpj, email, telefones, endereco } = req.body;
    const loja = new Loja({ nome, cnpj, email, telefones, endereco });
    loja
      .save()
      .then(() => res.send({ loja }))
      .catch(next);
  }

  // Put /:id
  update(req, res, next) {
    const { nome, cnpj, email, telefones, endereco } = req.body;

    Loja.findById(req.query.loja)
      .then((loja) => {
        if (!loja) return res.status(422).send({ error: 'Loja não existe.' });

        if (nome) loja.nome = nome;
        if (cnpj) loja.cnpj = cnpj;
        if (email) loja.email = email;
        if (telefones) loja.telefones = telefones;
        if (endereco) loja.endereco = endereco;

        loja
          .save()
          .then(() => res.send({ loja }))
          .catch(next);
      })
      .catch(next);
  }

  // Delete /:id
  remove(req, res, next) {
    Loja.findById(req.query.loja)
      .then((loja) => {
        if (!loja) return res.status(422).send({ error: 'Loja não existe.' });
        loja
          .remove()
          .then(() => res.send({ deleted: true }))
          .catch(next);
      })
      .catch(next);
  }
}

module.exports = LojaController;
