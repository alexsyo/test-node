'use strict';
var request = require('request');

module.exports.pipe = function(req, res) {

    request('http://github.com/alexsyo').pipe(res);

};
