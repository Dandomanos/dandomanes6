'use strict';

describe('Directive: language', function () {

  // load the directive's module
  beforeEach(module('yoomanApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<language></language>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the language directive');
  }));
});
