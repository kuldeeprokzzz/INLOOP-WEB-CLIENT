inLoopApp.controller('loadManagerJobController', function ($scope,$timeout,$route, completeModel, loadManagerService, sharedProperties,localStorageService) {
    
    $scope.initialize = function(){

        $scope.jobTypes = sharedProperties.getJobsTypes();
        $scope.daMenu = sharedProperties.getdaMenu();
        if(completeModel.loadManager == undefined){
            completeModel = localStorageService.get('com');
        }
        if(completeModel.loadManager.profile.delivery_centreid != undefined){
            deliveryCenterId = completeModel.loadManager.profile.delivery_centreid;
        }else{
            completeModel.loadManager.profile.delivery_centreid = 5;
        }

        if(completeModel.loadManager.menuItem == undefined){
            completeModel.loadManager.menuItem = sharedProperties.getJobsTypes().unassigned.type;
        }

        $scope.lmMenu = sharedProperties.getJobsTypes();
        $scope.menuItem = completeModel.loadManager.menuItem;

        var deliveryCenterId = completeModel.loadManager.profile.delivery_centreid;
        var organizationid = completeModel.loadManager.profile.organizationid;

        loadManagerService.getTodaysJobsByDeliveryCenterIdShipperIdAndStatus(deliveryCenterId,organizationid,completeModel.loadManager.menuItem)
            .then(function(response){


                /*response.data = [
                {
                    'id':123,
                    'shipperid':1,
                    'delivery_centreid':1,
                    'job_date':'2016-03-30',
                    'name':'2016 03 30 - 123',
                    'contract_taskid':2,
                    'area':'Banerghatta Road',
                    'pincode':'560076',
                    'number_of_packages':55,
                    'status':'UNASSIGNED',
                    'tripid':null,
                    'latest_state':{},
                }];*/

                if(response.data.length != 0){
                    $scope.jobs = response.data;
                }else{
                    $scope.errorMessage = 'No Job Found';
                }
                
            });
    };


    $scope.clickJob = function(job){
        if(job.status == sharedProperties.getJobsTypes().unassigned.type){
            loadManagerService.getTodayCheckedInContractTaskByDeliveryCenterId(completeModel.loadManager.profile.delivery_centreid)
            .then(function(response){

                if(response.status == 200){
                    if(response.data.length != 0){
                        /*response.data = [{'id': 1,
                                'contractid':12,
                                'shipperid': 1,
                                'shipper_name': 'Amazon Transport Services',
                                'providerid': 0, 
                                'provider_name': 'GTrans Logistics Pvt. Ltd.',
                                'vehicleid': 1, 
                                'vehicle_regNumber':'KA04DS2328',
                                'vehicle_make': 'TATA ACE', 
                                'driverid':0,
                                'driver_name': 'Harilal Pande',
                                'driver_image':'http://54.169.251.56/media/drivers/harilal_pande.png',
                                'delivery_centreid': 5,
                                'delivery_centre_name': 'Jakkur Delivery Centre',
                                'status': 'CHECKED_IN',
                                'latest_state':{
                                    'id': 0,
                                    'type':'DISPATCHED',
                                    'time':'2016-03-19T08:20:00+0530',
                                    'location': {
                                        'longitude':77.59369,
                                        'latitude': 12.97194
                                    },
                                'odometer': 21345,
                                'performed_by':'+919012123456',
                                'jobid':null,
                                'tripid': null,
                            } } ];*/
                            completeModel.loadManager.clickedJob = job;
                            $scope.contracts = response.data;
                            angular.element('#modal').trigger('click');
                    }else{
                        alert('No Available Vehicle');
                        $scope.errorMessage = 'No Available Vehicle Found';
                    }
                }
                
            });
        }else{
            loadManagerService.getContractTaskByID(job.contract_taskid)
                .then(function(response){
                    if(response.status == 200){
                        completeModel.loadManager.clickedJob = job;
                        $scope.sendToAssignJob(response.data);
                    }
                });
        }

    }


    $scope.sendToAssignJob = function(contract){
        angular.element('#closeModal').trigger('click');
        $timeout(function(){
            completeModel.loadManager.contract = {};
            completeModel.loadManager.contract = contract;
            localStorageService.set('com',completeModel);
            sharedProperties.setPath('/assignJob');
        }, 500);
    };

    $scope.clickJobType = function(jobType){
        $scope.menuItem = jobType;
        completeModel.loadManager.menuItem = jobType;
        localStorageService.set('com',completeModel);
        $route.reload();
    };

    $scope.menuClicked = function(item){
        $scope.menuItem = item;
        completeModel.loadManager.menuItem = item;
        localStorageService.set('com',completeModel);
        sharedProperties.setPath('/lmDrivers');
    };

    $scope.$watch(function(){
            return completeModel;
        }, function (newValue) {
            localStorageService.set('com',newValue);
        });


  });