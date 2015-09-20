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
        
        describe('send:', function() {
        
            it('Return 200', function(done) {
                request(app).get('/api/send')
                    .expect(200)
                    .end(done);
            });

            it('Format text/html', function(done) {
                request(app).get('/api/send')
                    .expect('Content-type', /text\/html/)
                    .end(done);
            });

            it('Contain "Hello string"', function(done) {
                request(app).get('/api/send')
                    .expect('Hello string')
                    .end(done);
            });
        });

        describe('json', function() {
       
            it('Return 200', function(done) {
                request(app).get('/api/json')
                    .expect(200)
                    .end(done);
            });

            it('Format json', function(done) {
                request(app).get('/api/json')
                    .expect('Content-type', /json/)
                    .end(done);
            });
            
            it('Contain a JSON', function(done) {
                request(app).get('/api/json')
                    .expect(JSON.stringify(['Hello', 'json']))
                    .end(done);
            });

        });
        
        describe('error', function() {
       
            it('Return 500', function(done) {
                request(app).get('/api/error')
                    .expect(500)
                    .end(done);
            });
            
            it('Format json', function(done) {
                request(app).get('/api/error')
                    .expect('Content-type', /json/)
                    .end(done);
            });

            it('Contain "Hello error"', function(done) {
                request(app).get('/api/error')
                    .expect(JSON.stringify('Hello error'))
                    .end(done);
            });

        });
        
        describe('redirect', function() {
        
            it('Return 301', function(done) {
                request(app).get('/api/redirect')
                    .expect(301)
                    .end(done);
            });
            
            it('Format text/plain', function(done) {
                request(app).get('/api/redirect')
                    .expect('Content-type', /text\/plain/)
                    .end(done);
            });

            it('Contain "Moved permanently"', function(done) {
                request(app).get('/api/redirect')
                    .expect(/moved permanently/i)
                    .end(done);
            });
        
        });
    
    });

};
