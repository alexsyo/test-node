'use strict';

var request = require('supertest');
var app = require('../../app');

module.exports = function() {
    
    describe('dynamic_routes:', function() {

        describe('query:', function() {
        
            it('Return 200', function(done) {
                request(app)
                    .get('/dynamic_routes/query?id=test')
                    .expect(200)
                    .end(done);
            });

            it('Format text/html', function(done) {
                request(app)
                    .get('/dynamic_routes/query?id=test')
                    .expect('Content-type', /text\/html/)
                    .end(done);
            });

            it('Contains the passed query', function(done) {
                request(app)
                    .get('/dynamic_routes/query?id=test')
                    .expect('Hello test')
                    .end(done);
            });

        });

        describe('params:', function() {
        
            it('Return 200', function(done) {
                request(app)
                    .get('/dynamic_routes/params/test')
                    .expect(200)
                    .end(done);
            });

            it('Format text/html', function(done) {
                request(app)
                    .get('/dynamic_routes/params/test')
                    .expect('Content-type', /text\/html/)
                    .end(done);
            });

            it('Contains the passed params', function(done) {
                request(app)
                    .get('/dynamic_routes/params/test')
                    .expect('Hello original test<br>Hello modified TEST')
                    .end(done);
            });

        });

    });

};
