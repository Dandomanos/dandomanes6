'use strict';

/**
 * @ngdoc function
 * @name yoomanApp.controller:LanguageCtrl
 * @description
 * # LanguageCtrl
 * Controller of the yoomanApp
 */
angular.module('yoomanApp')
  .controller('LanguageCtrl',['$scope', '$rootScope', 'data', function ($scope, $rootScope, data) {


  	$scope.loadFlags = function() {
      $scope.flags = data.getFlags().get(
      function(success) {
        $scope.flags = success.flags;
        console.log("success", $scope.flags);
      },
      function(error) {
        $scope.message = "Error: " + error.status + " " + error.statusText;
      });
    };

    $scope.loadFlags();

    $scope.translate = function(lang) {
      $rootScope.language = lang;
    };

    $rootScope.$watch('language', function (newValue) {
            console.log("language updated", newValue);
            $scope.loadFlags();
          });

  }]);
