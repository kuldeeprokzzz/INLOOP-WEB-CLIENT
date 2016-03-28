inLoopApp.controller('loadManagerDriverController', function ($scope,$route, $filter, completeModel, deliveryAssociateService, sharedProperties) {
    
    $scope.initialize = function(){

      // initializing scope

      // delete delivery center id once its you get it
        var deliveryCenterId = 5;
        var contractTaskStates = '';
        $scope.showDriverList = false;

        $scope.contractTaskType = sharedProperties.getContractTaskType();
        $scope.cardType = sharedProperties.getCardTypes();
        $scope.daMenu = sharedProperties.getdaMenu();
        $scope.lmMenu = sharedProperties.getJobsTypes();

        $scope.menuItem = completeModel.loadManager.menuItem;
        
        if(completeModel.loadManager.profile.delivery_centreid != undefined){
            deliveryCenterId = completeModel.loadManager.profile.delivery_centreid;
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
          contractTaskStates = sharedProperties.getContractTaskType().assignedJob.type;
        }

        // Getting data according to the 
        // pressed menu item.
        deliveryAssociateService.getVehiclesByDeliveryCenterIdAndStates(deliveryCenterId,contractTaskStates)
            .then(function(response){
        
            if(response.data.length != 0){

                $scope.contractTasks = response.data;
                $scope.showDriverList = true;

            }/*else{
                completeModel.menuItem = sharedProperties.getdaMenu().drivers.items.all;
                $route.reload();
            }*/

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

    $scope.clickJobType = function(jobType){
        $scope.menuItem = jobType;
        completeModel.loadManager.menuItem = jobType;
        sharedProperties.setPath('/jobsList');
    };

  // reloading page on pressing menu item
  $scope.menuClicked = function(item){
    $scope.menuItem = item;
    completeModel.loadManager.menuItem = item;
    $route.reload();
  }

  });