'use strict';

module.exports.one = function(req, res, next) {

    req.data = [];
    req.data.push('first');

    next();

};

module.exports.two = function(req, res, next) {

    req.data.push('second');

    next();

};

module.exports.three = function(req, res, next) {

    req.data.push('third');

    next();

};
