'use strict';

/**
 * @ngdoc function
 * @name inloopYeomanApp.directive
 * @description
 * 
 * Directive of the inloopYeomanApp
 */
angular.module('inloopYeomanApp')
  .directive("driverCard", function(){
      return {
          templateUrl : 'views/driver/driverCard.html'
      };
  });