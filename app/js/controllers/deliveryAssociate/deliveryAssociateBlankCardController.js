inLoopApp.controller('deliveryAssociateBlankCardController', function ($scope, $filter, completeModel, deliveryAssociateService, sharedProperties) {
    
    $scope.initialize = function(){

      if(completeModel.deliveryAssociate.from == 'login'){

        if(completeModel.deliveryAssociate.blankDriverCard == undefined){
           completeModel.deliveryAssociate.blankDriverCard= {
                                                              first_name : 'DRIVER',
                                                              middle_name : '',
                                                              last_name : 'NAME',
                                                              organization_name : 'PROVIDER NAME',
                                                              driverName : '',
                                                              providerName : '',
                                                              licensePlateNumber : '',
                                                              vehicleModelName : '',
                                                              odometerReading : '',
                                                            }
        }


        $scope.showDriverFooter = true;
        $scope.showAddOdometer = false;
        $scope.showVehicleDetails = false;

        $scope.blankDriverCard = completeModel.deliveryAssociate.blankDriverCard;
    

        $scope.driver = {
          driverName : $scope.blankDriverCard.first_name + ' ' + $scope.blankDriverCard.middle_name + ' ' + $scope.blankDriverCard.last_name,
          providerName : $scope.blankDriverCard.organization_name,
          licensePlateNumber : $scope.blankDriverCard.regNumber,
        }

      }

      if(completeModel.deliveryAssociate.from == 'driversList'){
        if(completeModel.deliveryAssociate.contract != undefined){

          $scope.showDriverFooter = false;
          $scope.showVehicleDetails = true;
          $scope.showAddOdometer = true;

          $scope.blankDriverCard = completeModel.deliveryAssociate.contract;

          $scope.driver = {
          driverName : $scope.blankDriverCard.driver_name,
          providerName : $scope.blankDriverCard.provider_name,
          licensePlateNumber : $scope.blankDriverCard.vehicle_regNumber,
          vehicleModelName : $scope.blankDriverCard.vehicle_make,

        }

        }
      }



        
        

        
    };

    $scope.OnLicenceKeyPress = function(event){

        if(($scope.driver.licensePlateNumber).length == 4){
            deliveryAssociateService.getOnWayOrReturningContractByVehicleNumberPlate($scope.driver.licensePlateNumber)
            .then(function(response){

                if(response.data.length == 0){
                    $scope.driver.errorMessage = 'No Matching Vehicle Found';
                }else{

                    if(response.data.length == 1){
                        completeModel.deliveryAssociate.contract = response.data[0];
                        $scope.driver.vehicleProfile = response.data[0];
                        $scope.driver.licensePlateNumber = response.data[0].vehicle_regNumber;
                        $scope.driver.driverName= response.data[0].driver_name;
                        $scope.driver.providerName = response.data[0].provider_name;
                        $scope.driver.vehicleModelName = response.data[0].vehicle_make;

                    }else{
                        $scope.driver.errorMessage = 'More than One vehicle Found';
                    }
                }
            });
        }

        if($scope.driver.licensePlateNumber.length > 4){
            if (event.keyCode == 8) {
                $scope.driver.licensePlateNumber = '';
            }
        }

    }


    $scope.addLicencePlate = function(){

        $scope.showDriverFooter = false;
        $scope.showVehicleDetails = true;
        $scope.showAddOdometer = true;
    }

    $scope.addOdometerReading = function(){

        var requestBody = {
                              "shipperid": 1,
                              "delivery_centreid": 0,
                              "status": sharedProperties.getContractStatusType().checkedIn.type,
                            "states":[
                                {
                                  "id": sharedProperties.getContractStatusType().checkedIn.id,
                                  "type": sharedProperties.getContractStatusType().checkedIn.type,
                                  "time": $filter("date")(Date.now(), 'dd/MM/yyyy HH:mm:ss'),
                                  "location": {
                                    "longitude": 77.5936910,
                                    "latitute": 12.9719410
                                  },
                                  "odometer": $scope.driver.odometerReading,
                                  "performed_by": "kvkumar"
                                }]
                            }


        deliveryAssociateService.checkinVelicleByContractId(completeModel.deliveryAssociate.contract.id,requestBody)
            .then(function(response){


                                                    response = 
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
];



                sharedProperties.setPath('/driverCheckInList');

            });


    }

    $scope.sendToDriverQueue = function(){
      completeModel.deliveryAssociate.blankDriverCard = undefined;
      completeModel.deliveryAssociate.contract = undefined;
      completeModel.deliveryAssociate.from == '';
      sharedProperties.setPath('/driverCheckInList');
    };

  });