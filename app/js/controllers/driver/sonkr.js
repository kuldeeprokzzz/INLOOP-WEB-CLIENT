 if(response.data.roleid == $rootScope.roles.driver){

                            $scope.responseData = response.data;
                            if($scope.responseData.roleid == $rootScope.roles.driver){

                                $rootScope.driver = {};

                                $rootScope.driver.driverId = response.data.id;
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

                        }

                        if(response.data.roleid == $rootScope.roles.deliveryAssociate){

                        }


                        if(response.data.roleid == $rootScope.roles.loadManager){

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