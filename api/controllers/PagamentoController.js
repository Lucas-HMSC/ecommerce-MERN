const mongoose = require('mongoose');
const {
  criarPagamento,
  getSessionId,
  getTransactionStatus,
  getNotification,
} = require('./integracoes/pagseguro');

const Pagamento = mongoose.model('Pagamento');

const Pedido = mongoose.model('Pedido');
const Produto = mongoose.model('Produto');
const Variacao = mongoose.model('Variacao');
const RegistroPedido = mongoose.model('RegistroPedido');

const EmailController = require('./EmailController');

class PagamentoController {
  /*
   * Clientes
   */

  // get /:id
  async show(req, res, next) {
    try {
      const pagamento = await Pagamento.findOne({
        _id: req.params.id,
        loja: req.query.loja,
      });
      if (!pagamento)
        return res.status(400).send({ error: 'Pagamento não existe.' });

      const registros = await RegistroPedido.find({
        pedido: pagamento.pedido,
        tipo: 'pagamento',
      });

      const situacao = pagamento.pagSeguroCode
        ? await getTransactionStatus(pagamento.pagSeguroCode)
        : null;

      if (
        situacao &&
        (registros.length === 0 ||
          !registro[registros.length - 1].payload ||
          !registro[registros.length - 1].payload.code ||
          registro[registros.length - 1].payload.code !== situacao.code)
      ) {
        const registroPedido = new RegistroPedido({
          pedido: pagamento.pedido,
          tipo: 'pagamento',
          situacao: situacao.status || 'Situacao',
          payload: situacao,
        });
        pagamento.status = situacao.status;
        await pagamento.save();
        await registroPedido.save();
        registros.push(registroPedido);
      }
      return res.send({ pagamento, registros, situacao });
    } catch (e) {
      next(e);
    }
  }

  // Post /pagar/:id
  async pagar(req, res, next) {
    const { senderHash } = req.body;
    try {
      const pagamento = await Pagamento.findOne({
        _id: req.params.id,
        loja: req.query.loja,
      });
      if (!pagamento)
        return res.status(400).send({ error: 'Pagamento não existe.' });
      const pedido = await (await Pedido.findById(pagamento.pedido)).populated([
        { path: 'cliente', populate: 'usuario' },
        { path: 'entrega' },
        { path: 'pagamento' },
      ]);
      pedido.carrinho = await Promise.all(
        pedido.carrinho.map(async (item) => {
          item.produto = await Produto.findById(item.produto);
          item.variacao = await Variacao.findById(item.variacao);

          return item;
        }),
      );

      const payload = await criarPagamento(senderHash, pedido);
      pagamento.payload = pagamento.payload
        ? pagamento.payload.concat([payload])
        : [payload];
      if (payload.code) pagamento.pagSeguroCode = payload.code;

      await pagamento.save();

      return res.send({ pagamento, payload });
    } catch (e) {
      next(e);
    }
  }

  /*
   * Admin
   */

  // Put /:id
  async update(req, res, next) {
    const { status } = req.body;
    const { loja } = req.query;
    try {
      const pagamento = await Pagamento.findOne({ _id: req.params.id, loja });
      if (!pagamento)
        return res.status(400).send({ error: 'Pagamento não existe' });

      if (status) pagamento.status = status;

      const registroPedido = new RegistroPedido({
        pedido: pagamento.pedido,
        tipo: 'pagamento',
        situacao: status,
      });
      await registroPedido.save();

      // Enviar email de aviso para o cliente - aviso de atualização de pagamento
      const pedido = await (await Pedido.findById(pagamento.pedido)).populate({
        path: 'cliente',
        populate: { path: 'usuario' },
      });
      EmailController.atualizarPedido({
        usuario: pedido.cliente.usuario,
        pedido,
        tipo: 'pagamento',
        status,
        data: new Date(),
      });

      await pagamento.save();

      const pedido = await Pedido.findById(pagamento.pedido);
      if (status.toLowerCase().includes('pago'))
        await QuantidadeValidation.atualizarQuantidade(
          'confirmar_pedido',
          pedido,
        );
      else if (status.toLowerCase().includes('cancelado'))
        await QuantidadeValidation.atualizarQuantidade(
          'cancelar_pedido',
          pedido,
        );

      return res.send({ pagamento });
    } catch (e) {
      next(e);
    }
  }

  /*
   * Pagseguro
   */

  // Get /session
  async getSessionId(req, res, next) {
    try {
      const sessionId = await getSessionId();
      return res.send({ sessionId });
    } catch (e) {
      next(e);
    }
  }

  // Post /notificacao
  async verNotificacao(req, res, next) {
    try {
      const { notificationCode, notificationType } = req.body;
      if (notificationType !== 'transaction')
        return res.send({ success: true });

      const result = await getNotification(notificationCode);

      const pagamento = await Pagamento.findOne({ pagSeguroCode: result.code });
      if (!pagamento)
        return res.status(400).send({ error: 'Pagamento não existe' });

      const registros = await RegistroPedido.find({
        pedido: pagamento.pedido,
        tipo: 'pagamento',
      });

      const situacao = pagamento.pagSeguroCode
        ? await getTransactionStatus(pagamento.pagSeguroCode)
        : null;

      if (
        situacao &&
        (registros.length === 0 ||
          registros[registros.length - 1].payload.code !== situacao.code)
      ) {
        const registroPedido = new RegistroPedido({
          pedido: pagamento.pedido,
          tipo: 'pagamento',
          situacao: situacao.status || 'Situacao',
          payload: situacao,
        });
        pagamento.status = situacao.status;
        await pagamento.save();

        const pedido = await Pedido.findById(pagamento.pedido);
        if (status.toLowerCase().includes('pago'))
          await QuantidadeValidation.atualizarQuantidade(
            'confirmar_pedido',
            pedido,
          );
        else if (status.toLowerCase().includes('cancelado'))
          await QuantidadeValidation.atualizarQuantidade(
            'cancelar_pedido',
            pedido,
          );

        await registroPedido.save();

        // Enviar email de aviso para o cliente - aviso de atualização de pagamento
        const pedido = await (await Pedido.findById(pagamento.pedido)).populate(
          {
            path: 'cliente',
            populate: { path: 'usuario' },
          },
        );
        EmailController.atualizarPedido({
          usuario: pedido.cliente.usuario,
          pedido,
          tipo: 'pagamento',
          status: situacao.status,
          data: new Date(),
        });
      }
      return res.send({ success: true });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = PagamentoController;
