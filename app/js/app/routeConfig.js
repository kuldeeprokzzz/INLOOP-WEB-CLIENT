inLoopApp.config(function ($routeProvider) {
    
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'loginController'
      })
      .when('/licensePlate', {
        templateUrl: 'views/driver/driverCard.html',
        controller : 'driverCardController'
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