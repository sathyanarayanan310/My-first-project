'use strict';

module.exports = function($scope, $http,$log) {
  $scope.booking = 'booking';

  // var refresh = function () {
  //       $http.get('/movie/movie').success(function (response) {
  //           console.log('READ IS SUCCESSFUL');
  //           $scope.movitlist = response;
  //           $scope.movi = "";
  //       });
  //   };
  //
//   //   refresh();
// var movilist={};
//     $scope.get = function(){
//    console.log('Hi Welcome');
    // $http.get('http://www.omdbapi.com/?t='+$scope.movi.Title+'&y='+$scope.movi.Year+'&plot=short&r=json').success(function (response){
//          console.log(response);
//   for(var key in response)
//   {
//    if(key=='Title'|| key=='Year' || key== 'Language' || key== 'Poster' || key== 'Genre' || key== 'Director' || key== 'Actors' ||key=='Runtime')
//        {
//        movilist[key] = response[key];
//        }
//
//      console.log(movilist);
//
//        }
//             refresh5();
//    });
//  }
//
//  var refresh5 = function () {
//                              $http.get('/movie/movie').success(function (response) {
//                                  console.log('READ IS SUCCESSFUL');
//                                  $scope.movilist = response;
//                                  $scope.movi = "";
//                              });
//                          };
//
//     $scope.addMovie = function () {
//       //  console.log(movi);
//       //   $scope.movi=movi;
//         // console.log($scope.movi);
//         $http.post('/movie/movie',movilist).success(function (response) {
//             console.log(response);
//             console.log("CREATE IS SUCCESSFUL");
//             refresh5();
//         });
//     };

$scope.hall1=function(){
  alert($scope.map.Hall);
  var th_name=document.getElementById("thname").value;
  $scope.th=th_name;
  alert($scope.th);
  console.log($scope.th);
}

var refresh = function() {
    $http.get('/movie/movie').success(function(response) {
        console.log('READ IS SUCCESSFUL');
        $scope.moviList = response;
        $scope.movi = "";
    });
};

refresh();

$scope.addMovie = function(movi) {
  // var Year = document.getElementById("Yr").value;
  // console.log(Year);

    $http.get(`http://www.omdbapi.com/?t=${movi.moviTitle} +'&y='+${movi.moviYear}&plot=short&r=json`).success(function(response) {
        //console.log(response);

        //  $http.get('http://www.omdbapi.com/?t='+$scope.movi.Title+'&y='+$scope.movi.Year+'&plot=short&r=json').success(function (response){
        var movieObj = {};
        for (var key in response) {
            if (key == 'Title' || key == 'Year' || key == 'Language' || key == 'Poster' || key == 'Genre' || key == 'Director' || key == 'Actors' || key == 'Plot') {
                movieObj[key] = response[key];

            }
        }
       // $http.defaults.headers.post["Content-Type"] = "application/json";

        $http({
                method: 'POST',
                url: '/movie/movie',
                 headers: {'Content-Type': 'application/json'},
                data: movieObj
            })
            .then(function(response) {
                console.log(response);
                console.log("CREATE IS SUCCESSFUL");
                $log.info(response);
                refresh();
            });


        // var serviceName = 'movi'
        // $http.post('/movie/addMovie', movieObj).success(function(response) {
        //     console.log(response);
        //     console.log("CREATE IS SUCCESSFUL");
        //     refresh();
        // });

    });
    console.log($scope.movi);

};

$scope.removeMovie = function(movie) {
    //console.log(id);
    $http.delete('/movie/movie/' + movie._id).success(function(response) {
        console.log(response);
        console.log('DELETED SUCCESSFULLY');
        refresh();
    });
};

$scope.editMovie = function(movie) {
    $http.get('/movie/movie/' + movie._id).success(function(response) {
        $scope.movi = response[0];
    });
};

$scope.updateMovie = function() {
    console.log("REACHED UPDATE");
    console.log($scope.movi._id);
    $http.put('/movie/movie/' + $scope.movi._id, $scope.movi).success(function(response) {
        console.log(response);
        refresh();
    })
}
//theater controller.............


var refreshTheat = function () {
      $http.get('/theater/theater').success(function (response) {
          console.log('theater READ IS SUCCESSFUL');
          $scope.thtrelist = response;
          $scope.thtre = "";
      });
  };

  refreshTheat();

  $scope.addTheater = function () {
      console.log($scope.thtre);
      $http.post('/theater/theater', $scope.thtre).success(function (response) {
          console.log(response);
          console.log("theater CREATE IS SUCCESSFUL");
          refreshTheat();
      });
  };

// $http({
//   method: 'POST',
//   url:'thetr/addTheater',
//   headers:{'content-Type':'application/jason'},
//   data: $scope.thtre
// })
// .then(function(response){
//   console.log(response);
//   console.log("create is successfull");
//   refreshTheat();
// });


  $scope.removeTheater = function (id) {
      console.log(id);
      $http.delete('/theater/theater/' + id._id).success(function (response) {
          console.log(response);
          console.log('theater DELETED SUCCESSFULLY');
          refreshTheat();
      });
  };

  $scope.editTheater = function (id) {
       $http.get('/theater/theater/' + id._id).success(function (response) {
          $scope.thtre = response[0];
      });
  };

  $scope.updateTheater = function () {
      console.log("theater REACHED UPDATE");
      console.log($scope.thtre._id);
      $http.put('/theater/theater/' + $scope.thtre._id, $scope.thtre).success(function (response) {
          console.log(response);
          refreshTheat();
      })
  }





//city controllerr...........................
var refreshLocat = function () {
      $http.get('/cty/cty').success(function (response) {
          console.log('READ IS SUCCESSFUL');
          $scope.loclist = response;
          $scope.loc = "";
      });
  };

  refreshLocat();

  $scope.addCity = function () {
      console.log($scope.loc);
      $http.post('/cty/cty', $scope.loc).success(function (response) {
          console.log(response);
          console.log("CREATE IS SUCCESSFUL");
          refreshLocat();
      });
  };

  $scope.removeCity = function (id) {
      console.log(id);
      $http.delete('/cty/cty/' + id._id).success(function (response) {
          console.log(response);
          console.log('DELETED SUCCESSFULLY');
          refreshLocat();
      });
  };

  $scope.editCity = function (id) {
       $http.get('/cty/cty/' + id._id).success(function (response) {
          $scope.loc = response[0];
      });
  };

  $scope.updateCity = function () {
      console.log("REACHED UPDATE");
      console.log($scope.loc._id);
      $http.put('/cty/cty/' + $scope.loc._id, $scope.loc).success(function (response) {
          console.log(response);
          refreshLocat();
      })
  }



//showtime controllerr..............................

var refreshSho = function () {
      $http.get('/showt/showt').success(function (response) {
          console.log('READ IS SUCCESSFUL');
          $scope.timlist = response;
          $scope.tim = "";
      });
  };

  refreshSho();

  $scope.addShow = function () {
//     var app = angular.module('movieApp', []);
// app.controller('myCtrl', function($scope) {
//     $scope.count = 0;
// });
      console.log($scope.tim);
      $http.post('/showt/showt', $scope.tim).success(function (response) {
          console.log(response);
          console.log("CREATE IS SUCCESSFUL");
          refreshSho();
      });
  };

  $scope.removeShow = function (id) {
      console.log(id);
      $http.delete('/showt/showt/' + id._id).success(function (response) {
          console.log(response);
          console.log('DELETED SUCCESSFULLY');
          refreshSho();
      });
  };

  $scope.editShow = function (id) {
       $http.get('/showt/showt/' + id._id).success(function (response) {
          $scope.tim = response[0];
      });
  };

  $scope.updateShow = function () {
      console.log("REACHED UPDATE");
      console.log($scope.tim._id);
      $http.put('/showt/showt/' + $scope.tim._id, $scope.tim).success(function (response) {
          console.log(response);
          refreshSho();
      })
  }


  var refreshMape = function () {
        $http.get('/map/map').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.maplist = response;
            $scope.map = "";
        });
    };

    refreshMape();

    $scope.addMap = function () {
  //     var app = angular.module('movieApp', []);
  // app.controller('myCtrl', function($scope) {
  //     $scope.count = 0;
  // });
  var time = document.getElementById("st").value;
  console.log(time);
        console.log($scope.map);
        $http.post('/map/map',$scope.map).success(function (response) {
            console.log(response);
            console.log("CREATE IS SUCCESSFUL");

        });
          refreshMape();
    };

    $scope.removeMap = function (id) {
        console.log(id);
        $http.delete('/map/map/' + id._id).success(function (response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refreshMape();
        });
    };

    $scope.editMap = function (id) {
         $http.get('/map/map/' + id._id).success(function (response) {
            $scope.map = response[0];
        });
    };

    $scope.updateMap = function () {
        console.log("REACHED UPDATE");
        console.log($scope.map._id);
        $http.put('/map/map/' + $scope.map._id, $scope.map).success(function (response) {
            console.log(response);
            refreshMape();
        })
    }

};
