'use strict';

/**
 * @ngdoc function
 * @name yoomanApp.controller:LanguageCtrl
 * @description
 * # LanguageCtrl
 * Controller of the yoomanApp
 */
class LanguageCtrl {
  constructor($rootScope, data, $cookieStore)
  {
    this.root = $rootScope;
    this.DATA = data;
    this.cookie = $cookieStore;
    this.loadFlags();
    this.root.$watch('language', newValue => {
            console.log(`language updated to ${newValue} reloading flags Texts`);
            this.loadFlags();
          });
  }

  loadFlags() {
    console.log("starting flags");
    this.flags = this.DATA.getFlags().get(
      success => {
        this.flags = success.flags;
        console.log("Flags", this.flags);
      },
      error => {
        this.message = `Error Flags: ${error.status} - ${error.text} - ${error.statusText}`;
        console.log(this.message);
      });
  }

  translate(lang) {
    this.cookie.put('language', lang);
    this.root.language = lang;
  }
}

LanguageCtrl.$inject = ['$rootScope', 'data', '$cookieStore'];
angular.module('yoomanApp')
.controller('LanguageCtrl', LanguageCtrl);