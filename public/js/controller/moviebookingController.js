'use strict';

module.exports = function($scope, $http, $log, $rootScope) {
  $scope.movieinfo = $rootScope.moviebooking;
  console.log($scope.movieinfo);

  var refreshMape = function () {
        $http.get('/map/map').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.maplist = response;
            $scope.map = "";
        });
    };

    refreshMape();
    
    };
