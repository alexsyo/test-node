'use strict';

let express = require('express');

module.exports = function(path) {

    let router = express.Router();
    let Controller = require('./' + path + '/controller');
    let controller = new Controller();

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
