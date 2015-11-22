'use strict';

let express = require('express');
let router = express.Router();
let Controller = require('./controller');
let model = require('./model');

let controller = new Controller();

router.use(model.one);
router.use(model.two);
router.use(model.three);

router.get('/', controller.index);

module.exports = router;