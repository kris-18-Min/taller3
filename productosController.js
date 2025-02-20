const express = require('express');
const router = express.Router();
const { getAllProductos } = require('../controllers/indexProductos');

router.get('/allproductos', getAllProductos);

module.exports = router;