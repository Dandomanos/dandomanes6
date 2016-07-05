'use strict';

/**
 * @ngdoc service
 * @name yoomanApp.data
 * @description
 * # data
 * Service in the yoomanApp.
 */
angular.module('yoomanApp')
  .constant("baseURL", "http://localhost:3000/")
  .service('data', ['$resource', 'baseURL', '$rootScope', function ($resource, baseURL, $rootScope) {

    if($rootScope.language===undefined)
    {
      $rootScope.language = 'EN';
    }
    console.log("idioma", $rootScope.language);
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getMenu = function() {
    	return $resource(baseURL + $rootScope.language + "/menu", null, {'update': {method:'PUT'}});
    };

    this.getContact = function() {
    	return $resource(baseURL + $rootScope.language + "/contact", null, {'update': {method:'PUT'}});
    };

    this.getComments = function() {
      return $resource(baseURL + "comments/:id", null, {'update': {method:'PUT'}});
    };

    this.getFlags = function() {
      return $resource(baseURL + $rootScope.language + "/language", null, {'update': {method:'PUT'}});
    };

    this.getHome = function() {
      return $resource(baseURL + $rootScope.language + "/home", null, {'update': {method:'PUT'}});
    };


    

  }]);
