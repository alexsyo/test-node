'use strict';

// Initialize server with express
var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
io.on('connection', function(){ /* … */ });

// Environment
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var env = require('./config/environment');

// Addons
require('./config/mongoose')();
require('./config/socket')(server);

// Modules
require('./config/middlewares')(app);
require('./routes')(app);

// Listen for connections
server.listen(env.port, function() { // app or server
    console.log('listening on port ' + env.port);
});

// Expose server
module.exports = server;
