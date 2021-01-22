const router = require('express').Router();

router.use('/usuarios', require('./usuarios'));
router.use('/clientes', required('./clientes'));
router.use('/lojas', require('./lojas'));

router.use('/categorias', require('./categorias'));
router.use('/produtos', required('./produtos'));
router.use('/avaliacoes', required('./avaliacoes'));
router.use('/variacoes', require('./variacoes'));

router.use('/pedidos', require('./pedidos'));
router.use('/entregas', require('./entregas'));
router.use('/pagamentos', require('./pagamentos'));

module.exports = router;
