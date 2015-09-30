'use strict';

module.exports = function(socket) {

    socket.on('set username', function(username) {

        socket.username = username;

        socket.emit('set username', socket.username + ' joined the chat');
        socket.broadcast.emit('set username', socket.username + ' joined the chat');

    });

};
