inLoopApp
  .controller('driverOnWayController', function ($scope, completeModel, driverService, sharedProperties) {

    $scope.initializeDriver = function(){

        $scope.driver = completeModel.driver;
        $scope.driver.driverName = $scope.driver.first_name + " " + $scope.driver.middle_name+ " " + $scope.driver.last_name;
        $scope.driver.providerName = $scope.driver.organization_name;
        $scope.driver.licensePlateNumber = $scope.driver.vehicleProfile.regNumber;
        $scope.driver.errorMessage = '';
    };


    $scope.submitOnMyWay = function(){

    }

  });