'use strict';

describe('Filter: playerFilter', function () {

  // load the filter's module
  beforeEach(module('draftAssistApp'));

  // initialize a new instance of the filter before each test
  var playerFilter;
  beforeEach(inject(function ($filter) {
    playerFilter = $filter('playerFilter');
  }));

  it('should return the input prefixed with "playerFilter filter:"', function () {
    var text = 'angularjs';
    expect(playerFilter(text)).toBe('playerFilter filter: ' + text);
  });

});
