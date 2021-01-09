const router = require('express').Router();
const auth = require('../../auth');
const UsuarioController = require('../../../controllers/UsuarioController');

const usuarioController = new UsuarioController();

router.post('/login', usuarioController.login); // testado
router.post('/registrar', usuarioController.store); // testado
router.put('/', auth.required, usuarioController.update); // testado
router.delete('/', auth.required, usuarioController.remove); // testado

router.get('/recuperar-senha', usuarioController.showRecovery);
router.get('/recuperar-senha', usuarioController.createRecovery);
router.get('/senha-recuperada', usuarioController.showCompleteRecovery);
router.post('/senha-recuperada', usuarioController.completeRecovery);

router.get('/', auth.required, usuarioController.index); // testado
router.get('/:id', auth.required, usuarioController.show); // testado

module.exports = router;
