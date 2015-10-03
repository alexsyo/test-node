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

    if(!req.body.name) {

        res.status(400).json('name not specified');

        return;

    }

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

    // find then remove to make mongoose middlewares work
    units.find({name: req.params.id}, function(err, unit) {

        if(err) throw err;

        unit[0].remove(function(err) {

            if(err) throw err;

            res.sendStatus(204);

        });

    });

};
