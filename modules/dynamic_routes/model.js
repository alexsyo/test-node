'use strict';

module.exports.uppercase = function(req, res, next) {
    
    req.id = req.params.id.toUpperCase();
    
    next();

};
