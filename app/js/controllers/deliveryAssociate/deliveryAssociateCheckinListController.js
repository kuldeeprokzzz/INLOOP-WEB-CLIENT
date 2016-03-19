inLoopApp.controller('deliveryAssociateCheckinListController', function ($scope, $filter, completeModel, deliveryAssociateService, sharedProperties) {
    
    $scope.initialize = function(){

        var deliveryCenterId = 0;

        $scope.showDriverList = false;
        
        if(completeModel.deliveryAssociate.profile.delivery_centreid != undefined){
            deliveryCenterId = response.data.delivery_centreid;
        }

        deliveryAssociateService.getAllVehiclesByDeliveryCenterId(deliveryCenterId)
		    .then(function(response){
		        

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
		
		if(response.data.length != 0){

			$scope.contracts = response.data;
			$scope.showDriverList = true;

		}else{
			completeModel.deliveryAssociate.from = 'login';
			completeModel.deliveryAssociate.blankDriverCard = undefined;
			sharedProperties.setPath('/driverBlankCard');
		}

        });
    };


    $scope.mySplit = function(string, nb) {
		    var array = string.split(' ');
		    return array[nb];
	}

	$scope.sendToBlankDriverPage = function(){
		completeModel.deliveryAssociate.from = 'login';
		completeModel.deliveryAssociate.blankDriverCard = undefined;
		sharedProperties.setPath('/driverBlankCard');
	}

	$scope.sendToBlankDriverPageWithContract = function(contract){
		completeModel.deliveryAssociate.from = 'driversList';
		completeModel.deliveryAssociate.contract = contract;
		sharedProperties.setPath('/driverBlankCard');
	}

  });