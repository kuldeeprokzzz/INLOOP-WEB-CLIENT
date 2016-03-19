inLoopApp.service('loadManagerService', ['sharedProperties','$http', function(sharedProperties, $http){


	this.getAllJobsByDeliveryCenterIdCenterId = function(deliveryCenterId){


        var response = [
      {
        jobId : 'Amazon 11827',
        jobType : 0,
        route : 'Banargatta Road',
        packages : 43
      },
      {

        jobId : 'Amazon 11738',
        jobType : 0,
        route : 'Karol Bagh',
        packages : 43
      },
      {
        jobId : 'Amazon 11993',
        jobType : 0,
        route : 'Kalka ji',
        packages : 43
      },
      {
        jobId : 'Amazon 11122',
        jobType : 1,
        route : 'Nehru Place',
        packages : 43
      },
      {
        jobId : 'Amazon 12245',
        jobType : 1,
        route : 'Okhla Phase II',
        packages : 43
      },
      {
        jobId : 'Amazon 12264',
        jobType : 1,
        route : 'Sona Road',
        packages : 43
      },
      {
        jobId : 'Amazon 17736',
        jobType : 1,
        route : 'DLF Phase 2',
        packages : 43
      },
      {
        jobId : 'Amazon 155746',
        jobType : 2,
        route : 'SuperMart-I',
        packages : 43
      },
      {
        jobId : 'Amazon 19374',
        jobType : 2,
        route : 'Oakwood Estate',
        packages : 43
      },
    ];


        return response;
    };


    


this.getAllAvailableDriversByDeliveryCenterId = function(deliveryCenterId){

        deliveryCenterId = '0';
        return $http.get(sharedProperties.getUrl()+'/contracts/?status=CHECKED_IN&delivery_centreid='+deliveryCenterId+'&wildcard=true', { token : sharedProperties.getAuthToken})
        .then(function(response){
            return response;
        }, function(response){
            return response;
        });
    }


    // this.getAllAvailableDeliveryBoysByDeliveryCenterId = function(deliveryCenterId){


    //     var response = [
    //   {
    //     id : 0,
    //     driverName : 'Prashant Sonkar',
    //     providerName: 'GTrans Logistics Pvt. Limited'
    //   },
    //   {
    //     driverName : 'Mustaq Singh Bijral',
    //     providerName: 'GTrans Logistics Pvt. Limited'
    //   },
    //   {
    //     driverName : 'Kuldeep',
    //     providerName: 'Bajrang Trading Company'
    //   },
    //   {
    //     driverName : 'Prashant Sonkar',
    //     providerName: 'a Logistics Pvt. Limited'
    //   },
    //   {
    //     driverName : 'Prashant Sonkar',
    //     providerName: 'GTrans Logistics Pvt. Limited'
    //   },
    // ];


    //     return response;
    // };


}])