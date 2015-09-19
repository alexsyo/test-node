'use strict';

var request = require('supertest');
var app = require('../../app');

module.exports = function() {
    
    describe('api:', function(){
        
        describe('pipe:', function() {
        
            it('Return 200', function(done) {
                request(app).get('/api/pipe')
                    .expect(200)
                    .end(done);
            });

            it('Format text/html', function(done) {
                request(app).get('/api/pipe')
                    .expect('Content-type', /text\/html/)
                    .end(done);
            });

            it('Contain "github"', function(done) {
                request(app).get('/api/pipe')
                    .expect(/github/i)
                    .end(done);
            });

        });
        
        describe('send', function() {
        
        });

        describe('json', function() {
        
        });
        
        describe('error', function() {
        
        });
        
        describe('redirect', function() {
        
        });
    
    });

};
