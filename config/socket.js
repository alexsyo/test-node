'use strict';

module.exports = function(server) {

    // Inizialize a socket that listen to server's requests
    var io = require('socket.io')(server);

    // Listen for client's socket connection
    io.on('connection', function(socket) {

        socket.emit('client connected', 'client connected');

        require('../modules/crud/socket')(socket);
        require('../modules/socket/socket')(socket);

    });

};
