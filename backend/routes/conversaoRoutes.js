const express = require('express');
const router = express.Router();
const conversaoController = require('../controllers/conversaoController');

router.get('/moedas', conversaoController.converterMoeda);
router.get('/temp', conversaoController.converterTemperatura);
router.get('/dist', conversaoController.converterDistancia);
router.get('/peso', conversaoController.converterPeso);

module.exports = router;
