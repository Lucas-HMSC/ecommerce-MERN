const router = require('express').Router();

const AvaliacaoController = require('../../../controllers/AvaliacaoController');

const {
  LojaValidation,
} = require('../../../controllers/validacoes/lojaValidation');
const auth = require('../../auth');

const avaliacaoController = new AvaliacaoController();

// CLIENTES / VISITANTES
router.get('/', avaliacaoController.index);
router.get('/:id', avaliacaoController.show);
router.post('/', auth.required, avaliacaoController.store);

// ADMIN
router.delete(
  '/:id',
  auth.required,
  LojaValidation.admin,
  avaliacaoController.remove,
);

module.exports = router;
