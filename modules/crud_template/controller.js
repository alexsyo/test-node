'use strict';

class Controller {

    index(req, res) {

        res.render('crud.ejs');

    }

    show(req, res) {

        res.locals = {unit: req.params.id};
        res.render('crud_show.ejs');

    }

    create(req, res) {

    }

    update(req, res) {

    }

    destroy(req, res) {

    }

}

module.exports = Controller;