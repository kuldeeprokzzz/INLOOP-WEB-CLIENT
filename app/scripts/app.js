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
        controller : 'driver_LicencePlate_Ctrl'
      })
      .when('/onMyWay', {
        templateUrl: 'views/driver/onMyWay.html',
        controller : 'driver_OnMyWay_Ctrl'
        
      })
      .when('/checkIn', {
        templateUrl: 'views/delivery_associate/checkIn.html',
        
      })
       .when('/driverList', {
        templateUrl: 'views/delivery_associate/driverList.html',
        
      })
      .when('/driverCheckInList', {
        templateUrl: 'views/delivery_associate/driverCheckInList.html',
        
      })
      .when('/deliveryMenifest', {
        templateUrl: 'views/driver/deliveryMenifest.html',
        
      })
      .when('/scanPageIn', {
        templateUrl: 'views/driver/scanPageIn.html',
        
      })
      .when('/manifestDetails', {
        templateUrl: 'views/driver/manifestDetails.html',
        
      })
       .otherwise({
        redirectTo: '/'
      });
  });
