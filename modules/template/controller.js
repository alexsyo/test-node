'use strict';

module.exports.index = function(req, res) {

    res.locals = { varTest: 'Hello variable' }; // pass a variable
    res.render('template.ejs'); // template in \views

};

module.exports.show = function(req, res) {

    res.locals = { varTest: 'Hello ' + req.params.id };
    res.render('template.ejs');

};

module.exports.create = function(req, res) {

};

module.exports.update = function(req, res) {

};

module.exports.destroy = function(req, res) {

};
