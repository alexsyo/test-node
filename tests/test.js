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
