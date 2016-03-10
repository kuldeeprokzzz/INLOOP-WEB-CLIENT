inLoopApp.controller('loadManagerJobController', function ($scope, completeModel, loadManagerService, sharedProperties) {
    
    $scope.initializeJobs = function(){

        if(completeModel.loadManager.itemClicked == undefined){
            completeModel.loadManager.itemClicked = sharedProperties.getJobsTypes().unassigned.id;
        }

        
        var response = loadManagerService.getAllJobsByDeliveryCenterIdCenterId(1);
            
        var jobs = [];

                angular.forEach(response, function(value, key) {
                    if(value.jobType == completeModel.loadManager.itemClicked){
                        this.push(value);
                    }
                }, jobs);

                $scope.jobs = jobs;

    };


    $scope.clickJobType = function(jobType){
        completeModel.loadManager.itemClicked = jobType;
        var response = loadManagerService.getAllJobsByDeliveryCenterIdCenterId(1);
            
        var jobs = [];

                angular.forEach(response, function(value, key) {
                    if(value.jobType == completeModel.loadManager.itemClicked){
                        this.push(value);
                    }
                }, jobs);

                $scope.jobs = jobs;
    }


    $scope.clickUnassignedJob = function(job){
        if(completeModel.loadManager.itemClicked==0){
        
        loadManagerService.getAllAvailableDriversByDeliveryCenterId(1)
            .then(function(response){
                completeModel.loadManager.job = job;
                $scope.contracts = response.data;
                angular.element('#modal').trigger('click');
            });
/*        angular.element('#myModal').click();*/

        /*document.getElementById('#myModal').click()*/
        
        }
    }

    $scope.sendToAssignJob = function(contract){
        angular.element('#closeModel').trigger('click');
        completeModel.loadManager.contract = {};
        completeModel.loadManager.contract = contract;

        sharedProperties.setPath('assignJob');
    };

  });