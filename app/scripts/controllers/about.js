'use strict';

/**
 * @ngdoc function
 * @name yoomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoomanApp
 */
 class AboutCtrl
 {
 	constructor()
 	{
 		this.name = `AboutCtrl`;
 		this.title = this.generateTitle();
 	}
 	generateTitle() {
 		return `Controlador ${this.name} generado con ES6`;
 	}
 }
angular.module('yoomanApp')
  .controller('AboutCtrl', AboutCtrl);
