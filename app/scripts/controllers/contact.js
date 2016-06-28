'use strict';

/**
 * @ngdoc function
 * @name yoomanApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the yoomanApp
 */
angular.module('yoomanApp')
  .controller('ContactCtrl',['$scope', 'data', function ($scope, data) {

  	$scope.message = "Loading...";

  	$scope.data = {
  	};

  	$scope.dataForm = data.getContact().get(
  		function(success) {
  			$scope.dataForm = success;
  			console.log("data", success);
  		},
  		function(error) {
  			$scope.message = "Error: " + error.text + " " + error.statusText;
  			console.log("Error", $scope.message);
  		});

  	$scope.sendComment = function() {
  		console.log("Send Data", $scope.data);
  	}
    
  }]);
