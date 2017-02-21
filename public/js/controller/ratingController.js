'use strict';

module.exports = function($scope, $http, $log, $rootScope, $location) {
$scope.movieinfo = $rootScope.moviebooking;
console.log( $scope.movieinfo);

var refreshrev = function () {
      $http.get('/rtrv/rtrv').success(function (response) {
          $scope.reviewlist = response;
          $scope.review = "";
      });
  };

  refreshrev();

$scope.addrev = function () {
    console.log($scope.review);
    // $scope.review.movieName=$scope.m.movieTitle;
    $http.post('/rtrv/rtrv', $scope.review).success(function (response) {
        console.log(response);
        console.log("Rating IS SUCCESSFUL");
        refreshrev();
    });
// module.exports = function($scope, $http, $log, $rootScope, $location) {
//   $scope.movieinfo = $rootScope.moviebooking;
//   console.log($scope.movieinfo);
// var refreshRate = function() {
//     $http.get('/rtrv/rtrv').success(function(response) {
//         console.log('READ IS SUCCESSFUL');
//         $scope.rateList = response;
//         $scope.rate = "";
//     });
// };
// refreshRate();


// $scope.doneRate= function (rateList) {
//   $scope.rate.Title=$scope.movieinfo.moviTitle;
// $scope.rate.cnCityName=$scope.movieinfo.moviYear;
//
//   $scope.rate.cnHallName=$scope.movieinfo.moviLanguage;
  // $scope.rate.cnDay=$scope.movieinfo.Day;
  // $scope.rate.cnShowTime=$scope.movieinfo.ShowTime;
  // $scope.rate.cnAmount=$scope.movieinfo.Amount;
  // $scope.rate.cnNoTickets=$scope.movieinfo.NoTickets;
  // $scope.rate.cnseatnumbers=$scope.movieinfo.seatnumbers;

    //
    // $http.post('/rtrv/rtrv', $scope.rate).success(function (response) {
    //         console.log(response);
    //
    //
    //     });
    //
    //
    //      };
};
}
