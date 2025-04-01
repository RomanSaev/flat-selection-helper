const express = require('express');
const { getAll, add, edit } = require('../controllers/flats');
const router = express.Router();

// /api/flats
router.get('/', getAll);
router.post('/add', add )
router.put('/edit/:id', edit )

module.exports = router;
