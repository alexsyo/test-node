'use strict';

var request = require('supertest');
var app = require('../../app');

module.exports = function() {

    describe('crud_template:', function() {

        describe('index:', function() {
        
            it('Return 200', function(done) {
                request(app)
                    .get('/crud_template')
                    .expect(200, done);
            });

            it('Format text/html', function(done) {
                request(app)
                    .get('/crud_template')
                    .expect('Content-type', /text\/html/, done);
            });

            it('Contain "Hello crud" and "name"', function(done) {
                request(app)
                    .get('/crud_template')
                    .expect(/hello crud[\s\S]*name/i, done);
            });

        });

        describe('show:', function() {

            it('return 200', function(done) {
                request(app)
                    .get('/crud_template/init')
                    .expect(200, done);
            });

            it('Format text/html', function(done) {
                request(app)
                    .get('/crud_template/init')
                    .expect('Content-type', /text\/html/, done);
            });

            it('Contain "Hello init"', function(done) {
                request(app)
                    .get('/crud_template/init')
                    .expect(/hello init/i, done);
            });

        });

    });

};
