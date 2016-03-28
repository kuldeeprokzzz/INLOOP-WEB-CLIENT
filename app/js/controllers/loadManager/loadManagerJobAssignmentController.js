inLoopApp.controller('loadManagerJobAssignmentController', function ($scope, completeModel,localStorageService, loadManagerService, sharedProperties){
    
    $scope.initialize = function(){
        if(completeModel.loadManager == undefined){
            completeModel = localStorageService.get('com');
        }

            $scope.contratTaskType = sharedProperties.getContractTaskType();
        if(completeModel.loadManager.clickedJob != undefined && completeModel.loadManager.contract != undefined){
            $scope.driver = {};
            $scope.driver.driverName = completeModel.loadManager.contract.driver_name;
            $scope.driver.providerName = completeModel.loadManager.contract.provider_name;
            $scope.driver.image =completeModel.loadManager.contract.driver_image;
            $scope.driver.licensePlateNumber = completeModel.loadManager.contract.vehicle_regNumber;
            $scope.driver.vehicleModelName = completeModel.loadManager.contract.vehicle_make;
            $scope.driver.odometer = completeModel.loadManager.contract.latest_state.odometer;
            $scope.driver.time = sharedProperties.getTimeFromUTCDateTime(completeModel.loadManager.contract.latest_state.time);
            

            $scope.jobId = completeModel.loadManager.clickedJob.id;
            $scope.jobTime = sharedProperties.getTimeFromUTCDateTime(new Date());
            $scope.area = completeModel.loadManager.clickedJob.area;
            $scope.packages = completeModel.loadManager.clickedJob.number_of_packages;
            $scope.driver.odometer = completeModel.loadManager.contract.latest_state.odometer;
        }

    };

    $scope.assignJobToContract = function(){

        loadManagerService.updateJobToAssigned(completeModel.loadManager.clickedJob.id,completeModel.loadManager.profile.username)
        .then(function(response){
            if(response.status == 201){
                var vehicleId = completeModel.loadManager.contract.vehicleid;
                var driverId = completeModel.loadManager.contract.driverid;
                var contractTaskId = completeModel.loadManager.contract.id;
                var jobId = completeModel.loadManager.clickedJob.id;
                var odometerDeviceId = 1;

                loadManagerService.createTripForJob(vehicleId,driverId,contractTaskId,jobId,odometerDeviceId)
                .then(function(response){
                    if(response.status == 201){
                        /*response.data = {
                                          'id': 0,
                                          'vehicleid': 0,
                                          'driverid': 0,
                                          'contract_taskid': 0,
                                          'jobid': 0,
                                          'odometer_deviceid': 0,
                                          'latest_state': {
                                            'id': 0,
                                            'type': 'string',
                                            'time': 'string',
                                            'location': {
                                              'longitude': 0,
                                              'latitude': 0
                                            },
                                            'odometer': 0,
                                            'performed_by': 'string'
                                          },
                                          'manifestid': 0,
                                          'status': 'string',
                                          'trip_date': 'string'
                                        };
*/
                        var tripId = response.data.id;

                        loadManagerService.updateTripToJob(jobId,contractTaskId,tripId)
                        .then(function(response){
                            if(response.status == 201){

                                var requestBody = {
                                                    'id': 1,
                                                    'type': 'ASSIGNED_JOB',
                                                    'time': '2016-03-19T08:20:00+0530',
                                                    'location': {
                                                    'longitude': 77.59369,
                                                    'latitude': 12.97194
                                                    },
                                                    'odometer': 21346,
                                                    'performed_by': 'abcdefg@gmail.com',
                                                    'jobid' : 123,
                                                    'tripid': 13
                                                   };

                                loadManagerService.updateTaskToAssingedJob(contractTaskId,requestBody)
                                .then(function(response){
                                    if(response.status == 201){
                                        completeModel.loadManager.menuItem = sharedProperties.getJobsTypes().assigned.type;
                                        localStorageService.set('com',completeModel);
                                        sharedProperties.setPath('/jobsList');
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });

    };

    $scope.backButton = function(){
        completeModel.loadManager.job = undefined;
        completeModel.loadManager.contract != undefined;
        localStorageService.set('com',completeModel);
        sharedProperties.setPath('/jobsList');
    };

    $scope.$watch(function(){
            return completeModel;
        }, function (newValue) {
            localStorageService.set('com',newValue);
    });

  });