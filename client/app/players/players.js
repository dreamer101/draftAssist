'use strict';

angular.module('draftAssistApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('players', {
        url: '/players',
        templateUrl: 'app/players/players.html',
        controller: 'PlayersCtrl as ctrl'
      });
  });