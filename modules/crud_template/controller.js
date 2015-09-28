'use strict';

module.exports.index = function(req, res) {

    res.render('crud.ejs');

};

module.exports.show = function(req, res) {

    res.locals = {unit: req.params.id};
    res.render('crud_show.ejs');

};

module.exports.create = function(req, res) {

};

module.exports.update = function(req, res) {

};

module.exports.destroy = function(req, res) {

};
