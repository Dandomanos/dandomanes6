'use strict';

describe('Filter: setDecimal', function () {

  // load the filter's module
  beforeEach(module('yoomanApp'));

  // initialize a new instance of the filter before each test
  var setDecimal;
  beforeEach(inject(function ($filter) {
    setDecimal = $filter('setDecimal');
  }));

  it('should return the input prefixed with "setDecimal filter:"', function () {
    var text = 'angularjs';
    expect(setDecimal(text)).toBe('setDecimal filter: ' + text);
  });

});
