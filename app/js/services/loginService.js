inLoopApp.service('loginService', ['sharedProperties','$http', function(sharedProperties, $http){
	
	this.getLoginToken = function(userName, password){

		var requestData = {
	    	"username": userName,
  			"password": password,
	    };

	    return $http({
	            method: 'POST',
	            url: sharedProperties.getUrl()+'/login',
	            headers: {
	                'Content-Type': 'application/json'
	            },
	            data: requestData
	        }).success(function (response) {
	            return response;
	        }).error(function (response) {
			    return response;
			});
       };

     this.getProfile = function(){
     	return $http({
     		method: 'GET',
     		url: sharedProperties.getUrl()+'/profiles/me',
     		headers: {
     			token : sharedProperties.getAuthToken()
     		}
     	}).success(function(response){
     		return response;
     	}).error(function(response){
     		return response;
     	});
     };
}])




