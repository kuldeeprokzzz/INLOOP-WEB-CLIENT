'use strict';

/**
 * @ngdoc overview
 * @name inloopYeomanApp
 * @description
 * # inloopYeomanApp
 *
 * Main module of the application.
 */
angular
  .module('inloopYeomanApp', [
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
        templateUrl: 'views/sign_in.html',
        controller: 'Sign_inCtrl'
      })
      .when('/licensePlate', {
        templateUrl: 'views/driver/licensePlate.html',
        
      })
       .otherwise({
        redirectTo: '/'
      });
  });
