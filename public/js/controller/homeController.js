'use strict';

module.exports = function($scope) {
  $scope.home = 'homepage';
console,log($scope.home);
};

var refresh = function() {
    $http.get('/movie/movie').success(function(response) {
        console.log('READ IS SUCCESSFUL');
        $scope.moviList = response;
        $scope.movi = "";
    });
};
