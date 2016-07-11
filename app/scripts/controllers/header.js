'use strict';

/**
 * @ngdoc function
 * @name yoomanApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the yoomanApp
 */

 class HeaderCtrl
 {
    constructor(data, $location, $rootScope) {
      this.location = $location;
      this.DATA = data;
      this.root = $rootScope;
      console.log("LOCATION", this.location.path());
      this.path = `/#${this.location.path()}`;

      this.message = "reading a var";
      this.loadMenu();

      this.root.$on('$locationChangeSuccess', () => { this.path = `/#${this.location.path()}`;});

      this.root.$watch('language', newValue => {
            console.log(`language updated to ${newValue} reloading Menu Texts`);
            this.loadMenu();
          });
    }

    loadMenu(){
      this.menu = this.DATA.getMenu().get(
      success => {
        this.menu = success.items;
        console.log("Menu DATA", this.menu);
      },
      error => {
        this.message = `Error: ${error.status} - ${error.text} - ${error.statusText}`;
        console.log(this.message);
      });
    }

    isActive(path) { return path === this.path;}

 }


HeaderCtrl.$inject = ['data', '$location', '$rootScope'];

angular.module('yoomanApp')
  .controller('HeaderCtrl', HeaderCtrl);