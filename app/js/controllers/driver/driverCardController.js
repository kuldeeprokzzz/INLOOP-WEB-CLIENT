inLoopApp.controller('driverCardController', function ($scope, completeModel) {
    
    $scope.initializeDriver = function(){

        $scope.driver = completeModel.driver;
        var middleName = $scope.driver.middle_name + " ";
        $scope.driver.driverName = $scope.driver.first_name + " " + middleName + $scope.driver.last_name;
        $scope.driver.providerName = $scope.driver.organization_name;
    };


    $scope.onLicenceKeyPress = function(){
        /*callRemoteService.getVehicleProfile($rootScope.driver.providerId,$rootScope.driver.providerId)
          .then(function(response){

            $scope.responseData = response.data;
            $scope.licensePlateNumber = ($scope.responseData)[0].regNumber;
            $scope.model = ($scope.responseData)[0].model;
            $scope.vehicleImage = ($scope.responseData)[0].vehicleImage;
      });*/
    };


  	$scope.addLicencePlate = function(){
        var n = $scope.driver.licensePlateNumber;
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