'use strict';

module.exports = function($scope, $http,$log, $rootScope) {
  $scope.movieinfo = $rootScope.bookedMovie;
  console.log($scope.movieinfo );

//  $scope.poster=$rootScope.bookedPoster;
// alert($scope.title);
  // var refresh = function() {
  //     $rootScope.bookedMovie=$scope.title;
  //     $rootScope.bookedPoster=$scope.poster;
  //     }
  //     refresh();



  var refreshMape = function () {
        $http.get('/map/map').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.maplist = response;
            $scope.map = "";
        });
    };

    refreshMape();
    };
