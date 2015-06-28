'use strict';

angular.module('draftAssistApp')
.service('playerService', function() {

  var that = this;

  that.findPlayerById = function(id) {
    var playerId = parseInt(id);
    return _.find(that.roster, function(item) {
      return player._id === parseInt(playerId);
    });
  };
});