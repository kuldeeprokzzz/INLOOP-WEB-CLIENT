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
      .when('/onWayDone', {
        templateUrl: 'views/driver/triState.html',
        controller : 'driverOnWayDoneController' 
      })
      .when('/iotDetected', {
        templateUrl: 'views/driver/triState.html',
        controller : 'driverIOTDetectedController' 
      })
      .when('/driverCheckedIn', {
        templateUrl: 'views/driver/triState.html',
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
      .when('/driverJobAssigned', {
        templateUrl: 'views/driver/driverJobAssigned.html',
        controller: 'driverJobAssignedController',
      })
      .when('/scanPageIn', {
        templateUrl: 'views/driver/scanPageIn.html',
        controller: 'driverScanInController',
      })
      .when('/scanPageOut', {
        templateUrl: 'views/driver/scanPageOut.html',
        controller: 'driverScanInController',
      })
      .when('/manifestDetails', {
        templateUrl: 'views/driver/manifestDetails.html',
        
      })
      .when('/deliveryMenifestMap', {
        templateUrl: 'views/driver/deliveryMenifestMap.html',
        controller: 'deliveryMenifestMapController',
        
      })
      .when('/jobsList', {
        templateUrl: 'views/loadManager/jobsList.html',
        controller: 'loadManagerJobController',
        
      })
      .when('/assignJob', {
        templateUrl: 'views/loadManager/assignJob.html',
        controller: 'loadManagerJobAssignmentController',
        
      })
      .when('/submitInvoice', {
        templateUrl: 'views/accountsRecievable/submitInvoice.html',
        controller: 'loadManagerJobAssignmentController',
        
      })
      .when('/ledger', {
        templateUrl: 'views/accountsPayable/ledger.html',
        controller: 'loadManagerJobAssignmentController',
        
      })
      .otherwise({
        redirectTo: '/'
      });
     
  });