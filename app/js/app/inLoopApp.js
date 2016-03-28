var inLoopApp = angular.module('inLoopApp', ['ngRoute','LocalStorageModule']).config(['localStorageServiceProvider', function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('ls');
}]);