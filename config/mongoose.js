'use strict';

var env = require('./environment');
var mongoose = require('mongoose');

module.exports = function() {
   
    mongoose.connect(env.mongo.uri);
    mongoose.connection.on('error', function(err) {
        console.log('MongoDB connection error: ' + err);
    });

};
