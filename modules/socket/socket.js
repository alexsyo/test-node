'use strict';

var stored = [];

module.exports = function(socket) {

    socket.on('set username', function(username) {

        socket.username = username;

        socket.emit('set username', socket.username + ' joined the chat');
        socket.broadcast.emit('set username', socket.username + ' joined the chat');

    });

    socket.on('send message', function(msg) {

        var message = socket.username + ': ' + msg;

        stored.push(message);

        socket.emit('send message', message);
        socket.broadcast.emit('send message', message);

    });

    socket.on('get messages', function(msg) {

        socket.emit('get messages', stored);

    });

};
