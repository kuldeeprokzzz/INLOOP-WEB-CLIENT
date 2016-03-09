inLoopApp.controller('loginController', function ($scope, sharedProperties, completeModel, loginService, deliveryAssociateService) {

    $scope.submit = function(){

        var requestData = {
            "username": $scope.username,
            "password": $scope.password,
        };
       
        loginService.getLoginToken(requestData)
        .then(function(response){

            if(response.status == 200){

                sharedProperties.setAuthToken(response.data.token);
                
                loginService.getProfile()
                .then(function(response){

                    if(response.status == 200)
                    {
                        /*completeModel.driver = response.data;
                        sharedProperties.setPath('/driverBlankCard');*/    

                        if(false){
                        completeModel.driver = response.data;
                        sharedProperties.setPath('/licensePlate');
                        }

                        if(true){

                            var deliveryCenterId = 0;
                            if(response.data.delivery_centreid != undefined){
                                deliveryCenterId = response.data.delivery_centreid;
                            }
                            completeModel.deliveryAssociate = {profile : {}};
                            completeModel.deliveryAssociate.profile = response.data;

                            deliveryAssociateService.getAllVehiclesByDeliveryCenterId(deliveryCenterId)
                                .then(function(response){

                                    completeModel.deliveryAssociate.driverQueue = {};
                                    completeModel.deliveryAssociate.blankDriverCard = {};
                                    completeModel.deliveryAssociate.blankDriverCard = { 
                                        driverName : 'DRIVER NAME',
                                        providerName : 'Provider Name',
                                        licensePlateNumber : '',
                                        odometerReading : '' 
                                    };

                                    /*response.data.length != 0*/





                                    /*response = 
[
  {
    "id": 0,
    "shipperid": 1,
    "shipper_name": "Amazon India Pvt. Ltd.",
    "providerid": 0,
    "provider_name": "GTrans Logistics Pvt. Ltd.",
    "vehicleid": 1,
    "vehicle_regNumber": "KA02AB1924",
    "vehicle_make": "TATA ACE",
    "driverid": 0,
    "driver_name": "Ramlal Gupta",
    "driver_image": "http://54.169.251.56/media/drivers/ramlal.png",
    "delivery_centreid": 0,
    "delivery_centre_name": "Jakkur Delivery Centre",
    "status": "CHECKED_IN",
    "states": [
      {
        "id": 0,
        "type": "ON_WAY",
        "time": "26/02/2016 07:55:00",
        "location": {
          "longitude": 77.59369,
          "latitute": 12.97194
        },
        "odometer": 19007,
        "performed_by": "+919012123456"
      },
      {
        "id": 1,
        "type": "CHECKED_IN",
        "time": "26/02/2016 08:17:00",
        "location": {
          "longitude": 77.593691,
          "latitute": 12.971941
        },
        "odometer": 19012,
        "performed_by": "kvkumar"
      }
    ],
    "terms": []
  },
  {
    "id": 1,
    "shipperid": 1,
    "shipper_name": "Amazon India Pvt. Ltd.",
    "providerid": 0,
    "provider_name": "GTrans Logistics Pvt. Ltd.",
    "vehicleid": 1,
    "vehicle_regNumber": "KA04DS2328",
    "vehicle_make": "TATA ACE",
    "driverid": 0,
    "driver_name": "Harilal Pande",
    "driver_image": "http://54.169.251.56/media/drivers/harilal_pande.png",
    "delivery_centreid": 0,
    "delivery_centre_name": "Jakkur Delivery Centre",
    "status": "CHECKED_IN",
    "states": [
      {
        "id": 0,
        "type": "ON_WAY",
        "time": "26/02/2016 07:37:00",
        "location": {
          "longitude": 77.59369,
          "latitute": 12.97194
        },
        "odometer": 21345,
        "performed_by": "+919012123456"
      },
      {
        "id": 1,
        "type": "CHECKED_IN",
        "time": "26/02/2016 08:01:00",
        "location": {
          "longitude": 77.593691,
          "latitute": 12.971941
        },
        "odometer": 21355,
        "performed_by": "kvkumar"
      }
    ],
    "terms": []
  }
];*/















                                    if(true){
                                        
                                        completeModel.deliveryAssociate.driverQueue = response.data;
                                        sharedProperties.setPath('/driverCheckInList');
                                    }else{

                                        sharedProperties.setPath('/driverBlankCard');

                                    }
                                });
                        }
                        

                    }
                });
            }
            else{
                //handle error
                sharedProperties.setPath('/');
            }

            });

               
    };
  });
