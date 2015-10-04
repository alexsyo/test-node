'use strict';

var fs = require('fs');

module.exports = function(server) {

    //Path
    var path = process.argv[3];

    // Read a file
    var readFile = fs.createReadStream(path);

        // Get total file bytes
        var totalBytes;
        var uploadedBytes = 0;

        fs.stat(path, function(err, stats) {
            totalBytes = stats.size;
        });

        // Output progress
        readFile.on('readable', function() {
            var chunk;

            while(null !== (chunk = readFile.read())) {
                uploadedBytes += chunk.length;
                var progress = (uploadedBytes / totalBytes) * 100;

                console.log(parseInt(progress, 10) + '%');
            }
        });

    // Open a new file
    var newFile = fs.createWriteStream('storage/test-write.txt');

    // Write file by chunk
    readFile.pipe(newFile);

    // End
    readFile.on('end', function() {
        console.log('file written!');
    });

    // Log
    server.emit('log', 'write');

};
