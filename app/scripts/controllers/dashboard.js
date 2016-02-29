'use strict';

/**
 * @ngdoc function
 * @name inloopYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the inloopYeomanApp
 */
angular.module('inloopYeomanApp')
  .controller('dashboardCtrl', function ($scope, $location, $rootScope) {
    $scope.add = function(){
    	if($scope.licensePlateNumber == "1234"){
            $rootScope.loggedIn = true;
            $location.path('/dashboardCard');
    	}else {
    		alert('Wrong credentials')
    	}
    };
  });
