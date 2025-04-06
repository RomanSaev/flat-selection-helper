const express = require('express');
const { getAll, add, edit, remove, addAdvantage, removeAdvantage, get } = require('../controllers/flats');
const router = express.Router();

// /api/flats
router.get('/', getAll);
router.get('/:id', get);
router.post('/add', add )
router.put('/edit/:id', edit )
router.post('/remove/:id', remove )
router.post('/add_advantage', addAdvantage)
router.post('/remove_advantage', removeAdvantage)

module.exports = router;
