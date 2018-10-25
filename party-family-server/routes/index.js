var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/Admin/adminUser', require('../controller/adminUser'))

module.exports = router;
