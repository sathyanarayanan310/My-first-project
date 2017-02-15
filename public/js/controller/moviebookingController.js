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

    var selected=[];
    var reserved=[];
    $scope.rows = ['A', 'B', 'C', 'D',];
       $scope.cols = [ 1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10, 11, 12, 13, 14, 15, 16 ];

       $scope.rows1 = ['E', 'F', 'G', 'H',];
          $scope.cols1 = [ 1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10, 11, 12, 13, 14, 15, 16 ];

          $scope.rows2 = ['I', 'J', 'K', 'L',];
             $scope.cols2 = [ 1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10, 11, 12, 13, 14, 15, 16 ];


$scope.getStatus = function(seatPos) {
  if(reserved.indexOf(seatPos) > -1) {
                return 'reserved';
            } else if(selected.indexOf(seatPos) > -1) {
                return selected;
            }

        }
$scope.seatClicked=function(seatPos){
  var index = selected.indexOf(seatPos);
   if(index != -1) {
       // seat already selected, remove
       selected.splice(index, 1)
   } else {
       // new seat, push
       selected.push(seatPos);
       console.log(selected);
     }
      document.getElementById("seating").innerHTML=selected;
// seatClick();
}
    };
