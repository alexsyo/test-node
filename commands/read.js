'use strict';

var fs = require('fs');

module.exports = function(server) {

    fs.readFile('./storage/log.txt', 'utf-8', function(err, data) {
    
        if(err) throw err;

        console.log(data);

    });

    server.emit('log', 'read');

};
