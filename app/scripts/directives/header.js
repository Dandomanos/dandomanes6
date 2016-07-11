'use strict';

/**
 * @ngdoc directive
 * @name yoomanApp.directive:header
 * @description
 * # header
 */
angular.module('yoomanApp')
  .directive('myHeader', function () {
    return {
      templateUrl: 'views/header.html',
      restrict: 'E',
      controller: 'HeaderCtrl as header',
    };
  });
