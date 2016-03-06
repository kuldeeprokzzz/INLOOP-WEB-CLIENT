angular.module('inloopApp')
.service('callRemoteService', function($rootScope,$http) {


    this.getVehicleProfile = function(providerId,licensePlateNumber){

    	return $http.get($rootScope.baseURL+'/providers/'+providerId+'/vehicles?regNumber='+licensePlateNumber+'&wildcard=true',{token : $rootScope.authenticationToken})
    			.then(function(response) {

		            return response;
				    	
		    	},function(response){

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



});