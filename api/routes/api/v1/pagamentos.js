const router = require('express').Router();

const PagamentoController = require('../../../controllers/PagamentoController');

const {
  LojaValidation,
} = require('../../../controllers/validacoes/lojaValidation');
const auth = require('../../auth');

const pagamentoController = new PagamentoController();

// Teste
if (process.env.NODE_ENV !== 'production') {
  router.get('/tokens', (req, res) => res.render('pagseguro/index'));
}

// Pagseguro
router.post('/notificacao', pagamentoController.verNotificacao);
router.get('/session', pagamentoController.getSessionId);

// Cliente
router.get('/:id', auth.required, pagamentoController.show);
router.post('pagar/:id', auth.required, pagamentoController.pagar);

// Admin
router.put(
  '/:id',
  auth.required,
  LojaValidation.admin,
  pagamentoController.update,
);

module.exports = router;
