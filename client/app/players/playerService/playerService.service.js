'use strict';

angular.module('draftAssistApp')
  .service('playerService', function ($http) {

 var that = this;

  that.findPlayerById = function(id) {
    return $http.get('/api/players/' + id);
  };

  that.getPlayers = function() {
    return $http.get('/api/players');
  };

});