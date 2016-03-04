'use strict';

/**
 * @ngdoc function
 * @name inloopYeomanApp.directive
 * @description
 * 
 * Directive of the inloopYeomanApp
 */
angular.module('inloopYeomanApp')
  .directive("manifestCard", function(){
      return {
          templateUrl : 'views/driver/manifestCard.html'
      };
  });