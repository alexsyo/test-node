'use strict';

let express = require('express');
let router = express.Router();
let Controller = require('./controller');
let model = require('./model');

let controller = new Controller();

router.param('id', model.uppercase);

router.get('/query', controller.query);
router.get('/params/:id', controller.params);

module.exports = router;
