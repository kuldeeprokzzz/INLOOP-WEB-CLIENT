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

                        if($scope.username == '8010599690' && $scope.password == '9690'){
                        completeModel.driver = response.data;
                        sharedProperties.setPath('/licensePlate');
                        }



                        if($scope.username == '8010599691' && $scope.password == '9691'){

                            completeModel.deliveryAssociate = {profile : {},from:''};
                            completeModel.deliveryAssociate.profile = response.data;

                            sharedProperties.setPath('/driverCheckInList');


                        }


                        if($scope.username == 'amazonDA' && $scope.password == 'amazonDA'){
                            completeModel.loadManager = {profile : {},}
                            completeModel.loadManager.profile = response.data;


                            sharedProperties.setPath('/jobsList');
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
