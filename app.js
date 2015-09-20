'use strict';

// Initialize server with express
var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
io.on('connection', function(){ /* … */ });

// Environment
var env = require('./config/environment');

// Modules
require('./routes')(app);

// Listen for connections
server.listen(env.port, function() { // app or server
    console.log('listening on port ' + env.port);
});

// Expose server
module.exports = server;
