'use strict';

var api = require('./modules/api');
var dynamic_routes = require('./modules/dynamic_routes');
var middleware = require('./modules/middleware');

module.exports = function(app) {
    
    // Middleware used to suffix the request
    app.use('/api', api);
    app.use('/dynamic_routes', dynamic_routes);
    app.use('/middleware', middleware);

    // Default
    app.get('/', function(req, res) {
        res.sendFile(__dirname + '/index.html');
    });
};
