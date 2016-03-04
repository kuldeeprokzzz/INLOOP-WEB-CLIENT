'use strict';

/**
 * @ngdoc function
 * @name inloopYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the inloopYeomanApp
 */
angular.module('inloopYeomanApp')
  .controller('driver_LicencePlate_Ctrl', function ($scope, $location, $rootScope,callRemoteService,$http) {


    $scope.OnLicenceKeyPress = function(){


      callRemoteService.getVehicleProfile($rootScope.driver.providerId,$rootScope.driver.providerId)
          .then(function(response){

            $scope.responseData = response.data;
            $scope.licensePlateNumber = ($scope.responseData)[0].regNumber;
            $scope.model = ($scope.responseData)[0].model;
            $scope.vehicleImage = ($scope.responseData)[0].vehicleImage;
      });
    }


  	$scope.addLicencePlate = function(){

/*      callRemoteService.getVehicleProfile($rootScope.driver.providerId,$rootScope.driver.providerId)
          .then(function(response){
            alert('1')*/

            $rootScope.driver.licensePlateNumber = $scope.licensePlateNumber;
            $rootScope.driver.model = ($scope.responseData)[0].model;
            $rootScope.driver.vehicleImage = ($scope.responseData)[0].vehicleImage;
            $rootScope.driver.vehicleId = ($scope.responseData)[0].id;
            $rootScope.driver.vehicleMake = ($scope.responseData)[0].make;

            $location.path('/onMyWay');
            console.log($location.path());
/*          });*/
        }

  });