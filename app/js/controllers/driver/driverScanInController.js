inLoopApp.controller('driverScanInController', function ($scope,$filter, completeModel, driverService, sharedProperties) {

    $scope.initialize = function(){

        $scope.count = 38;
        $scope.packages = 44;

        $scope.contract =  completeModel.driver.contract;
        driverService.getContractDetailsByContractId($scope.contract.id)
            .then(function(response){
                completeModel.driver.contract = response.data;
            });

        $scope.contract =  completeModel.driver.contract;
        $scope.driver = completeModel.driver;
        $scope.driver.driverName = $scope.driver.first_name + " " + $scope.driver.middle_name+ " " + $scope.driver.last_name;
        $scope.driver.providerName = $scope.driver.organization_name;
        $scope.driver.licensePlateNumber = $scope.driver.vehicleProfile.regNumber;
        $scope.driver.vehicleModelName = $scope.driver.vehicleProfile.model;
        $scope.driver.errorMessage = '';
        $scope.driver.tempTime = "";
        $scope.driver.showOnWayButton = false;
        $scope.driver.showMessage =  true;
        $scope.driver.message = 'Checked In';
    };

    $scope.startScaningIn = function(){

        $scope.count = $scope.count + 1;
        if($scope.count == $scope.packages){
            completeModel.packages = 44;
            completeModel.count = 5;
            sharedProperties.setPath('/deliveryMenifestMap');
        }
    };

  });