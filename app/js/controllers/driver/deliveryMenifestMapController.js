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
                    "shipperid": $scope.contract.shipperid,
                    "delivery_centreid": $scope.contract.delivery_centreid,
                    "status": sharedProperties.getContractStatusType().returning.type,
                  "states":[
                      {
                        "id": sharedProperties.getContractStatusType().returning.id,
                        "type": sharedProperties.getContractStatusType().returning.type,
                        "time": $filter("date")(Date.now(), 'dd/MM/yyyy HH:mm:ss'),
                        "location": {
                          "longitude": 77.5936910,
                          "latitute": 12.9719410
                        },
                        "odometer": 21355,
                        "performed_by": $scope.driver.username,
                      }]
                  };

          driverService.driverReturningTOCenter($scope.contract.id,body)
          .then(function(response){
            if(response.status == 200){
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