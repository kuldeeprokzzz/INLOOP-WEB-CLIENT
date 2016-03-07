inLoopApp.service('sharedProperties',function($location){
 
  
        this._baseURL = 'http://54.169.251.56:10010/api/v1';
          
        this._authToken = '';

        this._roles = {

                driver : 0,
                deliveryAssociate : 2,
                loadManager : 3,

            };       

        this._contractStatusType = {

            onWay : {id : 0,type : 'ON_WAY'},
            
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
        };

        this.getContractStatusType = function(){
            return this._contractStatusType;
        };
}); 