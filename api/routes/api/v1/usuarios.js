const router = require('express').Router();
const auth = require('../../auth');
const UsuarioController = require('../../../controllers/UsuarioController');

const Validation = require('express-validation');
const {
  UsuarioValidation,
} = require('../../../controllers/validacoes/usuarioValidation');

const usuarioController = new UsuarioController();

router.post('/login', Validation(UsuarioValidation.login), usuarioController.login); // testado
router.post('/registrar', usuarioController.store); // testado
router.put('/', auth.required, usuarioController.update); // testado
router.delete('/', auth.required, usuarioController.remove); // testado

router.get('/recuperar-senha', usuarioController.showRecovery); // testado
router.get('/recuperar-senha', usuarioController.createRecovery); // testado
router.get('/senha-recuperada', usuarioController.showCompleteRecovery); // testado
router.post('/senha-recuperada', usuarioController.completeRecovery); // testado

router.get('/', auth.required, usuarioController.index); // testado
router.get('/:id', auth.required, usuarioController.show); // testado

module.exports = router;
