inLoopApp.config(function ($routeProvider) {
    
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'loginController'
      })
      .when('/login', {
        templateUrl: 'views/loginWithUserName.html',
        controller: 'loginController'
      })
      .when('/licensePlate', {
        templateUrl: 'views/driver/driverCard.html',
        controller : 'driverCardController'
      })
      .when('/onMyWay', {
        templateUrl: 'views/driver/onWay.html',
        controller : 'driverOnWayController' 
      })
      .when('/iotDetected', {
        templateUrl: 'views/driver/driverIOTDetectedPage.html',
        controller : 'driverIOTDetectedController'  
      })
      .when('/driverCheckedIn', {
        templateUrl: 'views/driver/driverCheckedIn.html',
        controller : 'driverCheckedInController'
      })
      .when('/checkIn', {
        templateUrl: 'views/deliveryAssociate/checkIn.html',
        
      })
        .when('/driverList', {
        templateUrl: 'views/deliveryAssociate/driverList.html',
        
      })
      .when('/driverCheckInList', {
        templateUrl: 'views/deliveryAssociate/driverCheckInList.html',
        
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
      .when('/deliveryMenifestMap', {
        templateUrl: 'views/driver/deliveryMenifestMap.html',
        
      })
       .otherwise({
        redirectTo: '/'
      });
     
  });