'use strict';

var unit = require('./model');

module.exports.index = function(req, res) {

    unit.find(function(err, obj) {
        
        if(err) throw err;

        res.json(obj);

    });

};

module.exports.show = function(req, res) {

};

module.exports.create = function(req, res) {

    var newUnit = new unit(req.body);

    newUnit.save(function(err, obj) {
        
        if(err) {

            res.status(400).json(err);
        
        } else {

            res.status(201).json(obj);

        }

    });

};

module.exports.update = function(req, res) {

};

module.exports.destroy = function(req, res) {

};
