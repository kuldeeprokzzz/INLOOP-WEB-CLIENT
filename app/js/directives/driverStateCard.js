'use strict';

/**
 * @ngdoc function
 * @name inloopYeomanApp.directive
 * @description
 * 
 * Directive of the inloopYeomanApp
 */
angular.module('inloopYeomanApp')
  .directive("driverStateCard", function(){
      return {
          templateUrl : 'views/delivery_associate/driverGreenCard.html'
          /*templateUrl : 'views/delivery_associate/driverYellowCard.html'	
          templateUrl : 'views/delivery_associate/driverRedCard.html'*/
      };
  });