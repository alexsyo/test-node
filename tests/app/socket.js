'use strict';

var expect = require('chai').expect;
var request = require('supertest');
var app = require('../../app');
var io = require('socket.io-client');

var socketURL = 'http://localhost:3000';
var options = {
    transports: ['websocket'],
    'force new connection': true
};

module.exports = function() {

    describe('socket:', function(){

        describe('index:', function() {

            it('Return 200', function(done) {
                request(app)
                    .get('/socket')
                    .expect(200, done);
            });

            it('Format text/html', function(done) {
                request(app)
                    .get('/socket')
                    .expect('Content-type', /text\/html/, done);
            });

            it('Contains "Hello socket"', function(done) {
                request(app)
                    .get('/socket')
                    .expect(/hello socket/i, done);
            });

        });

        describe('socket:', function() {

            it('Connects to the server', function(done) {

                var client = io.connect(socketURL, options);

                client.on('client connected', function(msg) {

                    expect(msg).to.equal('client connected');

                    client.disconnect();

                    done();

                });

            });

            it('Set the username', function(done) {

                var client = io.connect(socketURL, options);

                client.emit('set username', 'Mario');

                client.on('set username', function(username) {

                    expect(username).to.equal('Mario joined the chat');

                    client.disconnect();

                    done();

                });

            });

            it('Broadcast the username', function(done) {

                var client_1 = io.connect(socketURL, options);
                var client_2 = io.connect(socketURL, options);

                client_1.emit('set username', 'Mario');

                client_2.on('set username', function(username) {

                    expect(username).to.equal('Mario joined the chat');

                    client_1.disconnect();
                    client_2.disconnect();

                    done();

                });


            });

        });

    });

};
