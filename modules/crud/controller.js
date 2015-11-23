'use strict';

var units = require('./model');

class Controller {

    index(req, res) {

        units.find(function(err, obj) {
        
            if(err) throw err;

            res.json(obj);

        });

    }

    show(req, res) {

        units.findOne({'name': req.params.id}, function(err, obj) {

            if(err) throw err;

            res.json(obj);

        });

    }

    create(req, res) {

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

    }

    update(req, res) {

    }

    destroy(req, res) {

        // find then remove to make mongoose middlewares work
        units.find({name: req.params.id}, function(err, unit) {

            if(err) throw err;

            unit[0].remove(function(err) {

                if(err) throw err;

                res.sendStatus(204);

            });

        });

    }

}

module.exports = Controller;