'use strict';

class Controller {

    query(req, res) {

        let id = req.query.id;
    
        res.send('Hello ' + id);
    }

    params(req, res) {

        let originalId = req.params.id;
        let modifiedId = req.id;

        res.send(
            'Hello original ' + originalId + '<br>' +
            'Hello modified ' + modifiedId
        );

    }

}

module.exports = Controller;