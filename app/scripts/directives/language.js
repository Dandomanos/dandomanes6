'use strict';

/**
 * @ngdoc directive
 * @name yoomanApp.directive:language
 * @description
 * # language
 */
angular.module('yoomanApp')
  .directive('languageSelector', function () {
    return {
      templateUrl: 'views/language.html',
      restrict: 'E',
      controller: 'LanguageCtrl as lang'
    };
  });
