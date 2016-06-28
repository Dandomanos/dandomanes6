'use strict';

/**
 * @ngdoc overview
 * @name yoomanApp
 * @description
 * # yoomanApp
 *
 * Main module of the application.
 */
angular
  .module('yoomanApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
    ])
  .config(function ($routeProvider,  $locationProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'about'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'ContactCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    // });
  });
