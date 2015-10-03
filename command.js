'use strict';

// Initialize server
var http = require('http');
var server = http.createServer();

// Get arguments
var arg = process.argv[2];

// Event listeners
require('./config/listeners')(server);

// Commands
switch(arg) {
    case 'emit': require('./commands/emit')(server); break;
    case 'read': require('./commands/read')(server); break;
    default: console.log('Command not found'); break;
}



// Emit on request
server.on('request', function(req, res) {
    console.log('request arrived');
});

// Emit on close
server.on('close', function(req, res) {
    console.log('closing...');
});
