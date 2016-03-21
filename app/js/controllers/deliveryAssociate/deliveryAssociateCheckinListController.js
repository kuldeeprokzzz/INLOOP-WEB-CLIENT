inLoopApp.controller('deliveryAssociateCheckinListController', function ($scope, $filter, completeModel, deliveryAssociateService, sharedProperties) {
    
  // This controllers becomes active when user 
  // logins for the first time or push notification for 
  // drivers arrival state is pushed 

    $scope.initialize = function(){

      // DELETE IT
      // Hard coded delivery center id as not getting one rigth now
        var deliveryCenterId = 5;

        $scope.showDriverList = false;

        $scope.contractTaskType = sharedProperties.getContractTaskType();
        $scope.cardType = sharedProperties.getCardTypes();
        $scope.daMenu = sharedProperties.getdaMenu();

        if(completeModel.deliveryAssociate.profile.delivery_centreid != undefined){
            deliveryCenterId = response.data.delivery_centreid;
        }

        if(completeModel.menuItem == undefined){
          completeModel.menuItem = sharedProperties.getdaMenu().drivers.items.available;
        }

        $scope.menuItem = completeModel.menuItem;
        
        // while initializing this controlled we GET
        // the list of all arrived drivers
        deliveryAssociateService.getArrivedVehiclesByDeliveryCenterId(deliveryCenterId)
		    .then(function(response){
		
      		if(response.data.length != 0){ // if response is not empty
            
            // if response has only one arrived driver 
            // we send it directly to the driver checkin page
            if(response.data.length != 1){
              completeModel.deliveryAssociate.from = 'driversList';
              completeModel.deliveryAssociate.contractTask = response.data[0];
              sharedProperties.setPath('/driverBlankCard');
            }

            // if response has more than one arrived drivers
            // then we show the arrived drivers list 
      			$scope.contractTasks = response.data;
      			$scope.showDriverList = true;

      		}else{

            // if response has no arrived drivers 
            // we send user to show all driver queue
            completeModel.menuItem = sharedProperties.getdaMenu().drivers.items.all;
            sharedProperties.setPath('/driverAllList');
      		}
        });
    };

	$scope.sendToBlankDriverPageWithContract = function(contractTask){
		completeModel.deliveryAssociate.from = 'driversList';
		completeModel.deliveryAssociate.contractTask = contractTask;
		sharedProperties.setPath('/driverBlankCard');
	}

  $scope.menuClicked = function(item){
    $scope.menuItem = item;
    completeModel.menuItem = item;
    sharedProperties.setPath('/driverAllList');
  }

});