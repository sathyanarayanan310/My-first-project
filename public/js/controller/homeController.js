'use strict';

module.exports = function($scope, $http, $location, $rootScope) {


var r = function() {
    $http.get('/movie/movie').success(function(response) {
        console.log('READ IS SUCCESSFUL');
        $scope.moviList = response;
        $scope.movi = "";
    });
  };

    r();
    // $scope.bookingmovi = function(m){
    //   console.log(m+ "booking is successfull");
    // };



$scope.bookingmovi= function (m) {
                 $rootScope.moviebooking=m;
// alert($rootScope.moviebooking);
$location.path('/moviebooking');
      };

      $scope.ratingreview= function (m) {
                       $rootScope.moviebooking=m;
      // alert($rootScope.moviebooking);
      $location.path('/rating');
            };


};
// 'use strict';
//
// module.exports = function($scope, $http) {
//
//
// var r = function() {
//     $http.get('/movie/movie').success(function(response) {
//         console.log('READ IS SUCCESSFUL');
//         $scope.moviList = response;
//         $scope.movi = "";
//     });
//   };
//     r();
//     $scope.bookingmovi = function(m){
//       console.log(m+ "booking is successfull");
//     };
//
// };
