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
        templateUrl: 'views/driver_logo.html'
      })
      .when('/sign_in', {
        templateUrl: 'views/sign_in.html',
        controller: 'Sign_inCtrl'
      })
      .when('/dashboard', {
        resolve : {
           "check" : function($location, $rootScope) {
                    if(!$rootScope.loggedIn) {
                       $location.path('/');
                    }
           }
        },
        templateUrl: 'views/dashboard.html',
        controller: 'dashboardCtrl'
      })
      .when('/dashboardCard', {
        resolve : {
           "check" : function($location, $rootScope) {
                    if(!$rootScope.loggedIn) {
                       $location.path('/');
                    }
           }
        },
        templateUrl: 'views/dashboardCard.html',
        controller: ''
      })
      .when('/deliveryAssociate', {
        templateUrl: 'views/delivery_associate.html'
      })
      .when('/checkIn', {
        templateUrl: 'views/check_in.html',
        controller: 'checkInCtrl'
      })
      .when('/listedDrivers', {
        resolve : {
           "check" : function($location, $rootScope) {
                    if(!$rootScope.loggedIn) {
                       $location.path('/');
                    }
           }
        },
        templateUrl: 'views/listed_drivers.html'
       }) 
      .otherwise({
        redirectTo: '/'
      });
  });
