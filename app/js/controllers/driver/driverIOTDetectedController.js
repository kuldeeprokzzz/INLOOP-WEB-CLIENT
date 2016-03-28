inLoopApp
  .controller('driverIOTDetectedController', function ($scope,$filter, completeModel, driverService, sharedProperties) {

    $scope.initialize = function(){

      // initializing scope
        $scope.contractTask =  completeModel.contractTask;
        $scope.driver = completeModel.driver;

        var requestBody = {
              "type": sharedProperties.getContractTaskType().arrived.type,
              "time": sharedProperties.getTodatUTCDateTime(),
              "location": {
                "longitude":77.59369,
                "latitude": 12.97194
              }, 
                "odometer": 17334,
              "performed_by": $scope.driver.username,
            };

        // updating contract task to ARRIVED by http call
        driverService.updataContractStateToIOTDetected($scope.contractTask.id,requestBody)
        	.then(function(response){
        		if(response.status == 201){
              // updating model and scope for updated contract task
        			completeModel.contractTask = response.data[0];
        			$scope.contractTask =  completeModel.contractTask;

        			$scope.driver.driverName = $scope.driver.first_name + " " + $scope.driver.middle_name+ " " + $scope.driver.last_name;
			        $scope.driver.providerName = $scope.driver.organization_name;
			        $scope.message = 'IOT Detected';
        		}else{
              // in case of failure send to previous view
        			//sharedProperties.setPath('/onWayDone');
        		}
        	});
    };
  });