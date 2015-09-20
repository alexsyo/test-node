'use strict';

var request = require('request');

module.exports.pipe = function(req, res) {

    request('http://github.com/alexsyo').pipe(res);

};

module.exports.send = function(req, res) {

    var string = 'Hello string';
    
    res.send(string);

};

module.exports.json = function(req, res) {

    var json = ['Hello', 'json'];

    res.json(json);

};

module.exports.error = function(req, res) {

    var error = 'Hello error';

    res.status(500).json(error);

};

module.exports.redirect = function(req, res) {

    // 302 - moved temporarily
    // 301 - moved permanently
    res.redirect(301, '/api/send');

};
