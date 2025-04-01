const express = require('express');
const { getAll, add } = require('../controllers/flats');
const router = express.Router();

// /api/flats
router.get('/', getAll);
router.post('/add', add )

module.exports = router;
