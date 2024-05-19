var express = require('express');
var router = express.Router();
var controlller = require('../controllers/travel');

/* GET travel page */
router.get('/', controlller.travel);

module.exports = router;