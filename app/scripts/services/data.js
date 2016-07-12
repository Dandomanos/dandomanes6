'use strict';

/**
 * @ngdoc service
 * @name yoomanApp.data
 * @description
 * # data
 * Service in the yoomanApp.
 */
 class DATA {
  constructor($resource, baseURL, $rootScope, $cookieStore)
  {
    this.resource = $resource;
    this.baseURL = baseURL;
    this.root = $rootScope;
    this.cookie = $cookieStore;

    this.checkLanguage();
  }

  checkLanguage() {
    if(this.cookie.get('language') === undefined)
    {
      this.cookie.put('language', 'EN');
      this.root.language = 'EN';
    } else
    {
      this.root.language = this.cookie.get('language');
      console.log("ACTUAL LANGUAGE", this.root.language);
    }
  }

  getMenu() {
      return this.resource(this.baseURL + this.root.language + "/menu", null, {'update': {method:'PUT'}});
    }

  getContact() {
      return this.resource(this.baseURL + this.root.language + "/contact", null, {'update': {method:'PUT'}});
    }

  getComments() {
      return this.resource(this.baseURL + "comments/:id", null, {'update': {method:'PUT'}});
    }

  getFlags() {
      return this.resource(this.baseURL + this.root.language + "/language", null, {'update': {method:'PUT'}});
    }

  getHome() {
      return this.resource(this.baseURL + this.root.language + "/home", null, {'update': {method:'PUT'}});
    }

  getAbout() {
      return this.resource(this.baseURL + this.root.language + "/about", null, {'update': {method:'PUT'}});
    }


 }
 DATA.$inject = ['$resource', 'baseURL', '$rootScope', '$cookieStore'];
angular.module('yoomanApp')
  .constant("baseURL", "http://localhost:3000/")
  .service('data', DATA);
  // .service('data', ['$resource', 'baseURL', '$rootScope', '$cookieStore', function ($resource, baseURL, $rootScope, $cookieStore) {

  //   if($cookieStore.get('language')===undefined)
  //   {

  //     $cookieStore.put('language', 'EN');
  //     $rootScope.language = 'EN';
  //   } else {
  //     $rootScope.language = $cookieStore.get('language');
  //     console.log("ACTUAL LANGUAGE", $rootScope.language);
  //   }
  //   console.log("idioma", $rootScope.language);
  //   // AngularJS will instantiate a singleton by calling "new" on this function
  //   this.getMenu = function() {
  //   	return $resource(baseURL + $rootScope.language + "/menu", null, {'update': {method:'PUT'}});
  //   };

  //   this.getContact = function() {
  //   	return $resource(baseURL + $rootScope.language + "/contact", null, {'update': {method:'PUT'}});
  //   };

  //   this.getComments = function() {
  //     return $resource(baseURL + "comments/:id", null, {'update': {method:'PUT'}});
  //   };

  //   this.getFlags = function() {
  //     return $resource(baseURL + $rootScope.language + "/language", null, {'update': {method:'PUT'}});
  //   };

  //   this.getHome = function() {
  //     return $resource(baseURL + $rootScope.language + "/home", null, {'update': {method:'PUT'}});
  //   };


    

  // }]);
