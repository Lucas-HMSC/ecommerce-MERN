const router = require('express').Router();
const lojaValidation = require('../../../controllers/validacoes/lojaValidacao');
const auth = require('../../auth');
const LojaController = require('../../../controllers/LojaController');

const lojaController = new LojaController();

router.get('/', lojaController.index); // testado
router.get('/:id', lojaController.show); // testado

router.post('/', auth.required, lojaController.store); // testado
router.put('/:id', auth.required, lojaValidation, lojaController.update); // testado
router.delete('/:id', auth.required, lojaValidation, lojaController.remove); // testado

module.exports = router;
