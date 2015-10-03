'use strict';

var expect = require('chai').expect;
var request = require('supertest');
var app = require('../../app');
var mongoose = require('mongoose');
var units = require('../../modules/crud/model');
var io = require('socket.io-client');

var socketURL = 'http://localhost:3000';
var options = {
    transports: ['websocket'],
    'force new connection': true
};

var client = io.connect(socketURL, options);

module.exports = function() {

    describe('crud:', function(){

        before(function(done) {

            mongoose.connection.db.dropDatabase();

            var unit = new units({
                name: 'init',
                attack: 1,
                defense: 1,
                range: 1,
                life: 1
            });

            unit.save();

            done();

        });


        after(function(done) {

            client.disconnect();

            mongoose.connection.db.dropDatabase();
            mongoose.disconnect();
        
            done();
        
        });

        describe('index:', function() {
        
            it('Return 200', function(done) {
                request(app)
                    .get('/crud')
                    .expect(200, done);
            });

            it('Format json', function(done) {
                request(app)
                    .get('/crud')
                    .expect('Content-type', /json/, done);
            });

            it('Contain initial unit', function(done) {
                request(app)
                    .get('/crud')
                    .end(function(err, res) {
                        if(err) throw err;

                        expect(res.body[0]).to.have.property('name').and.equal('init');
                        expect(res.body[0]).to.have.property('attack').and.equal(1);
                        expect(res.body[0]).to.have.property('defense').and.equal(1);
                        expect(res.body[0]).to.have.property('range').and.equal(1);
                        expect(res.body[0]).to.have.property('life').and.equal(1);

                        done();
                        
                    });
            });
        
        });

        describe('show:', function() {

            it('Return 200', function(done) {
                request(app)
                    .get('/crud/init')
                    .expect(200, done);
            });

            it('Format json', function(done) {
                request(app)
                    .get('/crud/init')
                    .expect('Content-type', /json/, done);
            });

            it('Show the queried unit', function(done) {
                request(app)
                    .get('/crud/init')
                    .end(function(err, res) {
                        if(err) throw err;

                        expect(res.body).to.have.property('name').and.equal('init');
                        expect(res.body).to.have.property('attack').and.equal(1);
                        expect(res.body).to.have.property('defense').and.equal(1);
                        expect(res.body).to.have.property('range').and.equal(1);
                        expect(res.body).to.have.property('life').and.equal(1);

                        done();
                    
                    });
            
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
                    .end(function(err, res) {
                        if(err) throw err;

                        expect(res.body).to.have.property('name').and.equal('slave');
                        expect(res.body).to.have.property('attack').and.equal(1);
                        expect(res.body).to.have.property('defense').and.equal(1);
                        expect(res.body).to.have.property('range').and.equal(1);
                        expect(res.body).to.have.property('life').and.equal(1);

                        done();

                    });

            });

            it('Return 400 when name is null', function(done) {
                request(app)
                    .post('/crud')
                    .send('name=')
                    .expect(400)
                    .expect('Content-type', /json/)
                    .expect(JSON.stringify('name not specified'), done);
            });

            it('Emits the created unit', function(done) {
                client.on('create unit', function(unit) {

                    expect(unit).to.have.property('name').and.equal('emit');
                    expect(unit).to.have.property('attack').and.equal(1);
                    expect(unit).to.have.property('defense').and.equal(1);
                    expect(unit).to.have.property('range').and.equal(1);
                    expect(unit).to.have.property('life').and.equal(1);

                    done();

                });

                request(app)
                    .post('/crud')
                    .send('name=emit&attack=1&defense=1&range=1&life=1')
                    .end(function(err, res) {
                        if(err) throw err;
                    });
            });

        });

        describe('destroy:', function() {

            it('Return 204', function(done) {
                request(app)
                    .delete('/crud/init')
                    .expect(204, done);
            });

            it('Emits the deleted unit', function(done) {
                client.on('delete unit', function(unit) {

                    expect(unit).to.equal('emit');

                    done();

                });

                request(app)
                    .delete('/crud/emit')
                    .end(function(err, res) {
                        if(err) throw err;
                    });
            });

        });

    });

}; 
