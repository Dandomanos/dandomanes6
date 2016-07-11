'use strict';

/**
 * @ngdoc function
 * @name yoomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoomanApp
 */

class MainCtrl {
  constructor(data, $rootScope)
  {
    this.DATA = data;
    this.root = $rootScope;

    this.loadText();

    this.root.$watch('language', newValue => {
            console.log(`language updated to ${newValue} reloading Home Texts`);
            this.loadText();
          });
  }

  loadText() {
    this.home = this.DATA.getHome().get(
      success => {
        this.home = success;
        console.log("Home Texts", this.home);
      },
      error => {
        this.message = `Error: ${error.status} - ${error.text} - ${error.statusText}`;
        console.log(this.message);
      });
  }
}

MainCtrl.$inject = ['data', '$rootScope'];

angular.module('yoomanApp')
  .controller('MainCtrl', MainCtrl);