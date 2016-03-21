inLoopApp
  .controller('driverOnWayController', function ($scope,$filter, completeModel, driverService, sharedProperties) {

    $scope.initialize = function(){
      // initializing scope
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

        completeModel.contractTask = {};
        $scope.contractTask = {};

        completeModel.deliveryCenter = {};
        $scope.deliveryCenter = {};
    };

    // Calling this function when ON THE WAY button is pressed
    $scope.submitOnMyWay = function(){

      $scope.driver.tempTime = $filter("date")(Date.now(), 'dd/MM/yyyy HH:mm:ss');

      // getting contract task corresponding ro vehice number and driver id
      driverService.getContractTaskByVehicleLicencePlateAndDriverId($scope.driver.id,$scope.driver.licensePlateNumber)
        .then(function(response){
          if(response.status == 200){
            completeModel.contractTask = response.data[0]; // updating contract task in model
            $scope.contractTask = completeModel.contractTask;

            var requestBody = {
              "type": sharedProperties.getContractTaskType().dispatched.type,
              "time": '2016-03-19T08:14:00+0530',
              "location": {
                "longitude":77.59369,
                "latitude": 12.97194
              }, 
                "odometer": 17334,
              "performed_by": $scope.driver.username,
            };

            // updating contract task state to DISPATCHED via http call
            driverService.updataContractStateToDispatched($scope.contractTask.id,requestBody)
            .then(function(response){
              if(response.status == 201){
                // getting delivery center details by contract task id
                driverService.getDeliveryCenterDetails($scope.contractTask.shipperid,$scope.contractTask.delivery_centreid)
                  .then(function(response){
                    // on success , directing to next page
                    completeModel.deliveryCenter = response.data;
                    sharedProperties.setPath('/onWayDone');
                  });
              }
            });
          }
        });
      }
  });