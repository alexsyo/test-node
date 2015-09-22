'use strict';

var request = require('supertest');
var app = require('../../app');

module.exports = function() {
    
    describe('middleware:', function(){

        describe('index:', function() {

            it('Return 200', function(done) {
                request(app).get('/middleware')
                    .expect(200)
                    .end(done);
            });

            it('Format text/html', function(done) {
                request(app).get('/middleware')
                    .expect('Content-type', /json/)
                    .end(done);
            });

            it('Contain an array', function(done) {
                request(app).get('/middleware')
                    .expect(JSON.stringify(['first', 'second', 'third']))
                    .end(done);
            });

        });

    });

};
