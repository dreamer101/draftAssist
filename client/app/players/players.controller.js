'use strict';

angular.module('draftAssistApp')
.controller('PlayersCtrl', function($state, playerService, teamService) {

  var that = this;

  that.searchText = '';
  that.total = 0;
  // that.roster = playerService.roster;
  // that.team = teamService.team;

  that.getRoster = function() {
    platerService.getPlayers().then(function(json) {
      that.roster = json.data;
    });
  };

  teamService.getTeam().then(function(json) {
    that.team = json.data;
    that.total = teamService.getTotal(that.team);
  });

  that.getInventory();

  that.addPlayer = function(player) {
    teamService.addPlayer(player).then(function(json) {
      that.team = json.data;
      that.total = teamService.getTotal(that.team);
    }, function(err) {
      console.log('ERROR: addPlayer post: ' + JSON.stingify(err));
    });
  };

  that.removePlayer = function(player) {
    teamService.removePlayer(player).then(function(json) {
      that.team = json.data;
      that.total = teamService.getTotal(that.team);
    }, function(err) {
      console.log('ERROR: removePlayer delete: ' + JSON.stingify(err));
    });
  };

  that.getPoints = function(player) {
    return teamService.getPoints(player);
  };

  that.clearTeam = function() {
    return teamService.clearTeam().then(function(json) {
      that.team = json.data;
      that.total = teamService.getTotal(that.team);
    }, function(err) {
      console.log('clearTeam delete ERROR: ' + JSON.stingify(err));
    });
  };

  that.goPlayer = function (player) {
    $state.go( 'playerDetail', { playerId : player._id } );
  };

});