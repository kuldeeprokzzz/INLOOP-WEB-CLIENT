'use strict';

/**
 * @ngdoc function
 * @name inloopYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the inloopYeomanApp
 */
angular.module('inloopYeomanApp')
  .controller('driver_OnMyWay_Ctrl', function ($scope, $location, $rootScope,callRemoteService,$http) {


    $scope.submitOnMyWay = function(){

      var requestBody = {
                            "providerid": $rootScope.driver.providerId,
                            "vehicleid": $rootScope.driver.vehicleId,
                            "driverid": $rootScope.driver.driverId,
                            "status": $rootScope.contractStatusType.onWay.type,
                              "states": [
                              {
                                "id": $rootScope.contractStatusType.onWay.id,
                                "type": $rootScope.contractStatusType.onWay.type,
                                "time": "26/02/2016 04:57:30",
                                "location": {
                                  "longitude": 77.5936900,
                                  "latitute": 12.9719400
                                },
                                "odometer": 87917,
                                "performed_by": $rootScope.driver.username,
                              }]
                            }

    callRemoteService.driverOnMyWay(requestBody)
        .then(function(response){

          if(response.status == 201){

            $rootScope.driver.states = response.data.states ;
            $scope.showOnMyWay = false;
            $location.path('/onMyWay');
            console.log($location.path());
          }
        });


    }

  });