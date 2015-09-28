'use strict';

var units = require('./model');

module.exports.index = function(req, res) {

    units.find(function(err, obj) {
        
        if(err) throw err;

        res.json(obj);

    });

};

module.exports.show = function(req, res) {

    units.findOne({'name': req.params.id}, function(err, obj) {

        if(err) throw err;

        res.json(obj);

    });

};

module.exports.create = function(req, res) {

    var unit = new units(req.body);

    unit.save(function(err, obj) {
        
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
