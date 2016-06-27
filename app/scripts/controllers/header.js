'use strict';

/**
 * @ngdoc function
 * @name yoomanApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the yoomanApp
 */
angular.module('yoomanApp')
  .controller('HeaderCtrl',['$scope', '$location', function ($scope, $location) {
  	$scope.path = $location.path();
  	console.log($scope.path);
  	
  	$scope.isActive = function(path)
  	{
  		return path===$scope.path;
  	};

  	$scope.$on('$locationChangeSuccess', function() {
  		$scope.path = $location.path();
  	});
    
  }]);
