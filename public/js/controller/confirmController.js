'use strict';

module.exports = function($scope, $http,$log, $rootScope) {
$scope.confirmInfo =$rootScope.confirmPage;
// $scope.confirm.movieName=$scope.confirmInfo.Title;
// $scope.confirm.CityName=$scope.confirmInfo.CityName;
console.log($scope.confirmInfo);

var refreshConfirm = function () {

    $http.get('/con/con').success(function (response) {
      
        console.log('Confirm READ IS SUCCESSFUL');
        $scope.confirmlist = response;
        $scope.confirm = "";
});
};

refreshConfirm();

$scope.ConfirmBook = function (confirmlist) {
  $scope.confirm.conTitle=$scope.confirmInfo.Title;
  $scope.confirm.conCityName=$scope.confirmInfo.CityName;
  $scope.confirm.conHallName=$scope.confirmInfo.HallName;
  $scope.confirm.conDay=$scope.confirmInfo.Day;
  $scope.confirm.conShowTime=$scope.confirmInfo.ShowTime;
  $scope.confirm.conAmount=$scope.confirmInfo.Amount;
  $scope.confirm.connofseats=$scope.confirmInfo.nofseats;
  $scope.confirm.conseatNo=$scope.confirmInfo.seatNo;


    $http.post('/con/con', $scope.confirm).success(function (response) {
            console.log(response);


        });

        refreshConfirm();

};

};
