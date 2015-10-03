'use strict';

//var http = require('http');
//var server = http.createServer();

module.exports = function(server) {

    console.log('Do stuff...');

    server.emit('log', 'emit');

};
