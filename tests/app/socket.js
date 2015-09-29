'use strict';

var request = require('supertest');
var app = require('../../app');

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

            it('Contain "Hello socket"', function(done) {
                request(app)
                    .get('/socket')
                    .expect(/hello socket/i, done);
            });

        });

    });

};
