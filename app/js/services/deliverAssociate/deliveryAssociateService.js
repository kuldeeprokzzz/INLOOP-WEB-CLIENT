inloopApp.service('deliveryAssociateService', ['sharedProperties','$http', function(sharedProperties,$http){

	this.createCheckInContract = function(requestData, contractId){

    	return $http({
        	method: 'PUT',
        	url: sharedProperties.getUrl() + '/api/v1/contracts/' + contractId,
        	headers: {token: sharedProperties.getAuthToken()},
        	data: requestData

		}).success(function (response) {
    		return response;
		}).error(function (response) {
    		return response;
		});
	};


	this.getAvailableVehicles = function (status, deliveryCentreId) {

    	return $http({
        	method: 'GET',
        	url: sharedProperties.getUrl() + '/api/v1/contracts/?status=' + status + '&delivery_centerid=' + deliveryCentreId,
        	headers: { token: sharedProperties.getAuthToken() }
        	
    	}).success(function (response) {
        	return response;
    	}).error(function (response) {
        	return response;
    	});
	};

	this.getApproachingVehicles = function (status, licenseNumber) {

    	return $http({
        	method: 'GET',
        	url: sharedProperties.getUrl() + '/api/v1/contracts/?status=' + status + '&vehicle_regNumber=' + licenseNumber +'&wildcard=true',
        	headers: { token: sharedProperties.getAuthToken() },
        	data: requestData
    	}).success(function (response) {
        	return response;
    	}).error(function (response) {
        	return response;
    	});
	};
	
}])