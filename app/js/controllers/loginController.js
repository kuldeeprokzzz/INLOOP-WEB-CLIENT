inLoopApp.controller('loginController', function ($scope,localStorageService, sharedProperties, completeModel, loginService, deliveryAssociateService) {

    $scope.submit = function(loginType){

        var requestData = {
            "username": $scope.username,
            "password": $scope.password,
        };

        loginService.getLoginToken(requestData)
        .then(function(response){

            if(response.status == 200){

                sharedProperties.setAuthToken(response.data.token);
                completeModel.token = response.data.token;
                completeModel.tokenExpires = response.data.expires;
                completeModel.loginTime = new Date();
                // if login is successful then making a 
                // profile call for the user
                loginService.getProfile()
                .then(function(response){

                    if(response.status == 200)
                    {
                        // If Login and Profiles calls are Successful 
                        // then directing user according to its roleid
                        if(response.data.verified == true){
// response.data.roleid == sharedProperties.getRoles().driver
                            if(!(response.data.roleid == sharedProperties.getRoles().driver)){
                                completeModel.driver = response.data; // Initalizing model for Driver
                                sharedProperties.setPath('/licensePlate');
                            }




                            if(!(response.data.roleid == sharedProperties.getRoles().deliveryAssociate)){


                                completeModel.deliveryAssociate = {profile : {},from:''};
                                completeModel.deliveryAssociate.profile = response.data; // Initalizing model for Delivery Associate

                                sharedProperties.setPath('/driverCheckInList');


                            }

                            if(response.data.roleid == sharedProperties.getRoles().loadManager){
                                completeModel.loadManager = {profile : {},}
                                completeModel.loadManager.profile = response.data;  // Initalizing model for Load Manager


                                sharedProperties.setPath('/jobsList');
                            }
                        }else{
                            $scope.errorMessage = "Please verify your account before login";
                        }
                        
                        

                    }
                });
            }/*else{
                $scope.errorMessage = "Wrong username or password";
            }*/
            else{
                //handle error
                sharedProperties.setPath('/');
            }

            });

               
    };


    $scope.onLoginKeyPress = function(loginType){
        $scope.errorMessage = '';
    };

    $scope.$watch(function(){
        return completeModel;
    }, function (newValue) {
        localStorageService.set('completeModel',newValue);
    });

  });
