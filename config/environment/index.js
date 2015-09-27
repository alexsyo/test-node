'use strict';

var _ = require('lodash');

var all = {

    env: process.env.NODE_ENV,
    port: process.env.PORT || 3000

};

module.exports = _.merge(
    all,
    require('./' + process.env.NODE_ENV + '.js')
);
