'use strict';

var request = require('supertest');
var app = require('../../app');

module.exports = function() {
    
    describe('crud:', function(){

        describe('index:', function() {
        
            it('Return 200', function(done) {
                request(app)
                    .get('/crud')
                    .expect(200, done);
            });

            it('Format text/html', function(done) {
                request(app)
                    .get('/crud')
                    .expect('Content-type', /text\/html/, done);
            });

            it('Contain "Hello crud" and "name"', function(done) {
                request(app)
                    .get('/crud')
                    .expect(/hello crud[\s\S]*name/i, done);
            });

        });

        describe('create:', function() {
        
            it('Return 201', function(done) {
                request(app)
                    .post('/crud')
                    .send('name=slave&attack=1&defense=1&range=1&life=1')
                    .expect(201, done);
            });

            it('Format json', function(done) {
                request(app)
                    .post('/crud')
                    .send('name=slave&attack=1&defense=1&range=1&life=1')
                    .expect('Content-type', /json/, done);
            });

            it('Return unit', function(done) {
                request(app)
                    .post('/crud')
                    .send('name=slave&attack=1&defense=1&range=1&life=1')
                    .expect(JSON.stringify({
                        name: 'slave',
                        attack: '1',
                        defense: '1',
                        range: '1',
                        life: '1'
                    }), done);
            });

        });

    });

}; 
