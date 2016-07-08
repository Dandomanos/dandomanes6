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

  	$scope.loadText = () => {
      $scope.home = data.getHome().get(
      success => {
        $scope.home = success;
        console.log("Home Texts", $scope.home);
      },
      error => {
        $scope.message = `Error: ${error.status} - ${error.text} - ${error.statusText}`;
        console.log(error, $scope.message);
      });
    };

    $scope.loadText();
    
    $rootScope.$watch('language', function (newValue) {
            console.log(`language updated to ${newValue} reloading Home Texts`);
            $scope.loadText();
          });
  }]);
