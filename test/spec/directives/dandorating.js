'use strict';

describe('Directive: dandoRating', function () {

  // load the directive's module
  beforeEach(module('yoomanApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dando-rating></dando-rating>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dandoRating directive');
  }));
});
