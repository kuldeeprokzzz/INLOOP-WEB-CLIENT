
inLoopApp
  .controller('loginController', function ($scope,sharedProperties, completeModel, $location, loginService) {

    $scope.submit = function(){
       

        loginService.getLoginToken($scope.username,$scope.password)
        .then(function(response){

            if(response.status == 200){

                sharedProperties.setAuthToken(response.data.token);
                
                loginService.getProfile()
                .then(function(response){

                    if(response.status == 200)
                    {
                        completeModel.driver = response.data;
                    }
                });
            }


            });

               
    };
  });
