'use strict';

module.exports = function() {
    require('./app/api')();
    require('./app/crud')();
    require('./app/crud_template')();
    require('./app/dynamic_routes')();
    require('./app/middleware')();
    require('./app/socket')();
    require('./app/template')();
};
