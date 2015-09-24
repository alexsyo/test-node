'use strict';

var request = require('supertest');
var app = require('../../app');

module.exports = function() {

    describe('template:', function() {
    
        describe('index:', function() {
       
            it('Return 200', function(done) {
                request(app).get('/template')
                    .expect(200)
                    .end(done);
            });

            it('Format text/html', function(done) {
                request(app).get('/template')
                    .expect('Content-type', /text\/html/)
                    .end(done);
            });

            it('Contain "Hello template"', function(done) {
                request(app).get('/template')
                    .expect(/Hello template/)
                    .end(done);
            });

            it('Render variables', function(done) {
                request(app).get('/template')
                    .expect(/Hello variable/)
                    .end(done);
            });
        });

        describe('show:', function() {
        
            it('Return 200', function(done) {
                request(app).get('/template/params')
                    .expect(200)
                    .end(done);
            });

            it('Format text/html', function(done) {
                request(app).get('/template/params')
                    .expect('Content-type', /text\/html/)
                    .end(done);
            });

            it('Contian "Hello params"', function(done) {
                request(app).get('/template/params')
                    .expect(/Hello params/)
                    .end(done);
            });
        });

    });

};
