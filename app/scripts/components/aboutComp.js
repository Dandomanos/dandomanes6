'use strict';

/**
 * @ngdoc function
 * @name yoomanApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the yoomanApp
 */

angular.module('yoomanApp')
  .component("aboutComp",{
      template: '<h2>{{about.title}}!</h2>',
      bindings: { title: '@' },
      controller: 'AboutCtrl as about'
  });
