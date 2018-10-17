var express = require('express');
var router = express.Router();
var users = require('../controller/users')

router.use(users)

module.exports = router;
