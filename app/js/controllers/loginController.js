inLoopApp.controller('loginController', function ($scope, sharedProperties, completeModel, loginService, deliveryAssociateService) {

    $scope.submit = function(){

        var requestData = {
            "username": $scope.username,
            "password": $scope.password,
        };
       
        loginService.getLoginToken(requestData)
        .then(function(response){

            if(response.status == 200){

                sharedProperties.setAuthToken(response.data.token);
                
                loginService.getProfile()
                .then(function(response){

                    if(response.status == 200)
                    {
                        /*completeModel.driver = response.data;
                        sharedProperties.setPath('/driverBlankCard');*/    

                        if(false){
                        completeModel.driver = response.data;
                        sharedProperties.setPath('/licensePlate');
                        }

                        if(true){

                            var deliveryCenterId = 0;
                            if(response.data.delivery_centreid != undefined){
                                deliveryCenterId = response.data.delivery_centreid;
                            }
                            completeModel.deliveryAssociate = {profile : {}};
                            completeModel.deliveryAssociate.profile = response.data;

                            deliveryAssociateService.getAllVehiclesByDeliveryCenterId(deliveryCenterId)
                                .then(function(response){

                                    completeModel.deliveryAssociate.driverQueue = {};
                                    completeModel.deliveryAssociate.blankDriverCard = {};
                                    completeModel.deliveryAssociate.blankDriverCard = { 
                                        driverName : 'DRIVER NAME',
                                        providerName : 'Provider Name',
                                        licensePlateNumber : '',
                                        odometerReading : '' 
                                    };

                                    /*response.data.length != 0*/

                                    if(false){
                                        
                                        completeModel.deliveryAssociate.driverQueue = response.data;

                                    }else{

                                        sharedProperties.setPath('/driverBlankCard');

                                    }
                                });
                        }
                        

                    }
                });
            }
            else{
                //handle error
                sharedProperties.setPath('/');
            }

            });

               
    };
  });
