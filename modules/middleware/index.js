'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./controller');
var model = require('./model');

router.use(model.one);
router.use(model.two);
router.use(model.three);

router.get('/', controller.index);

module.exports = router;
