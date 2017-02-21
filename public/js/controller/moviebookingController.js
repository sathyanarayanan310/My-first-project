'use strict';

module.exports = function($scope, $http, $log, $rootScope, $location) {
  $scope.movieinfo = $rootScope.moviebooking;
  var date;
 var details=[];
$scope.seat=false;  var i;
$rootScope.seatArrange=[];
  console.log($scope.movieinfo);

  var refreshBookin = function () {
        $http.get('/book/book').success(function (response) {
            console.log('book READ IS SUCCESSFUL');
            $scope.Booklist = response;
            $scope.book = "";
    });
    };

    refreshBookin();

  var refreshMape = function () {
        $http.get('/map/map').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.maplist = response;
            $scope.map = "";
        });
    };
      refreshMape();


    var refreshLocat = function () {
          $http.get('/cty/cty').success(function (response) {
              console.log('READ IS SUCCESSFUL');
              $scope.loclist = response;
              $scope.loc = "";
          });
      };
        refreshLocat();

        var refreshSho = function () {
              $http.get('/showt/showt').success(function (response) {
                  console.log('READ IS SUCCESSFUL');
                  $scope.timlist = response;
                  $scope.tim = "";
              });
          };

          refreshSho();

          var refreshTheat = function () {
                $http.get('/theater/theater').success(function (response) {
                    console.log('theater READ IS SUCCESSFUL');
                    $scope.thtrelist = response;
                    $scope.thtre = "";
                });
            };

            refreshTheat();

            var refresh = function() {
                $http.get('/movie/movie').success(function(response) {
                    console.log('READ IS SUCCESSFUL');
                    $scope.moviList = response;
                    $scope.movi = "";
                });
            };

            refresh();

            // var refreshConfirm = function () {
            //
            //     $http.get('/con/con').success(function (response) {
            //         console.log('Confirm READ IS SUCCESSFUL');
            //         $scope.confirmlist = response;
            //         $scope.confirm = "";
            // });
            // };
            //
            // refreshConfirm();

            $scope.confirm = function() {
              $scope.book.FilmName=$scope.movieinfo.moviTitle;
            $scope.book.seatNo=selected;
                console.log($scope.book);
                $http.post('/book/book', $scope.book).success(function (response) {
                        console.log(response);

                    });
                             $rootScope.confirmPage=$scope.book;
            // alert($rootScope.moviebooking);
            $location.path('/confirm');
            refreshBookin();
          };

          $scope.submitForm=function(){

          }

    var selected=[];
    var reserved=[];
    $scope.rows = ['A', 'B', 'C', 'D',];
       $scope.cols = [ 1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];

       $scope.rows1 = ['E', 'F', 'G', 'H',];
          $scope.cols1 = [ 1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];

          $scope.rows2 = ['I', 'J', 'K', 'L',];
             $scope.cols2 = [ 1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];


$scope.getStatus = function(seatPos) {
  if(reserved.indexOf(seatPos) > -1) {
                return 'reserved';
            } else if(selected.indexOf(seatPos) > -1) {
                return 'selected';
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

      document.getElementById("seating").innerHTML=selected;
      $scope.NumberOfSeats=selected.length;
// seatClick();
 }
};
// var date=[];
$scope.d=function(){
 date=document.getElementById("datebook").value;
// alert(date);
console.log(date);
}

$scope.add =function(){

  $scope.book.Day=date;
  $scope.book.Title=$scope.movieinfo.moviTitle;
 console.log($scope.book.FilmName);
 console.log($scope.book.CityName);
 console.log($scope.book.HallName);
 console.log($scope.book.Day);

 console.log($scope.book.ShowTime);

 try
 {
 for(i=0;i<=$scope.confirmlist.length;i++)
       {
         if($scope.confirmlist.length==0)
         {
           $scope.seat = true;
         }
         else{
           console.log($scope.confirmlist[i].conTitle);
           console.log($scope.confirmlist[i].conCityName);
           console.log($scope.confirmlist[i].conHallName);
           console.log($scope.confirmlist[i].conDay);
           console.log($scope.confirmlist[i].conShowTime);




       if ($scope.confirmlist[i].conTitle==$scope.book.FilmName && $scope.confirmlist[i].conCityName==$scope.book.CityName  && $scope.confirmlist[i].conHallName==$scope.book.HallName  && $scope.confirmlist[i].conDay==$scope.book.Day && $scope.confirmlist[i].conShowTime==$scope.book.ShowTime){
       $scope.seat = true;
            console.log($scope.confirmlist[i].conTitle);
            console.log($scope.confirmlist[i].conCityName);
            console.log($scope.confirmlist[i].conHallName);
            console.log($scope.confirmlist[i].conDay);
            console.log($scope.confirmlist[i].conShowTime);



            reserved=$scope.confirmlist[i].conseatnumbers;
            console.log(reserved);

      }
       else
       {
          $scope.seatNo = true;
       }
     }
       }

    }
     catch(e){}

 };
 };
