inLoopApp.controller('deliveryAssociateBlankCardController', function ($scope, $filter, completeModel, deliveryAssociateService, sharedProperties) {
    
    $scope.initialize = function(){

        $scope.blankDriverCard = completeModel.deliveryAssociate.blankDriverCard;
        $scope.showDriverFooter = true;
        $scope.showAddOdometer = false;
        $scope.showVehicleDetails = false;

        $scope.driver = {
            driverName : $scope.blankDriverCard.driverName,
            providerName : $scope.blankDriverCard.providerName,
            licensePlateNumber : $scope.blankDriverCard.licensePlateNumber,
            vehicleModelName : '',
            odometerReading : '',
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
                        completeModel.deliveryAssociate.tempContract = response.data[0];
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

                            alert(requestBody);

        deliveryAssociateService.checkinVelicleByContractId(completeModel.deliveryAssociate.tempContract.id,requestBody)
            .then(function(response){

                alert(response.data);

            });


    }

  });