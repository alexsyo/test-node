'use strict';

class Controller {
    
    index(req, res) {
        
        res.json(req.data);

    }

}

module.exports = Controller;