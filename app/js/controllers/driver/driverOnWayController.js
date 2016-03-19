inLoopApp
  .controller('driverOnWayController', function ($scope,$filter, completeModel, driverService, sharedProperties) {

    $scope.initialize = function(){

        $scope.driver = completeModel.driver;
        $scope.driver.driverName = $scope.driver.first_name + " " + $scope.driver.middle_name+ " " + $scope.driver.last_name;
        $scope.driver.providerName = $scope.driver.organization_name;
        $scope.driver.licensePlateNumber = $scope.driver.vehicleProfile.regNumber;
        $scope.driver.vehicleModelName = $scope.driver.vehicleProfile.model;
        $scope.driver.errorMessage = '';
        $scope.driver.tempTime = "";
        $scope.driver.showOnWayButton = true;
        $scope.driver.showMessage =  false;
        $scope.driver.message = '';
    };


    $scope.submitOnMyWay = function(){

      $scope.driver.tempTime = $filter("date")(Date.now(), 'dd/MM/yyyy HH:mm:ss');

      var body = {
                  "providerid": $scope.driver.organizationid,
                  "vehicleid": $scope.driver.vehicleProfile.id,
                  "driverid": $scope.driver.id,
                  "status": sharedProperties.getContractStatusType().onWay.type,
                    "states": [
                    {
                      "id": sharedProperties.getContractStatusType().onWay.id,
                      "type": sharedProperties.getContractStatusType().onWay.type,
                      "time": $scope.driver.tempTime,
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
              $scope.driver.showOnWayButton = false;
              $scope.driver.message = 'ON THE WAY';
              $scope.driver.showMessage = true;
              completeModel.driver.contract = {};
              completeModel.driver.contract = response.data;
            }else{

            }
      });

    }


    $scope.next = function(){

        sharedProperties.setPath('/iotDetected');
    };

  });