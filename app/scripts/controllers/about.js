'use strict';

/**
 * @ngdoc function
 * @name yoomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoomanApp
 */
angular.module('yoomanApp')
  .controller('AboutCtrl', ['$scope', function ($scope) {
    let cadena = `Mi cadena`;
    var mostrarCadena= () => console.log(`Cadena desde es6 ${cadena}`);
    mostrarCadena();
  }]);
