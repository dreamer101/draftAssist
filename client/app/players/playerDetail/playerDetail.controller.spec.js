'use strict';

describe('Controller: PlayerDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('draftAssistApp'));

  var PlayerDetailCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlayerDetailCtrl = $controller('PlayerDetailCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
