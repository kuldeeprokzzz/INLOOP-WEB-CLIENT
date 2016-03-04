'use strict';

/**
 * @ngdoc function
 * @name inloopYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the inloopYeomanApp
 */
angular.module('inloopYeomanApp')
  .controller('Sign_inCtrl', function ($scope, $location, $rootScope,callRemoteService,$http) {

    $scope.systemProperties = function(){

        $rootScope.baseURL = 'http://54.169.251.56:10010/api/v1';

        $rootScope.roles = {

            driver : 0,
            deliveryAssociate : 2,
            loadManager : 3,

        }

        $rootScope.contractStatusType = {

            onWay : 'ON_WAY',
        }
    }



    $scope.submit = function(){

        $scope.systemProperties();

        callRemoteService.signInService($scope.username,$scope.password)
        .then(function(response){

            if(response.status == 200){

                $rootScope.authenticationToken = response.data.token;
                
                callRemoteService.getDriverProfile()
                .then(function(response){

                    if(response.status == 200){

                        $scope.responseData = response.data;
                        if($scope.responseData.roleid == $rootScope.roles.driver){

                            $rootScope.driver = {};

                            $rootScope.driver.username = response.data.username;
                            $rootScope.driver.driverContactNumber = response.data.contact_number;
                            $rootScope.driver.roleId = response.data.roleid;
                            $rootScope.driver.driverName = response.data.first_name +" "+ response.data.middle_name +" "+ response.data.last_name;
                            $rootScope.driver.providerName = response.data.organization_name;
                            $rootScope.driver.driverImage = response.data.image;
                            $rootScope.driver.providerId = response.data.organizationid;

                            $location.path('/licensePlate');
                            console.log($location.path());
                        }


                    }else{

                        $rootScope.errorMessage = 'Wrong username or password or both';
                        $location.path('/sign_in.html');

                    }


                });

            }else{

                $rootScope.errorMessage = 'Wrong username or password or both';
                $location.path('/sign_in.html');

            }

            });

                /*$http.post($rootScope.baseURL+'/login',{"username": $scope.username,"password": $scope.password})
                .then(function(response) {

                    $rootScope.authenticationToken = response.data.token;
                    $rootScope.signedIn = true;
            

                    $http.get($rootScope.baseURL+'/profiles/me',{token : $rootScope.authenticationToken})
                    .then(function(response){

                        $scope.responseData = response.data;
                        if($scope.responseData.roleid == $rootScope.roles.driver){

                            $rootScope.username = response.data.username;
                            $rootScope.driverContactNumber = response.data.contact_number;
                            $rootScope.roleId = response.data.roleid;
                            $rootScope.driverName = response.data.first_name +" "+ response.data.middle_name +" "+ response.data.last_name;
                            $rootScope.providerName = response.data.organization_name;
                            $rootScope.driverImage = response.data.image;
                            $rootScope.providerId = response.data.organizationid;

                            $location.path('/licensePlate');
                            console.log($location.path());
                        }

                    },function(response){
                       
                        $rootScope.errorMessage = 'Wrong username or password or both';
                        $location.path('/sign_in.html');

                    });
                   
                }, function(response) {

                    $rootScope.errorMessage = 'Wrong username or password or both';
                    $location.path('/sign_in.html');
                });*/
        


        /*
    	if($scope.mobileNumber == "8197480332" && $scope.aadharNumber == "1234"){
            $rootScope.loggedIn = true;
            $location.path('/dashboard');
    	}else {
    		alert('Wrong credentials')
    	}*/
    };
  });
