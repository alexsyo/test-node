'use strict';

class Controller {

    index(req, res) {

        res.locals = { varTest: 'Hello variable' }; // pass a variable
        res.render('template.ejs'); // template in \views

    }

    show(req, res) {

        res.locals = { varTest: 'Hello ' + req.params.id };
        res.render('template.ejs');

    }

    create(req, res) {

    }

    update(req, res) {

    }

    destroy(req, res) {

    }

}

module.exports = Controller;