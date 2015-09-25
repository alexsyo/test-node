'use strict';

var request = require('supertest');
var app = require('../../app');

module.exports = function() {
    
    describe('crud:', function(){

        describe('index:', function() {
        
            it('Return 200', function(done) {
                request(app).get('/crud')
                    .expect(200)
                    .end(done);
            });

            it('Format text/html', function(done) {
                request(app).get('/crud')
                    .expect('Content-type', /text\/html/)
                    .end(done);
            });

            it('Contain "Hello crud"', function(done) {
                request(app).get('/crud')
                    .expect(/Hello crud/i)
                    .end(done);
            });

        });

    });

}; 
