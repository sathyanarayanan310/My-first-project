'use strict';

module.exports = function($scope, $http) {


var r = function() {
    $http.get('/movie/movie').success(function(response) {
        console.log('READ IS SUCCESSFUL');
        $scope.moviList = response;
        $scope.movi = "";
    });
  };
    r();
    $scope.bookingmovi = function(m){
      console.log(m+ "booking is successfull");
    };

};
