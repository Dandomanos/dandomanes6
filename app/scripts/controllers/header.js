'use strict';

/**
 * @ngdoc function
 * @name yoomanApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the yoomanApp
 */
angular.module('yoomanApp')
  .controller('HeaderCtrl',['$scope', '$location', 'data', '$rootScope', function ($scope, $location, data, $rootScope) {
  	$scope.path = '/#'+$location.path();
    $scope.message = "Loading...";

    $scope.loadMenu = ()  => {
      $scope.menu = data.getMenu().get(
      function(success) {
        $scope.menu = success.items;
        console.log("Menu DATA", $scope.menu);
      },
      function(error) {
        $scope.message = `Error: ${error.status} - ${error.text} - ${error.statusText}`;
        console.log($scope.message);
      });
    };

    $scope.loadMenu();
  	
  	
  	$scope.isActive = (path) => path===$scope.path;
  	

  	$scope.$on('$locationChangeSuccess', () => { $scope.path = '/#'+$location.path(); });


    $rootScope.$watch('language', (newValue) => {
            console.log(`language updated to ${newValue} reloading Menu Texts`);
            $scope.loadMenu();
          });
  }]);
