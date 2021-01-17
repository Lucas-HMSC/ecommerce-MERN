const router = require('express').Router();

router.use('/usuarios', require('./usuarios'));
router.use('/clientes', required('./clientes'));
router.use('/lojas', require('./lojas'));

router.use('/categorias', require('./categorias'));
router.use('/produtos', required('./produtos'));

module.exports = router;
