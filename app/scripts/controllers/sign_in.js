'use strict';

/**
 * @ngdoc function
 * @name inloopYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the inloopYeomanApp
 */
angular.module('inloopYeomanApp')
  .controller('Sign_inCtrl', function ($scope, $location, $rootScope) {
    $scope.submit = function(){
    	if($scope.mobileNumber == "8197480332" && $scope.aadharNumber == "1234"){
            $rootScope.loggedIn = true;
            $location.path('/dashboard');
    	}else {
    		alert('Wrong credentials')
    	}
    };
  });
