'use strict';

var express = require('express');

module.exports = function(path) {

    var router = express.Router();
    var controller = require('./' + path + '/controller');

    router.route('/')
        .get(controller.index)
        .post(controller.create);

    router.route('/:id')
        .get(controller.show)
        .put(controller.update)
        .patch(controller.update)
        .delete(controller.destroy);

    return router;

};
