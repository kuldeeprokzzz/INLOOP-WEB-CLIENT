inLoopApp.controller('deliveryAssociateCheckinListController', function ($scope, $filter, completeModel, deliveryAssociateService, sharedProperties) {
    
    $scope.initialize = function(){

        $scope.contracts = completeModel.deliveryAssociate.driverQueue;

    };


    $scope.mySplit = function(string, nb) {
		    var array = string.split(' ');
		    return array[nb];
	}

  });