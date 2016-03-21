inLoopApp.controller('loginController', function ($scope, sharedProperties, completeModel, loginService, deliveryAssociateService) {

    $scope.submit = function(loginType){

        var requestData = {
            "username": $scope.username,
            "password": $scope.password,
        };

        loginService.getLoginToken(requestData)
        .then(function(response){

            if(response.status == 200){

                sharedProperties.setAuthToken(response.data.token);
                
                // if login is successful then making a 
                // profile call for the user
                loginService.getProfile()
                .then(function(response){

                    if(response.status == 200)
                    {
                        // If Login and Profiles calls are Successful 
                        // then directing user according to its roleid

                        if($scope.username == '8010599690' && $scope.password == '9690'){
                        completeModel.driver = response.data; // Initalizing model for Driver
                        sharedProperties.setPath('/licensePlate');
                        }




                        if($scope.username == '8010599691' && $scope.password == '9691'){


                            completeModel.deliveryAssociate = {profile : {},from:''};
                            completeModel.deliveryAssociate.profile = response.data; // Initalizing model for Delivery Associate

                            sharedProperties.setPath('/driverCheckInList');


                        }


                        if($scope.username == 'amazonLM' && $scope.password == 'amazonLM'){
                            completeModel.loadManager = {profile : {},}
                            completeModel.loadManager.profile = response.data;  // Initalizing model for Load Manager


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


    $scope.onLoginKeyPress = function(loginType){
        $scope.errorMessage = '';
    };
  });
