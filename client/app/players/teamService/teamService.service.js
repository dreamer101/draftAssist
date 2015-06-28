'use strict';

angular.module(‘draftAssistApp')
.service(‘teamService', function() {

  var that = this;

  that.team = [];

  function findPlayerById(players, id) {
    return _.find(players, function(player) {
      return player._id === id;
    });
  }

  that.addPlayer = function(player) {
    var found = findPlayerById(that.team, player._id);
    if (found) {
      found.qty += player.qty;
    }
    else {
      that.team.push(angular.copy(player));
    }
  };

  that.removePlayer = function(player) {
    var index = that.team.indexOf(player);
    that.team.splice(index, 1);
  };

  that.getPoints = function(player) {
    return player.qty * player.projPts;
  };

  that.getTotalpts = function() {
    return _.reduce(that.team, function(sum, player) {
      return sum + that.getPoints(player);
    }, 0);
  };

  that.clearTeam = function() {
    that.team.length = 0;
  };
});