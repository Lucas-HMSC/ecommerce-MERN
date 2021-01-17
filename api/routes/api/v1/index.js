const router = require('express').Router();

router.use('/usuarios', require('./usuarios'));
router.use('/clientes', required('./clientes'));
router.use('/lojas', require('./lojas'));

router.use('/categorias', require('./categorias'));

module.exports = router;
