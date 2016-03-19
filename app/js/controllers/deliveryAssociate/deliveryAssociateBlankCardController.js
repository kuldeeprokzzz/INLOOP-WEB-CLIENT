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
          providerName : $scope.blankDriverCard.providerName,
          licensePlateNumber : $scope.blankDriverCard.licensePlateNumber,
        }

      }

      if(completeModel.deliveryAssociate.from == 'driversList'){
        if(completeModel.deliveryAssociate.contractTask != undefined){

          $scope.showDriverFooter = false;
          $scope.showVehicleDetails = true;
          $scope.showAddOdometer = true;

          $scope.blankDriverCard = completeModel.deliveryAssociate.contractTask;

          $scope.driver = {
          driverName : $scope.blankDriverCard.driver_name,
          providerName : $scope.blankDriverCard.provider_name,
          licensePlateNumber : $scope.blankDriverCard.vehicle_regNumber,
          vehicleModelName : $scope.blankDriverCard.vehicle_make,
          odometerReading : $scope.blankDriverCard.states[$scope.blankDriverCard.states.length-1].odometer,
        };

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
                        completeModel.deliveryAssociate.contractTask = response.data[0];
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

        var requestBody =  {
          id: 1,
          type: 'CHECKED_IN',
          time: '26/02/201608:01:00',
          location: {
            longitude: 77.5936910,
            latitude: 12.9719410
          },
          odometer: 21355,
          performed_by: 'kvkumar',
        }


        deliveryAssociateService.updateContractTaskToCheckedIn(completeModel.deliveryAssociate.contractTask.id,requestBody)
            .then(function(response){

              sharedProperties.setPath('/driverAllList');

            });
    }

    $scope.sendToAllDriverQueue = function(){
      completeModel.deliveryAssociate.blankDriverCard = undefined;
      completeModel.deliveryAssociate.contractTask = undefined;
      completeModel.deliveryAssociate.from == '';
      sharedProperties.setPath('/driverAllList');
    };

  });