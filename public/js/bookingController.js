'use strict';

module.exports = function($scope, $http,) {
$scope.booking = 'booking';

  var refresh = function() {
          $http.get('/m/getdata').success(function(response) {
              console.log('getting data from server');
              $scope.List = response;
              $scope.data = "";
          });
      };
refresh();

      $scope.addMovie = function(data) {
            // $http.get(`http://www.omdbapi.com/?t=${data.movieName}&plot=short&r=json`).success(function(response) {
                 $http.get('http://www.omdbapi.com/?t='+$scope.data.movieName+'&y='+$scope.data.movieYear+'&plot=short&r=json').success(function (response){
                var movieObj = {};
                for (var key in response) {
                    if (key == 'Title' || key == 'Language' || key == 'Poster' || key == 'Genre' || key == 'Director' || key == 'Actors') {
                        movieObj[key] = response[key];

                    }
                }
                $http.post('/m/add', movieObj).success(function (response) {
                           console.log(response);
                           console.log("movie  is added  SUCCESSFUL");

                  refresh();
                // //
                // $http({
                //         method: 'POST',
                //         url: '/m/add',
                //          headers: {'Content-Type': 'application/json'},
                //         data: movieObj
                //     })
                //     .then(function(response) {
                //         console.log(response);
                //         console.log("movie  IS added  SUCCESSFUL");
                //         $log.info(response);
                //         refresh();
                //     });


                // var serviceName = 'movi'
                // $http.post('/movie/addMovie', movieObj).success(function(response) {
                //     console.log(response);
                //     console.log("CREATE IS SUCCESSFUL");
                //     refresh();
                // });

            });

            console.log($scope.contact);

        };





  // var $Form = $('form'), $Container = $('#container');
  // $Container.hide();
  // $Form.on('submit', function(p_oEvent){
  //     var sUrl, sMovie, y, oData1, year;
  //     p_oEvent.preventDefault();
  // sMovie = $Form.find('input').val();
  // year = $Form.find('select').val();
  //
  // console.log(year);
  //     sUrl = 'https://www.omdbapi.com/?t=' + sMovie + '&y=' + year + '&type=movie&tomatoes=true'
  //     $.ajax(sUrl, {
  //         complete: function(p_oXHR, p_sStatus){
  //             oData1 = $.parseJSON(p_oXHR.responseText);
  //             console.log(oData1);
  //             $Container.find('.title').text(oData1.Title);
  //             $Container.find('.language').text(oData1.language);
  //             $Container.find('.rt').text(oData1.Runtime);
  //             $Container.find('.year').text(oData1.Year);
  //             $Container.find('.Genre').text(oData1.Genre);
  //             $Container.find('.plot').text(oData1.Plot);
  //             $Container.find('.poster').html('<img src="' + oData1.Poster + '"/>');
  //             $Container.show();
  //             $scope.getdata=oData1;
  //         }
  //     });
  // });
//
// var movieObj={};
//   $scope.get = function(){
//       console.log('Hi Welcome');
//        $http.get('http://www.omdbapi.com/?t='+$scope.movieObj.movieName+'&y='+$scope.movieObj.movieYear+'&plot=short&r=json').success(function (response){
//             console.log(response);
//      for(var key in response)
//      {
//       if(key=='Title'|| key=='Year' || key== 'Plot' || key== 'Poster' || key== 'Genre'  || key== 'Runtime' || key== 'Language')
//           {
//           movieObj[key] = response[key];
//           }
//
//         console.log(movieObj);
// // $scope.data=movieObj;
//           }
//                refresh();
//       });
//     }
//   var refresh = function () {
//         $http.get('/m/m').success(function (response) {
//             console.log('READ IS SUCCESSFUL');
//             $scope.movieObj = response;
//             $scope.oData = "";
//         });
//     };
//
//     refresh();
//
//     $scope.add = function () {
//         // console.log($scope.movieObj);
//         // console.log($scope.data);
//       // console.log(oData1);
//         $http.post('/m/m', movieObj).success(function (response) {
//             console.log(response);
//             console.log("movie  is added  SUCCESSFUL");
//             refresh();
//         });
//     };
    //
    // $scope.removeMovie = function (id) {
    //     console.log(id);
    //     $http.delete('/movie/movie/' + id._id).success(function (response) {
    //         console.log(response);
    //         console.log('DELETED SUCCESSFULLY');
    //         refresh();
    //     });
    // };
    // //
    // $scope.editMovie = function (id) {
    //      $http.get('/movie/movie/' + id._id).success(function (response) {
    //         $scope.oDate = response[0];
    //     });
    // };
    //
    // $scope.updateMovie = function () {
    //     console.log("REACHED UPDATE");
    //     console.log($scope.oDate._id);
    //     $http.put('/movie/movie/' + $scope.oDate._id, $scope.oDate).success(function (response) {
    //         console.log(response);
    //         refresh();
    //     })
    // }
};
