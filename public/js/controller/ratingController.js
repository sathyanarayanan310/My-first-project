'use strict';

module.exports = function($scope, $http, $log, $rootScope, $location) {
$scope.movieinfo = $rootScope.moviebooking;

console.log(  $scope.movieinfo );

var refreshRate = function() {
    $http.get('/rt/rt').success(function(response) {
        console.log('rating IS SUCCESSFUL');
        $scope.rateList = response;
        $scope.rate = "";
    });
};
refreshRate();

var self = this;
 self.submit = function() {
     console.log('Form is submitted with following user');
};

var refresh = function() {
    $http.get('/movie/movie').success(function(response) {
        console.log('READ IS SUCCESSFUL');
        $scope.moviList = response;
        $scope.movi = "";
        // $scope.movieObj=$scope.moviList;
    });
};

refresh();
var cnt=0;

$scope.doneRate= function () {
  $scope.rate.Title=$scope.movieinfo.moviTitle;
$scope.rate.moviYear=$scope.movieinfo.moviYear;
  $scope.rate.moviLanguage=$scope.movieinfo.moviLanguage;
  // var mname=$scope.rate.Title;
  $http.post('/rt/rt', $scope.rate).success(function (response) {
            console.log(response);

            $http.get('/rt/rt').success(function (response) {
                 console.log(response);
                 var mname=$scope.rate.Title;
             var count=0;
             var i;
               try
                {
                for(i=0;i<=response.length;i++){


          if(response[i].Title==mname)
          {
              console.log(response[i].rating);
                cnt++;
                count+=parseInt(response[i].rating);
                  console.log(count);
                }

            }

                }
             catch(e){}

              if(count>0)
              {
                  $scope.rate.Total=Math.round(count*100/(cnt*5));
              console.log($scope.rate.Total);

                  }

                  });
                  });
            //  $("#myModal").modal();

           }

refreshRate();


$scope.confirmRate= function () {
                          console.log("REACHED UPDATE");
                          var i;
                          for(i=0;i<=$scope.maplist.length;i++){

                                  if($scope.maplist[i].Film== $scope.rate.Title){
                  console.log($scope.maplist[i]._id);

                            $scope.maplist[i].Rating=$scope.rate.Total;
                            console.log($scope.maplist[i]);
                            $http.put('/map/map/' + $scope.maplist[i]._id, $scope.maplist[i]).success(function (response) {
                                console.log(response);
                                refresh();
                                alert("Rating successfull... Thanks for Rating");
                                // $location.path('/home');
                              })
                            }
                          }
                        }
  };
