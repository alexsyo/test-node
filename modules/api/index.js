'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./controller');

router.get('/pipe', controller.pipe);

module.exports = router;
