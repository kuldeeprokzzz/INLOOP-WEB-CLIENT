angular.module('inloopYeomanApp')
.service('callRemoteService', function($rootScope,$http) {
    

    

    this.signInService = function (username,password) {

    	return $http.post($rootScope.baseURL+'/login',{"username": username,"password": password})
		        .then(function(response) {

		            return response;
				    	
		    	},function(response){

		    		return response;
		    	});

    }

    this.getDriverProfile = function(){

    	return $http.get($rootScope.baseURL+'/profiles/me',{token : $rootScope.authenticationToken})
		    	.then(function(response){
		    		return response;
		    	},function(){
		    		return response;
		    	});
    }

});