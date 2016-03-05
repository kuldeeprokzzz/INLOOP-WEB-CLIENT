inLoopApp.controller('driverCardController', function ($scope, completeModel) {
    
    $scope.getDriverName = function(){
         var middleName = completeModel.driver.middle_name + " ";
         return completeModel.driver.first_name + " " + middleName + completeModel.driver.last_name;
    }

    $scope.driverName = $scope.getDriverName();
    $scope.providerName = completeModel.driver.organization_name;
    
    

    $scope.OnLicenceKeyPress = function(){
        /*callRemoteService.getVehicleProfile($rootScope.driver.providerId,$rootScope.driver.providerId)
          .then(function(response){

            $scope.responseData = response.data;
            $scope.licensePlateNumber = ($scope.responseData)[0].regNumber;
            $scope.model = ($scope.responseData)[0].model;
            $scope.vehicleImage = ($scope.responseData)[0].vehicleImage;
      });*/
    }


  	$scope.addLicencePlate = function(){
    
        //   callRemoteService.getVehicleProfile($rootScope.driver.providerId,$rootScope.driver.providerId)
        //   .then(function(response){
        //     alert('1')*/

        //     $rootScope.driver.licensePlateNumber = $scope.licensePlateNumber;
        //     $rootScope.driver.model = ($scope.responseData)[0].model;
        //     $rootScope.driver.vehicleImage = ($scope.responseData)[0].vehicleImage;
        //     $rootScope.driver.vehicleId = ($scope.responseData)[0].id;
        //     $rootScope.driver.vehicleMake = ($scope.responseData)[0].make;

        //     $location.path('/onMyWay');
        //     console.log($location.path());
        };

  });