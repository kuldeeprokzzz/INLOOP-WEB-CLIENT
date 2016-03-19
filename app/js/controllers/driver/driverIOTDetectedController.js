inLoopApp
  .controller('driverIOTDetectedController', function ($scope,$filter, completeModel, driverService, sharedProperties) {

    $scope.initialize = function(){

        $scope.contractTask =  completeModel.contractTask;
        $scope.driver = completeModel.driver;

        $scope.driver.driverName = $scope.driver.first_name + " " + $scope.driver.middle_name+ " " + $scope.driver.last_name;
        $scope.driver.providerName = $scope.driver.organization_name;
        $scope.message = 'IOT Detected';

    };
  });