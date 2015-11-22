'use strict';

let request = require('request');

class Controller {

    pipe(req, res) {

        request('http://github.com/alexsyo').pipe(res);

    }

    send(req, res) {

        let string = 'Hello string';

        res.send(string);

    }

    json(req, res) {

        let json = ['Hello', 'json'];

        res.json(json);

    }

    error(req, res) {

        let error = 'Hello error';

        res.status(500).json(error);

    }

    redirect(req, res) {

        // 302 - moved temporarily
        // 301 - moved permanently
        res.redirect(301, '/api/send');

    }

}

module.exports = Controller;