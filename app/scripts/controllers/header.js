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

    $scope.loadMenu = function() {
      $scope.menu = data.getMenu().get(
      function(success) {
        $scope.menu = success.items;
        console.log("success", $scope.menu);
      },
      function(error) {
        $scope.message = "Error: " + error.status + " " + error.statusText;
      });
    };

    $scope.loadMenu();
  	
  	
  	$scope.isActive = function(path)
  	{
  		return path===$scope.path;
  	};

  	$scope.$on('$locationChangeSuccess', function() {
  		$scope.path = '/#'+$location.path();
  	});


    $rootScope.$watch('language', function (newValue) {
            console.log("language updated", newValue);
            $scope.loadMenu();
          });
    
  }]);
