'use strict';

var _ = require('lodash');
var Team = require('./team.model');
var Player = require('../player/player.model');
var User = require('../user/user.model');

function findPlayerInTeam(user, id) {
  // _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
  return _.find(user.team, function(teamPlayer) {
    // return teamPlayer.player === id;    // does not work!
    console.log('Comparing ' + teamPlayer.player + ' to ' + id);
    return teamPlayer.player.equals(id) || teamPlayer._id.equals(id);
  });
}

// Get the team from the DB.
exports.get = function(req, res) {
  console.log('get, url = ' + req.url);
  var userId = req.params.userid;
  console.log('userId: ' + userId);

  User.findById(userId)
  .populate('team.player')
  .exec(function(err, user) {
    console.log('user: ' + user.name);
    if (err) { return handleError(res, err); }
    if (!user) { return res.send(404); }
    console.log('returning team: ' + JSON.stringify(user.team));
    res.json(200, user.team);
  });
};

// Add a new player to the team or update the qty and return the team.
exports.addPlayer = function(req, res) {
  console.log('addPlayer, url = ' + req.url);
  var userId = req.params.userid.trim();
  var playerId = req.params.playerid.trim();
  console.log('userId: ' + userId + ', playerId: ' + playerId);

  Player.findById(playerId, function(err, player) {
    if (err) { return handleError(res, err); }
    if (!player) { return res.send(404); }
    User.findById(userId, function(err, user) {
      if (err) { return handleError(res, err); }
      if (!user) { return res.send(404); }

      // Check if player is already in team
      var found = findPlayerInCart(user, player._id);
      if (found) {
        console.log('Found player ' + player.name + ' in team, therefore incrementing qty');
        found.qty = found.qty + 1;
      }
      else {
        console.log('Adding player to team: ' + player.name);
        user.team.push( new CartPlayer( { player: player, qty: 1 } ) );
      }
      user.save(function() {
        user.populate('team.player', function(err, user) {
          return res.json(201, user.team );
        });
      });
    });
  });
};

// Remove an player from the team and return the team.
exports.removePlayer = function(req, res) {
  console.log('removePlayer, url = ' + req.url);
  var userId = req.params.userid;
  var teamPlayerId = req.params.playerid;
  console.log('userId: ' + userId + ', teamPlayerId: ' + teamPlayerId);

  // Remove the player, get the updated team, and return the team
  User.findById(userId, function(err, user) {
    if (err) { return handleError(res, err); }
    if (!user) { return res.send(404); }

    // Check if player is already in team
    var found = findPlayerInCart(user, teamPlayerId);
    if (found) {
      console.log('Removing player from team');
      user.team.pull(found._id);               // pull is a feature of MongooseArray!
    }
    else {
      return res.send(404);
    }
    user.save(function() {
      user.populate('team.player', function(err, user) {
        return res.json(201, user.team );
      });
    });
  });
};

// Remove all players from the team in the DB.
exports.removeAllPlayers = function(req, res) {
  console.log('removeAllPlayers, url = ' + req.url);
  var userId = req.params.userid;
  console.log('userId: ' + userId);

  // remove all players from team and return the team
  User.findById(userId, function(err, user) {
    if (err) { return handleError(res, err); }
    if (!user) { return res.send(404); }

    user.team = new Array();
    user.save(function() {
      user.populate('team.player', function(err, user) {
        return res.send(204, user.team);
      });
    });
  });
}

function handleError(res, err) {
  return res.send(500, err);
}