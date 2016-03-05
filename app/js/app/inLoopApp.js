
var inLoopApp = angular
  .module('inLoopApp', [ 'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'loginController'
      })
      .when('/licensePlate', {
        templateUrl: 'views/driver/licensePlate.html',
        controller : 'driver_LicencePlate_Ctrl'
      })
      .when('/onMyWay', {
        templateUrl: 'views/driver/onMyWay.html',
        controller : 'driver_OnMyWay_Ctrl'
        
      })
      .when('/checkIn', {
        templateUrl: 'views/delivery_associate/checkIn.html',
        
      })
       .when('/driverList', {
        templateUrl: 'views/delivery_associate/driverList.html',
        
      })
      .when('/driverCheckInList', {
        templateUrl: 'views/delivery_associate/driverCheckInList.html',
        
      })
      .when('/deliveryMenifest', {
        templateUrl: 'views/driver/deliveryMenifest.html',
        
      })
      .when('/scanPageIn', {
        templateUrl: 'views/driver/scanPageIn.html',
        
      })
      .when('/manifestDetails', {
        templateUrl: 'views/driver/manifestDetails.html',
        
      })
       .otherwise({
        redirectTo: '/'
      });
  });

inLoopApp.factory('$global',function(){
 
  
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

    
 
    return { 
        getUrl : function(){
                return _baseURL;
            },

        getAuthToken : function(){
          return _authToken;
        },

        setAuthToken: function(token){
          _authToken = token;
        }
        

        };
}); 