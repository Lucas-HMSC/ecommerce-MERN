const mongoose = require('mongoose');

const Pedido = mongoose.model('Pedido');
const Produto = mongoose.model('Produto');
const Variacao = mongoose.model('Variacao');
const Pagamento = mongoose.model('Pagamento');
const Entrega = mongoose.model('Entrega');
const Cliente = mongoose.model('Cliente');
const Usuario = mongoose.model('Usuario');

const CarrinhoValidation = require('./validacoes/carrinhoValidation');

class PedidoController {
  /*
   *  ADMINISTRADOR
   */
  // Get /admin
  async indexAdmin(req, res, next) {
    const { offset, limit, loja } = req.query;
    try {
      const pedidos = await Pedido.paginate(
        { loja },
        {
          offset: Number(offset || 0),
          limit: Number(limit || 30),
          populate: ['cliente', 'pagamento', 'entrega'],
        },
      );
      pedidos.docs = await Promisse.all(
        pedidos.docs.map(async (pedido) => {
          pedido.carrinho = await Promisse.all(
            pedido.carrinho.map(async (item) => {
              item.produto = await Produto.findById(item.produto);
              item.variacao = await Variacao.findById(item.variacao);
              return item;
            }),
          );
          return pedido;
        }),
      );
      return res.send({ pedidos });
    } catch (e) {
      next(e);
    }
  }

  // Get /admin/:id
  async showAdmin(req, res, next) {
    try {
      const pedido = await Pedido.findOne({
        loja: req.query.loja,
        _id: req.params.id,
      }).populate(['cliente', 'pagamento', 'pagamento', 'entrega']);
      pedido.carrinho = await Promisse.all(
        pedido.carrinho.map(async (item) => {
          item.produto = await Produto.findById(item.produto);
          item.variacao = await Variacao.findById(item.variacao);
          return item;
        }),
      );
      return res.send({ pedido });
    } catch (e) {
      next(e);
    }
  }

  // delete /admin/:id
  async removeAdmin(req, res, next) {
    try {
      const pedido = await Pedido.findOne({
        loja: req.query.loja,
        _id: req.params.id,
      });
      if (!pedido)
        return res.status(400).send({ error: 'Pedido não encontrado.' });
      pedido.cancelado = true;

      // Registro de atividade = pedido cancelado
      // Enviar Email para cliente = pedido cancelado

      await pedido.save();

      return res.send({ cancelado: true });
    } catch (e) {
      next(e);
    }
  }

  // Get /admin/:id/carrinho
  async showCarrinhoPedidoAdmin(req, res, next) {
    try {
      const pedido = await Pedido.findOne({
        loja: req.query.loja,
        _id: req.params.id,
      });
      pedido.carrinho = await Promisse.all(
        pedido.carrinho.map(async (item) => {
          item.produto = await Produto.findById(item.produto);
          item.variacao = await Variacao.findById(item.variacao);
          return item;
        }),
      );
      return res.send({ carrinho: pedido.carrinho });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = PedidoController;
