'use strict';

var request = require('supertest');
var app = require('../../app');

module.exports = function() {

    describe('login:', function() {

        describe('index:', function() {

            it('Return 200', function(done) {
                request(app)
                    .get('/login')
                    .expect(200, done);
            });

            it('Format text/html', function(done) {
                request(app)
                    .get('/login')
                    .expect('Content-type', /text\/html/, done);
            });

            it('Contanin username and password', function(done) {
                request(app)
                    .get('/login')
                    .expect(/hello login/i)
                    .expect(/username/i)
                    .expect(/password/i, done);
            });

        });

    });
 
};
