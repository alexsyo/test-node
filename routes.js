module.exports = function(app) {
    
    // Default
    app.get('/', function(req, res) {
        res.sendFile(__dirname + '/index.html');
    });
};
