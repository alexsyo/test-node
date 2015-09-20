'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./controller');

router.get('/pipe', controller.pipe);
router.get('/send', controller.send);
router.get('/json', controller.json);
router.get('/error', controller.error);
router.get('/redirect', controller.redirect);

module.exports = router;
