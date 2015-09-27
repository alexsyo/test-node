'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var unitSchema = new Schema({
    name: {type: String, unique: true},
    attack: Number,
    defense: Number,
    range: Number,
    life: Number
});

module.exports = mongoose.model('unit', unitSchema);
