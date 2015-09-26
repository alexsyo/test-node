'use strict';

module.exports.index = function(req, res) {

    res.render('crud.ejs');

};

module.exports.show = function(req, res) {

};

module.exports.create = function(req, res) {

    var data = req.body;

    res.status(201).json(data);

};

module.exports.update = function(req, res) {

};

module.exports.destroy = function(req, res) {

};
