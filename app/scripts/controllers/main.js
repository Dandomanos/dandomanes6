'use strict';

/**
 * @ngdoc function
 * @name yoomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoomanApp
 */
angular.module('yoomanApp')
  .controller('MainCtrl', ['$scope', 'data', '$rootScope', function ($scope, data, $rootScope) {

  	$scope.loadText = function() {
      $scope.home = data.getHome().get(
      function(success) {
        $scope.home = success;
        console.log("Home Texts", $scope.home);
      },
      function(error) {
        $scope.message = "Error: " + error.status + " " + error.statusText;
      });
    };

    $scope.loadText();
    
    $rootScope.$watch('language', function (newValue) {
            console.log("language updated", newValue);
            $scope.loadText();
          });
  }]);
