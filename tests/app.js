'use strict';

var request = require('supertest');
var app = require('../app');

describe('Root path: ', function() {
    it('Return 200', function(done) {
        request(app)
            .get('/')
            .expect(200)
            .expect(/Node Test/)
            .end(done);
    });
});

require('./app/api')();
require('./app/crud')();
require('./app/crud_template')();
require('./app/dynamic_routes')();
require('./app/middleware')();
require('./app/socket')();
require('./app/template')();
