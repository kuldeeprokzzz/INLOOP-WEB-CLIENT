inLoopApp.service('loadManagerService', ['sharedProperties','$http', function(sharedProperties, $http){


	this.getAllJobsByDeliveryCenterIdCenterId = function(deliveryCenterId){


        var response = [
      {
        jobId : 'Amazon 11827',
        jobType : 0,
        route : 'Banargatta Road',
        packages : 43
      },
      {

        jobId : 'Amazon 11738',
        jobType : 0,
        route : 'Karol Bagh',
        packages : 43
      },
      {
        jobId : 'Amazon 11993',
        jobType : 0,
        route : 'Kalka ji',
        packages : 43
      },
      {
        jobId : 'Amazon 11122',
        jobType : 1,
        route : 'Nehru Place',
        packages : 43
      },
      {
        jobId : 'Amazon 12245',
        jobType : 1,
        route : 'Okhla Phase II',
        packages : 43
      },
      {
        jobId : 'Amazon 12264',
        jobType : 1,
        route : 'Sona Road',
        packages : 43
      },
      {
        jobId : 'Amazon 17736',
        jobType : 1,
        route : 'DLF Phase 2',
        packages : 43
      },
      {
        jobId : 'Amazon 155746',
        jobType : 2,
        route : 'SuperMart-I',
        packages : 43
      },
      {
        jobId : 'Amazon 19374',
        jobType : 2,
        route : 'Oakwood Estate',
        packages : 43
      },
    ];


        return response;
    };


    


this.getTodaysJobsByDeliveryCenterIdShipperIdAndStatus = function(deliveryCenterId,shipperId,status){
        shipperId = 1;
        var today = 'today'; // sharedProperties.getTodayDate()
        return $http.get(sharedProperties.getUrl()+'/jobs?job_date='+today+'&delivery_centreid='+deliveryCenterId+'&shippered='+shipperId+'&status='+status, { token : sharedProperties.getAuthToken()})
        .then(function(response){
            return response;
        }, function(response){
            return response;
        });
    }

this.getTodayCheckedInContractTaskByDeliveryCenterId = function(deliveryCenterId){

        var today = 'today'; // sharedProperties.getTodayDate()

        return $http.get(sharedProperties.getUrl()+'/contract_tasks/?status='+sharedProperties.getContractTaskType().checkedIn.type+'&delivery_centreid='+deliveryCenterId+'&task_date='+today, { token : sharedProperties.getAuthToken()})
        .then(function(response){
            return response;
        }, function(response){
            return response;
        });
} 

this.updateJobToAssigned = function(jobId,performedBy){

        var requestBody = {
                           "type": sharedProperties.getJobsTypes().assigned.type,
                           "time": sharedProperties.getTodatUTCDateTime(),
                           "performed_by": performedBy,
                           };

        return $http.post(sharedProperties.getUrl()+'/jobs/'+jobId+'/states',requestBody,{ token : sharedProperties.getAuthToken()})
        .then(function(response){
            return response;
        }, function(response){
            return response;
        });
}

this.createTripForJob = function(vehicleId,driverId,contractTaskId,jobId,odometerDeviceId){

        var requestBody = {
                            'vehicleid' : vehicleId,
                            'driverid': driverId,
                            'contract_taskid': contractTaskId,
                            'jobid': jobId, 
                            'odometer_deviceid':odometerDeviceId,
                          };

        return $http.post(sharedProperties.getUrl()+'/trips',requestBody,{ token : sharedProperties.getAuthToken()})
        .then(function(response){
            return response;
        }, function(response){
            return response;
        });
}

this.updateTripToJob = function(jobId,contractTaskId,tripId){

        var requestBody = {
                            'contract_taskid': contractTaskId,
                            'tripid': tripId,
                          };

        return $http.put(sharedProperties.getUrl()+'/jobs/'+jobId+'/',requestBody,{ token : sharedProperties.getAuthToken()})
        .then(function(response){
            return response;
        }, function(response){
            return response;
        });
}

this.updateTaskToAssingedJob = function(contractTaskId,requestBody){

        return $http.post(sharedProperties.getUrl()+'/contract_tasks/'+contractTaskId+'/states',requestBody,{ token : sharedProperties.getAuthToken()})
        .then(function(response){
            return response;
        }, function(response){
            return response;
        });
}

this.getContractTaskByID = function(contractTaskId){

        return $http.get(sharedProperties.getUrl()+'/contract_tasks/'+contractTaskId,{ token : sharedProperties.getAuthToken()})
        .then(function(response){
            return response;
        }, function(response){
            return response;
        });
}

}])