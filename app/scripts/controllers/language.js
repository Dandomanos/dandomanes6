'use strict';

/**
 * @ngdoc function
 * @name yoomanApp.controller:LanguageCtrl
 * @description
 * # LanguageCtrl
 * Controller of the yoomanApp
 */
angular.module('yoomanApp')
  .controller('LanguageCtrl',['$scope', '$rootScope', 'data', '$cookieStore', function ($scope, $rootScope, data, $cookieStore) {


  	$scope.loadFlags = ()  => {
      $scope.flags = data.getFlags().get(
      success => {
        $scope.flags = success.flags;
        console.log("success", $scope.flags);
      },
      error => {
        $scope.message = `Error: ${error.status} - ${error.text} - ${error.statusText}`;
        console.log(error, $scope.message);
      });
    };

    $scope.loadFlags();

    $scope.translate = lang => {
      $cookieStore.put('language', lang);
      $rootScope.language = lang;
    };

    $rootScope.$watch('language', newValue => {
            console.log(`language updated to ${newValue} reloading flags Texts`);
            $scope.loadFlags();
          });

  }]);
