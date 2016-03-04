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
      .when('/onMyWay', {
        templateUrl: 'views/driver/onMyWay.html',
        
      })
      .when('/checkIn', {
        templateUrl: 'views/delivery_associate/checkIn.html',
        
      })
      .when('/driverCheckIn', {
        templateUrl: 'views/delivery_associate/driverCheckIn.html',
        
      })
       .otherwise({
        redirectTo: '/'
      });
  });
