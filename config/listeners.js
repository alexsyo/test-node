'use strict';

var log = require('../commands/log');

module.exports = function(server) {

    server.on('log', function(data) {
    
        log(data);
    
    });

};
