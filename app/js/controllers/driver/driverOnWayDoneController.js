inLoopApp
  .controller('driverOnWayDoneController', function ($scope,$filter, completeModel, driverService, sharedProperties) {

    $scope.initialize = function(){

        $scope.driver = completeModel.driver;
        $scope.driver.driverName = $scope.driver.first_name + " " + $scope.driver.middle_name+ " " + $scope.driver.last_name;
        $scope.driver.providerName = $scope.driver.organization_name;
        $scope.message = 'On My Way';

        $scope.contractTask = completeModel.contractTask;

        $scope.deliveryCenter = completeModel.deliveryCenter;
    };

  });