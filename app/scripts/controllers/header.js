'use strict';

/**
 * @ngdoc function
 * @name yoomanApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the yoomanApp
 */
angular.module('yoomanApp')
  .controller('HeaderCtrl',['$scope', '$location', 'data', function ($scope, $location, data) {
  	$scope.path = '/#'+$location.path();
    $scope.message = "Loading...";
  	$scope.menu = data.getMenu().query(
      function(success) {
        $scope.menu = success;
      },
      function(error) {
        $scope.message = "Error: " + error.status + " " + error.statusText;
      });
  	
  	$scope.isActive = function(path)
  	{
  		return path===$scope.path;
  	};

  	$scope.$on('$locationChangeSuccess', function() {
  		$scope.path = '/#'+$location.path();
  	});
    
  }]);
