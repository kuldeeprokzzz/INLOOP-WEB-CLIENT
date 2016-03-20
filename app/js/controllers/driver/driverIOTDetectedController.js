inLoopApp
  .controller('driverIOTDetectedController', function ($scope,$filter, completeModel, driverService, sharedProperties) {

    $scope.initialize = function(){

        $scope.contractTask =  completeModel.contractTask;
        $scope.driver = completeModel.driver;

        var requestBody = {
              "type": sharedProperties.getContractTaskType().arrived.type,
              "time": '2016-03-19T08:14:00+0530',
              "location": {
                "longitude":77.59369,
                "latitude": 12.97194
              }, 
                "odometer": 17334,
              "performed_by": $scope.driver.username,
            };


        driverService.updataContractStateToIOTDetected($scope.contractTask.id,requestBody)
        	.then(function(response){
        		if(response.status == 201){
        			completeModel.contractTask = response.data[0];
        			$scope.contractTask =  completeModel.contractTask;

        			$scope.driver.driverName = $scope.driver.first_name + " " + $scope.driver.middle_name+ " " + $scope.driver.last_name;
			        $scope.driver.providerName = $scope.driver.organization_name;
			        $scope.message = 'IOT Detected';
        		}else{
        			sharedProperties.setPath('/onWayDone');
        		}
        	});
    };
  });