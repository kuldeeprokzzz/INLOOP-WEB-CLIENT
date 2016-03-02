'use strict';

/**
 * @ngdoc function
 * @name inloopYeomanApp.directive
 * @description
 * 
 * Directive of the inloopYeomanApp
 */
angular.module('inloopYeomanApp')
  .directive("driverFullCard", function(){
      return {
          templateUrl : 'views/driver/driverfullCard.html'
      };
  });