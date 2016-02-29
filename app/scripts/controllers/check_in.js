'use strict';

/**
 * @ngdoc function
 * @name inloopYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the inloopYeomanApp
 */
angular.module('inloopYeomanApp')
  .controller('checkInCtrl', function ($scope, $location, $rootScope) {
    $scope.checkIn = function(){
    	if($scope.odometer == "1234"){
            $rootScope.loggedIn = true;
            $location.path('/listedDrivers');
    	}else {
    		alert('Wrong credentials')
    	}
    };
  });