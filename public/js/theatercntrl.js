'use strict';

module.exports = function($scope, $http) {
  $scope.theater = 'theater';

  var refresh = function () {
        $http.get('/the/the').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.theaterlist = response;
            $scope.theater = "";
        });
    };

    refresh();

    $scope.addTheater = function () {
        console.log($scope.theater);
        $http.post('/the/the', $scope.theater).success(function (response) {
            console.log(response);
            console.log("CREATE IS SUCCESSFUL");
            refresh();
        });
    };

    $scope.removeTheater = function (id) {
        console.log(id);
        $http.delete('/the/the/' + id._id).success(function (response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refresh();
        });
    };

    $scope.editTheater = function (id) {
         $http.get('/the/the/' + id._id).success(function (response) {
            $scope.theater = response[0];
        });
    };

    $scope.updateTheater = function () {
        console.log("REACHED UPDATE");
        console.log($scope.theater._id);
        $http.put('/the/the/' + $scope.theater._id, $scope.theater).success(function (response) {
            console.log(response);
            refresh();
        })
    }
};
