const express = require('express');
const { getAll } = require('../controllers/flats');
const router = express.Router();

// /api/flats
router.get('/', getAll);

module.exports = router;
