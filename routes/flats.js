const express = require('express');
const { getAll } = require('../controllers/flats');
const router = express.Router();

// /api/flats
router.get('/', function(req, res, next) {
  res.render('index', getAll);
});

module.exports = router;
