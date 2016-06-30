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
  .service('data', ['$resource', 'baseURL', function ($resource, baseURL) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getMenu = function() {
    	return $resource(baseURL + "menu", null, {'update': {method:'PUT'}});
    };

    this.getContact = function() {
    	return $resource(baseURL + "contact", null, {'update': {method:'PUT'}});
    };

    this.getComments = function() {
      return $resource(baseURL + "comments/:id", null, {'update': {method:'PUT'}});
    };



  }]);
