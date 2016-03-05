inLoopApp.service('sharedProperties',function(){
 
  
        var _baseURL = 'http://54.169.251.56:10010/api/v1';
          
        var _authToken = '';

        roles = {

                driver : 0,
                deliveryAssociate : 2,
                loadManager : 3,

            };       

        contractStatusType = {

            onWay : { type : 'ON_WAY', id : 0},
            
        };

    
 
    
        this.getUrl = function(){
                return _baseURL;
        };

        this.getAuthToken = function(){
          return _authToken;
        };

        this.setAuthToken = function(token){
          _authToken = token;
        };
        


}); 