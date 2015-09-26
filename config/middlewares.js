'use strict';

var express = require('express');
var bodyParser = require('body-parser');

module.exports = function(app) {

    app.use(express.static(__dirname + '/../bower_components'));
    app.use(bodyParser.urlencoded({extended: true}));

};
