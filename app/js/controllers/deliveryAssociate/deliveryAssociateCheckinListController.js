inLoopApp.controller('deliveryAssociateCheckinListController', function ($scope, $filter, completeModel, deliveryAssociateService, sharedProperties) {
    
    $scope.initialize = function(){

        var deliveryCenterId = 5;

        $scope.showDriverList = false;

        $scope.contractTaskType = sharedProperties.getContractTaskType();
        $scope.cardType = sharedProperties.getCardTypes();
        $scope.daMenu = sharedProperties.getdaMenu();

        if(completeModel.deliveryAssociate.profile.delivery_centreid != undefined){
            deliveryCenterId = response.data.delivery_centreid;
        }

        if(completeModel.menuItem == undefined){
          completeModel.menuItem = sharedProperties.getdaMenu().drivers.items.all;
          $scope.menuItem = completeModel.menuItem;
        }

        deliveryAssociateService.getArrivedVehiclesByDeliveryCenterId(deliveryCenterId)
		    .then(function(response){
		
      		if(response.data.length != 0){

            if(response.data.length != 1){
              completeModel.deliveryAssociate.from = 'driversList';
              completeModel.deliveryAssociate.contractTask = response.data[0];
              sharedProperties.setPath('/driverBlankCard');
            }

      			$scope.contractTasks = response.data;
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