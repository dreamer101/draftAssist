'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TeamSchema = new Schema({
  name:     String,
  info:     String,
  player:   String,
  qty:      Number,
  active:   Boolean
});

module.exports = mongoose.model('Team', TeamSchema);