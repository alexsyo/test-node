'use strict';

var api = require('./modules/api');

module.exports = function(app) {
    
    // Middleware used to suffix the request
    app.use('/api', api);

    // Default
    app.get('/', function(req, res) {
        res.sendFile(__dirname + '/index.html');
    });
};
