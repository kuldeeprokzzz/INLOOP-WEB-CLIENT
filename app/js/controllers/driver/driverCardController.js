inLoopApp.controller('driverCardController', function ($scope, completeModel, driverService, sharedProperties) {
    
    $scope.initializeDriver = function(){

        $scope.driver = completeModel.driver;
        var middleName = $scope.driver.middle_name + " ";
        $scope.driver.driverName = $scope.driver.first_name + " " + middleName + $scope.driver.last_name;
        $scope.driver.providerName = $scope.driver.organization_name;
        $scope.driver.licensePlateNumber = '';
        $scope.driver.vehicleProfile = {};
        $scope.driver.errorMessage = '';
    };


    $scope.OnLicenceKeyPress = function(event){

        if(($scope.driver.licensePlateNumber).length == 4){
            driverService.getVehicleProfile($scope.driver.organizationid,$scope.driver.licensePlateNumber)
            .then(function(response){

                if(response.data.length == 0){
                    $scope.driver.errorMessage = 'No Matching Vehicle Found';
                }else{

                    if(response.data.length == 2){
                        completeModel.driver.vehicleProfile = response.data[0];
                        $scope.driver.vehicleProfile = response.data[0];
                        $scope.driver.licensePlateNumber = response.data[0].regNumber;
                    }else{
                        $scope.driver.errorMessage = 'More than One vehicle Found';
                    }
                }
            });
        }

        if($scope.driver.licensePlateNumber.length > 4){
            if (event.keyCode == 8) {
                $scope.driver.licensePlateNumber = '';
            }
        }
    };


  	$scope.addLicencePlate = function(){
        
        if(!($scope.driver.licensePlateNumber.length<=4)){
            sharedProperties.setPath('/onMyWay');
        }
    };

  });