define(['angular', "highcharts","exporting", "ng-map"], function() {
  var borgProgram = angular.module("borgProgram", ["ngMap"]);
  
    borgProgram.controller('mainPage', function($scope) {
        $scope.mouseover = function() {
            //do some stuff here
        };
        $scope.mouseout = function() {
          //do some stuff here
        };
        
        $scope.click = function(e, city, state) {
            $scope.cityId = city;
            $scope.stateId = state;
            $scope.loadChart = true;
            $('#cityChart').modal();
        };
        
        $scope.customMarkers = [
          {address: "Bangalore Karnataka India ", "class": "my1", "stateName":"Karnataka", "city":"Bangalore","currentWeather":"23","symbol":"d"},
          {address: "Jamshedpur Jharkhand India",  "class": "my2", "stateName":"Jharkhand", "city":"Jamshedpur","currentWeather":"22","symbol":"n"},
        ]; 
        
      });
      
  return borgProgram;
});