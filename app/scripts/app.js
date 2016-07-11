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
  .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl as main'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl as about'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'ContactCtrl as contact'
    })
    .otherwise({
      redirectTo: '/'
    });

    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    // });
  });
