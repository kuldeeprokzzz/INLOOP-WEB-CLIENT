inLoopApp.controller('loginController', function ($scope, sharedProperties, completeModel, loginService) {

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
                        completeModel.driver = response.data;
                        sharedProperties.setPath('/licensePlate');
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
