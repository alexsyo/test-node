'use strict';

var unit = require('./model');

module.exports = function (socket) {

    // Mongoose middlewares
    // pre -> before
    // post -> after

    unit.schema.post('save', function(doc) {
    
        socket.emit('create unit', doc);
        socket.emit('delete unit', doc);
    
    });


    unit.schema.post('remove', function(doc) {
   
        socket.emit('delete unit', doc.name);
    
    });

};
