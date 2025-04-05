const express = require('express');
const { getAll, add, edit, remove, add_advantage } = require('../controllers/flats');
const router = express.Router();

// /api/flats
router.get('/', getAll);
router.post('/add', add )
router.put('/edit/:id', edit )
router.post('/remove/:id', remove )
router.post('/add_advantage', addAdvantage)

module.exports = router;
