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
      .when('/driverBlankCard', {
        templateUrl: 'views/deliveryAssociate/driverBlankCard.html',
        controller : 'deliveryAssociateBlankCardController'
        
      })
      .when('/driverCheckInList', {
        templateUrl: 'views/deliveryAssociate/driverCheckInList.html',
        controller : 'deliveryAssociateCheckinListController'
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
      .when('/jobsList', {
        templateUrl: 'views/loadManager/jobsList.html',
        controller: 'loadManagerJobController',
        
      })
      .when('/assignJob', {
        templateUrl: 'views/loadManager/assignJob.html',
        controller: 'loadManagerJobAssignmentController',
        
      })
      .otherwise({
        redirectTo: '/'
      });
     
  });