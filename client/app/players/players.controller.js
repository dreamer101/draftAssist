'use strict';

angular.module('draftAssistApp')
.controller('PlayersCtrl', function($state, playerService, teamService) {

  this.searchText = '';
  this.roster = playerService.roster;
  this.team = teamService.team;

  this.addPlayer = function(player) {
    teamService.addPlayer(player);
  };

  this.removePlayer = function(player) {
    teamService.removePlayer(player);
  };

  this.getPoints = function(player) {
    return teamService.getPoints(player);
  };

  this.getTotalpts = function() {
    return teamService.getTotalpts();
  };

  this.clearTeam = function() {
    return teamService.clearTeam();
  };

  this.goPlayer = function (player) {
    console.log('goPlayer: ' + player._id);
    $state.go( 'playerDetail', { playerId : player._id } );
  };
});