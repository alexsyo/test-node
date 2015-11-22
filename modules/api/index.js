'use strict';

let express = require('express');
let router = express.Router();
let Controller = require('./controller');
let controller = new Controller();

router.get('/pipe', controller.pipe);
router.get('/send', controller.send);
router.get('/json', controller.json);
router.get('/error', controller.error);
router.get('/redirect', controller.redirect);

module.exports = router;