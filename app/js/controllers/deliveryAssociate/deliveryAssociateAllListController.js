inLoopApp.controller('deliveryAssociateAllListController', function ($scope,$route, $filter, completeModel, deliveryAssociateService, sharedProperties) {
    
    $scope.initialize = function(){

      // initializing scope

      // delete delivery center id once its you get it
        var deliveryCenterId = 5;
        var contractTaskStates = '';
        $scope.showDriverList = false;

        $scope.contractTaskType = sharedProperties.getContractTaskType();
        $scope.cardType = sharedProperties.getCardTypes();
        $scope.daMenu = sharedProperties.getdaMenu();

        $scope.menuItem = completeModel.menuItem;
        
        if(completeModel.deliveryAssociate.profile.delivery_centreid != undefined){
            deliveryCenterId = response.data.delivery_centreid;
        }

        // initializing contractTask states according 
        // to the menu item pressed.

        if($scope.menuItem == sharedProperties.getdaMenu().drivers.items.all){
          contractTaskStates = '';
        }
        if($scope.menuItem == sharedProperties.getdaMenu().drivers.items.available){
          contractTaskStates = sharedProperties.getContractTaskType().arrived.type;
        }
        if($scope.menuItem == sharedProperties.getdaMenu().drivers.items.assigned){
          contractTaskStates = sharedProperties.getContractTaskType().assignedJob.type;
        }
        
        if($scope.menuItem == sharedProperties.getdaMenu().drivers.items.dispatched){
          contractTaskStates = sharedProperties.getContractTaskType().dispatched.type
          +','+sharedProperties.getContractTaskType().returning.type;
        }

        // Getting data according to the 
        // pressed menu item.
        deliveryAssociateService.getVehiclesByDeliveryCenterIdAndStates(deliveryCenterId,contractTaskStates)
		    .then(function(response){
		
      		if(response.data.length != 0){

            if($scope.menuItem == sharedProperties.getdaMenu().drivers.items.available && response.data.length == 1){
              completeModel.deliveryAssociate.from = 'driversList';
              completeModel.deliveryAssociate.contractTask = response.data[0];
              sharedProperties.setPath('/driverBlankCard');
            }

      			$scope.contractTasks = response.data;
        $scope.contractTasks = [{
        'id': 0,
        'contractid': 12,
        'shipperid': 1,
        'shipper_name': 'Amazon India Pvt. Ltd.',
        'providerid': 0,
        'provider_name': 'GTrans Logistics Pvt. Ltd.',
        'vehicleid ': 1,
        'vehicle_regNumber': 'KA02AB1924 ', 
        'vehicle_make':'TATA ACE', 
        'driverid': 0,
        'driver_name': 'Ramlal Gupta',
        'driver_image': 'http: //54.169.251.56/media/drivers/ramlal.png',
        'delivery_centreid': 0,
        'delivery_centre_name': 'Jakkur Delivery Centre ',
        'status':'ARRIVED',
        'card_type':'RETURNING_ARRIVED',
        'latest_state': {
            'id': 1,
            'type': 'CHECKED_IN ',
            'time': '2016-03-19T08:20:00+0530',
            'location': {
                'longitude': 77.593691,
                'latitude': 12.971941
            },
        'odometer': 19012,
        'performed_by': 'kvkumar',
        },
        'jobid': 4444,
        'tripid': null,
    }, {
        'id': 1,
        'contractid': 12,
        'shipperid': 1,
        'shipper_name': 'Amazon Transport Services',
        'providerid': 0,
        'provider_name': 'GTrans Logistics Pvt.Ltd.',
        'vehicleid': 1,
        'vehicle_regNumber': 'KA04DS2328 ',
        'vehicle_make': 'TATA ACE',
        'driverid': 0,
        'driver_name': 'Harilal Pande', 
        'driver_image ':'http: //54.169.251.56/media/drivers/harilal_pande.png',
        'delivery_centreid': 5,
        'delivery_centre_name': 'Jakkur Delivery Centre',
        'status': 'CHECKED_IN',
        'card_type':'CREATED',
        'latest_state ':{
          'id': 0,
          'type': 'DISPATCHED',
          'time':'2016-03-19T08:20:00+0530',
          'location': {
            'longitude': 77.59369,
            'latitude': 12.97194
          },
        'odometer': 21345, 
        'performed_by': '+919012123456', 
        },
        'jobid': null, 
        'tripid': null,
}];
            
      			$scope.showDriverList = true;

      		}else{
      			$scope.errorMessage = "No Vehicle Found";
      		}

        });
    };

	$scope.sendToBlankDriverPage = function(){
		completeModel.deliveryAssociate.from = 'login';
		completeModel.deliveryAssociate.blankDriverCard = undefined;
		sharedProperties.setPath('/driverBlankCard');
	}

	$scope.sendToBlankDriverPageWithContract = function(contractTask){
		completeModel.deliveryAssociate.from = 'driversList';
		completeModel.deliveryAssociate.contractTask = contractTask;
		sharedProperties.setPath('/driverBlankCard');
	}

  // reloading page on pressing menu item
  $scope.menuClicked = function(item){
    $scope.menuItem = item;
    completeModel.menuItem = item;
    $route.reload();
  }

  $scope.getTime = function(utcTime){
    return sharedProperties.getTimeFromUTCDateTime(utcTime);
  }

  });