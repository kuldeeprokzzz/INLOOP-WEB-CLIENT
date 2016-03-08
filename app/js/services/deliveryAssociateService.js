inLoopApp.service('deliveryAssociateService', ['sharedProperties','$http', function(sharedProperties, $http){


	this.getAllVehiclesByDeliveryCenterId = function(deliveryCenterId){

        return $http.get(sharedProperties.getUrl()+'/contracts/?status=CHECKED_IN&delivery_centreid='+deliveryCenterId, { token : sharedProperties.getAuthToken})
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


    this.checkinVelicleByContractId = function(contractId,requestBody){

        return $http.put(sharedProperties.getUrl()+'/contracts/'+contractId, requestBody ,{ token : sharedProperties.getAuthToken})
        .then(function(response){
            return response;
        }, function(response){
            return response;
        });
    }

}])