inLoopApp.service('driverService', ['sharedProperties','$http', function(sharedProperties, $http, $filter){


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

    /*These API's were meant for contract , NEED TO BE DELETED*/

    /*this.driverOnMyWay = function(requestData){

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
    }*/

    /*this.getContractDetailsByContractId = function(contractId){
        return $http({
                method: 'GET',
                url: sharedProperties.getUrl()+'/contracts/'+contractId,
                headers: { token : sharedProperties.getAuthToken()}

                }).success(function(response){
                    return response;
                }).error(function(response){
                    return response;
                });

    }*/

/*    this.driverReturningTOCenter = function(contractId,requestData){

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
    }*/

    this.getTodayContractTaskByVehicleLicencePlateAndDriverId = function(driverId,vehicleRegNumber){
        return $http({
                method: 'GET',
                url: sharedProperties.getUrl()+'/contract_tasks/?driverid='+driverId+'&vehicle_regNumber='+vehicleRegNumber+'&task_date='+sharedProperties.getTodayDate(),
                headers: { token : sharedProperties.getAuthToken()},

                }).success(function(response){
                    return response;
                }).error(function(response){
                    return response;
                });

    }

    this.updataContractStateToDispatched = function(contractTaskId,requestData){
        return $http({
                method: 'POST',
                url: sharedProperties.getUrl()+'/contract_tasks/'+contractTaskId+'/states/',
                headers: { token : sharedProperties.getAuthToken()},
                data: requestData,
                }).success(function(response){
                    return response;
                }).error(function(response){
                    return response;
                });

    }

    this.updataContractStateToIOTDetected = function(contractTaskId,requestData){
        return $http({
                method: 'POST',
                url: sharedProperties.getUrl()+'/contract_tasks/'+contractTaskId+'/states/',
                headers: { token : sharedProperties.getAuthToken()},
                data: requestData,
                }).success(function(response){
                    return response;
                }).error(function(response){
                    return response;
                });

    }

    this.getDeliveryCenterDetails = function(shipperId,deliveryCenterId){
    return $http({
            method: 'GET',
            url: sharedProperties.getUrl()+'/shippers/'+shipperId+'/deliveryCentres/'+deliveryCenterId,
            headers: { token : sharedProperties.getAuthToken()}

            }).success(function(response){
                return response;
            }).error(function(response){
                return response;
            });

    }

}])