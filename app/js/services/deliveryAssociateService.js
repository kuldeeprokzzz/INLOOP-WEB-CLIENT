inLoopApp.service('deliveryAssociateService', ['sharedProperties','$http', function(sharedProperties, $http){


	this.getArrivedVehiclesByDeliveryCenterId = function(deliveryCenterId){

        return $http.get(sharedProperties.getUrl()+'/contract_tasks/?status='+sharedProperties.getContractTaskType().arrived.type+'&delivery_centreid='+deliveryCenterId, { token : sharedProperties.getAuthToken})
        .then(function(response){
            return response;
        }, function(response){
            return response;
        });
    }

    this.getOnWayOrReturningContractByVehicleNumberPlate = function(licencePlateNumber){

        licencePlateNumber = '5432';
        return $http.get(sharedProperties.getUrl()+'/contracts/?status=ON_WAY&vehicle_regNumber='+licencePlateNumber+'&wildcard=true', { token : sharedProperties.getAuthToken})
        .then(function(response){
            return response;
        }, function(response){
            return response;
        });
    }


    this.updateContractTaskToCheckedIn = function(contractTaskId,requestBody){


        return $http({
                method: 'POST',
                url: sharedProperties.getUrl()+'/contract_tasks/'+contractTaskId+'/states/',
                headers: {token : sharedProperties.getAuthToken()},
                data: requestBody,

            }).success(function(response){
                return response;
            }).error(function(response){
                return response;
            });
    }

    this.getAllVehiclesByDeliveryCenterId = function(deliveryCenterId){
        /*cheched In , Assigned , assigned Job*/
        return $http.get(sharedProperties.getUrl()+'/contract_tasks/?status='+sharedProperties.getContractTaskType().checkedIn.type+','+sharedProperties.getContractTaskType().arrived.type+','+sharedProperties.getContractTaskType().assignedJob.type+'&delivery_centreid='+deliveryCenterId, { token : sharedProperties.getAuthToken})
        .then(function(response){
            return response;
        }, function(response){
            return response;
        });
    }

    this.getVehiclesByDeliveryCenterIdAndStates = function(deliveryCenterId,state){
        /*cheched In , Assigned , assigned Job*/
        return $http.get(sharedProperties.getUrl()+'/contract_tasks/?status='+state+'&delivery_centreid='+deliveryCenterId, { token : sharedProperties.getAuthToken})
        .then(function(response){
            return response;
        }, function(response){
            return response;
        });
    }

}])