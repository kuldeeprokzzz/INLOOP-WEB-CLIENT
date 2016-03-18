inLoopApp.controller('deliveryAssociateCheckinListController', function ($scope, $filter, completeModel, deliveryAssociateService, sharedProperties) {
    
    $scope.initialize = function(){

        var deliveryCenterId = 5;

        $scope.showDriverList = false;
        
        if(completeModel.deliveryAssociate.profile.delivery_centreid != undefined){
            deliveryCenterId = response.data.delivery_centreid;
        }

        deliveryAssociateService.getAllArrivedVehiclesByDeliveryCenterId(deliveryCenterId)
		    .then(function(response){
		
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