inLoopApp.controller('loadManagerJobAssignmentController', function ($scope, completeModel, loadManagerService, sharedProperties) {
    
    $scope.initializeJobAssignment = function(){

        if(completeModel.loadManager.itemClicked == 0 && completeModel.loadManager.job != undefined && completeModel.loadManager.contract != undefined){
            $scope.driverName = completeModel.loadManager.contract.driver_name;
            $scope.providerName = completeModel.loadManager.contract.provider_name;
            $scope.licenceNumber = completeModel.loadManager.contract.vehicle_regNumber;
            $scope.model = completeModel.loadManager.contract.vehicle_make;
            $scope.odometerReading = completeModel.loadManager.contract.states[1].odometer;
            $scope.time = completeModel.loadManager.contract.states[1].time;
            
            $scope.jobId = completeModel.loadManager.job.jobId;
            $scope.jobTime = '5:30 pm'
            $scope.route = completeModel.loadManager.job.route;
            $scope.packages = completeModel.loadManager.job.packages;
        }

    };

    $scope.backButton = function(){
        completeModel.loadManager.itemClicked = undefined;
        completeModel.loadManager.job = undefined;
        completeModel.loadManager.contract != undefined;
        sharedProperties.setPath('/jobsList');
    }

  });