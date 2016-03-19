inLoopApp.controller('deliveryAssociateAllListController', function ($scope,$route, $filter, completeModel, deliveryAssociateService, sharedProperties) {
    
    $scope.initialize = function(){

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

        if($scope.menuItem == sharedProperties.getdaMenu().drivers.items.all){
          contractTaskStates = sharedProperties.getContractTaskType().checkedIn.type+','+sharedProperties.getContractTaskType().arrived.type+','+sharedProperties.getContractTaskType().assignedJob.type;
        }
        if($scope.menuItem == sharedProperties.getdaMenu().drivers.items.available){
          contractTaskStates = sharedProperties.getContractTaskType().arrived.type;
        }
        if($scope.menuItem == sharedProperties.getdaMenu().drivers.items.assigned){
          contractTaskStates = sharedProperties.getContractTaskType().assignedJob.type;
        }
        if($scope.menuItem == sharedProperties.getdaMenu().drivers.items.dispatched){
          contractTaskStates = sharedProperties.getContractTaskType().assignedJob.type;
        }

        deliveryAssociateService.getVehiclesByDeliveryCenterIdAndStates(deliveryCenterId,contractTaskStates)
		    .then(function(response){
		
      		if(response.data.length != 0){
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
    $route.reload();
  }

  });