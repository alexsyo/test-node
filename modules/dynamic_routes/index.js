'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./controller');
var model = require('./model');

router.param('id', model.uppercase);

router.get('/query', controller.query);
router.get('/params/:id', controller.params);

module.exports = router;
