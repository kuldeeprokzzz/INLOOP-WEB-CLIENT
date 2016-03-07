inLoopApp.service('driverService', ['sharedProperties','$http', function(sharedProperties, $http){


	this.getVehicleProfile = function(providerId,licensePlateNumber){

    	return $http.get(sharedProperties.getUrl()+'/providers/'+providerId+'/vehicles?regNumber='+licensePlateNumber+'&wildcard=true', { token : sharedProperties.getAuthToken})
        .then(function(response){
            return response;
        }, function(response){
            return response;
        });
    }

    this.driverOnMyWay = function(requestBody){

    	return $http.post($rootScope.baseURL+'/contracts/',requestBody,{token : $rootScope.authenticationToken})
    			.then(function(response){

    				return response;

    			},function(response){

    				return response;
    				
    			});
    }

}])