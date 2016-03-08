inLoopApp.service('driverCardService', ['sharedProperties','$http', function(sharedProperties, $http){
	
	this.getVehicleInfo = function(licenseNumber, providerId){

		return $http({
	            method: 'GET',
	            url: sharedProperties.getUrl()+'/api/vi/providers/'+providerId+'/vehicles?regNumber='+licenseNumber+'&wildcard=true',
	            headers: {
	                token: sharedProperties.getAuthToken();
	            },
	            data: requestData
	        }).success(function (response) {
	            return response;
	        }).error(function (response) {
			    return response;
			});
       };

     this.createContract = function(){

     	var requestData = {
  			"providerid": 0,
  			"vehicleid": 0,
  			"driverid": 0,
  			"status": "ON_WAY",
    		"states": [
    		{
      			"id": 0,
      			"type": "ON_WAY",
      			"time": "26/02/2016 04:57:30",
      			"location": {
        			"longitude": 77.5936900,
        			"latitute": 12.9719400
      			},
      		"odometer": 87917,
      		"performed_by": "+919912123456"
    		}]
  		} 


     	return $http({
     		method: 'POST',
     		url: sharedProperties.getUrl()+'/api/v1/contracts/',
     		headers: {
     			token : sharedProperties.getAuthToken()
     		},
     		data: requestData
     	}).success(function(response){
     		return response;
     	}).error(function(response){
     		return response;
     	});
     };
}])




