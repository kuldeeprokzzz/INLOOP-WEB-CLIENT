inLoopApp.controller('loginController', function ($scope, sharedProperties, completeModel, loginService, deliveryAssociateService) {

    $scope.submit = function(loginType){

        var requestData = {
            "username": $scope.username,
            "password": $scope.password,
        };


        if(loginType == 1){
            if($scope.username.length == 10){
                $scope.errorMessage = 'Please Enter a valid mobile number.';
            }

            if($scope.password.length <=4){
                if($scope.errorMessage == ''){
                    $scope.errorMessage
                }
            }
        }

       
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


                        if($scope.username == 'amazonLM' && $scope.password == 'amazonLM'){
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


    $scope.onLoginKeyPress = function(loginType){
        $scope.errorMessage = '';
    };
  });
