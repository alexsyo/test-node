'use strict';

var fs = require('fs');

module.exports = function(data) {

    var log = 'Task "' + data + '" completed on ' + Date() + '\n';

    fs.appendFile('./storage/log.txt', log, function(err) {
    
        if(err) throw err;
    
    });

};
