'use strict';

module.exports.query = function(req, res) {
    
    var id = req.query.id;
    
    res.send('Hello ' + id);

};

module.exports.params = function(req, res) {
    
    var originalId = req.params.id;
    var modifiedId = req.id;

    res.send(
        'Hello original ' + originalId + '<br>' +
        'Hello modified ' + modifiedId
    );

};
