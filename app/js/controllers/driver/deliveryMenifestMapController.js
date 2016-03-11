inLoopApp.controller('deliveryMenifestMapController', function ($scope,$filter, completeModel, driverService, sharedProperties) {

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
        $scope.driver.showReturningButton = true;
        $scope.driver.showMessage =  false;
        $scope.driver.message = '';
    };

    $scope.returnToCenter = function(){

      var body = {
                  "providerid": $scope.driver.organizationid,
                  "vehicleid": $scope.driver.vehicleProfile.id,
                  "driverid": $scope.driver.id,
                  "status": sharedProperties.getContractStatusType().onWay.type,
                    "states": [
                    {
                      "id": sharedProperties.getContractStatusType().onWay.id,
                      "type": sharedProperties.getContractStatusType().onWay.type,
                      "time": $filter("date")(Date.now(), 'dd/MM/yyyy HH:mm:ss'),
                      "location": {
                        "longitude": 77.5936900,
                        "latitute": 12.9719400
                      },
                      "odometer": 87917,
                      "performed_by": $scope.driver.username,
                    }]
                  };

                  driverService.driverOnMyWay(body)
          .then(function(response){
            if(response.status == 201){
              $scope.driver.showReturningButton = false;
              $scope.driver.message = 'RETURN TO CENTER';
              $scope.driver.showMessage = true;
              completeModel.driver.contract = {};
              completeModel.driver.contract = response.data;
            }else{

            }
      });

    };

  });