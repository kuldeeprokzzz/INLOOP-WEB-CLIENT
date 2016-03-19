inLoopApp.service('driverService', ['sharedProperties','$http', function(sharedProperties, $http){


	this.getVehicleProfile = function(providerId,licensePlateNumber){

    	return $http({
                method: 'GET',
                url: sharedProperties.getUrl()+'/providers/'+providerId+'/vehicles?regNumber='+licensePlateNumber+'&wildcard=true',
                headers: { token : sharedProperties.getAuthToken()}

                }).success(function(response){
                    return response;
                }).error(function(response){
                    return response;
                });
    }

    this.driverOnMyWay = function(requestData){

    	return $http({
                method: 'POST',
                url: sharedProperties.getUrl()+'/contracts/',
                headers: {token : sharedProperties.getAuthToken()},
                data: requestData

            }).success(function(response){
                return response;
            }).error(function(response){
    			return response;
    		});
    }

    this.getContractDetailsByContractId = function(contractId){
        return $http({
                method: 'GET',
                url: sharedProperties.getUrl()+'/contracts/'+contractId,
                headers: { token : sharedProperties.getAuthToken()}

                }).success(function(response){
                    return response;
                }).error(function(response){
                    return response;
                });

    }

    this.driverReturningTOCenter = function(contractId,requestData){

        return $http({
                method: 'PUT',
                url: sharedProperties.getUrl()+'/contracts/'+contractId,
                headers: {token : sharedProperties.getAuthToken()},
                data: requestData

            }).success(function(response){
                return response;
            }).error(function(response){
                return response;
            });
    }

}])