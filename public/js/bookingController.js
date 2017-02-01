'use strict';

module.exports = function($scope, $http) {

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

var movieObj={};
  $scope.get = function(){
      console.log('Hi Welcome');
       $http.get('http://www.omdbapi.com/?t='+$scope.movieObj.movieName+'&y='+$scope.movieObj.movieYear+'&plot=short&r=json').success(function (response){
            console.log(response);
     for(var key in response)
     {
      if(key=='Title'|| key=='Year' || key== 'Plot' || key== 'Poster' || key== 'Genre'  || key== 'Runtime')
          {
          movieObj[key] = response[key];
          }

        console.log(movieObj);

          }
               refresh();
      });
    }
  var refresh = function () {
        $http.get('/m/m').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.movieObj = response;
            $scope.oData = "";
        });
    };

    refresh();

    $scope.add = function () {
        console.log($scope.movieObj);
        // console.log(getdata);
      // console.log(oData1);
        $http.post('/m/m', movieObj).success(function (response) {
            console.log(response);
            console.log("movie  IS added  SUCCESSFUL");
            refresh();
        });
    };

    // $scope.removeMovie = function (id) {
    //     console.log(id);
    //     $http.delete('/movie/movie/' + id._id).success(function (response) {
    //         console.log(response);
    //         console.log('DELETED SUCCESSFULLY');
    //         refresh();
    //     });
    // };
    //
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
