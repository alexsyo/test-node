'use strict';

var express = require('express');
var router = express.Router();

module.exports = function(path) {
    
     var controller = require(path + '/controller');

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
