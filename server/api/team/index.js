'use strict';

var express = require('express');
var controller = require('./team.controller');

var router = express.Router();

router.get   ('/:userid/team/',        controller.get);
router.post  ('/:userid/team/:itemid', controller.addPlayer);
router.delete('/:userid/team/',        controller.removeAllPlayers);
router.delete('/:userid/team/:itemid', controller.removePlayer);

module.exports = router;