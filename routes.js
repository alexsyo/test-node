'use strict';

var api = require('./modules/api');
var dynamic_routes = require('./modules/dynamic_routes');
var middleware = require('./modules/middleware');
var rest = require('./modules/rest');

module.exports = function(app) {
    
    // Middleware used to suffix the request
    app.use('/api', api);
    app.use('/dynamic_routes', dynamic_routes);
    app.use('/middleware', middleware);

    // REST
    app.use('/crud', rest('crud'));
    app.use('/crud_template', rest('crud_template'));
    app.use('/socket', rest('socket'));
    app.use('/template', rest('template'));
    

    // Default
    app.get('/', function(req, res) {
        res.sendFile(__dirname + '/index.html'); // current directory
    });
};
