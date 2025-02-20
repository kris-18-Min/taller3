const express = require('express');
const router = express.Router();
const { getUsuarios } = require('../routers/indexUser');

router.get('/usuario', getUsuarios);

module.exports = router;