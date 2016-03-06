inLoopApp.service('sharedProperties',function($location){
 
  
        this._baseURL = 'http://54.169.251.56:10010/api/v1';
          
        this._authToken = '';

        this.roles = {

                driver : 0,
                deliveryAssociate : 2,
                loadManager : 3,

            };       

        this.contractStatusType = {

            onWay : { type : 'ON_WAY', id : 0},
            
        };

    
 
    
        this.getUrl = function(){
            return this._baseURL;
        };

        this.getAuthToken = function(){
            return this._authToken;
        };

        this.setAuthToken = function(token){
            this._authToken = token;
        };
        
        this.setPath = function (path) {
            return $location.path(path);
        }
        


}); 