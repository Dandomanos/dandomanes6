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
 	constructor(data, $rootScope)
 	{
 		this.name = `AboutCtrl`;
 		this.DATA = data;
 		this.root = $rootScope;

 		this.loadTexts();

 		this.root.$watch('language', newValue => {
            console.log(`language updated to ${newValue} reloading About Texts`);
            this.loadTexts();
          });
 	}

 	loadTexts(){
      this.title = this.DATA.getAbout().get(
      success => {
        this.title = success.title;
        console.log("ABOUT DATA", this.title);
      },
      error => {
        this.message = `Error: ${error.status} - ${error.text} - ${error.statusText}`;
        console.log(this.message);
      });
    }
 }
 AboutCtrl.$inject = ['data', '$rootScope'];
angular.module('yoomanApp')
  .controller('AboutCtrl', AboutCtrl);
