'use strict';

module.exports = function($scope, $http) {

  var refresh = function () {
        $http.get('/show/show').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.showtimelist = response;
            $scope.showtime = "";
        });
    };

    refresh();

    $scope.addShowtime = function () {
        console.log($scope.showtime);
        $http.post('/show/show', $scope.showtime).success(function (response) {
            console.log(response);
            console.log("CREATE IS SUCCESSFUL");
            refresh();
        });
    };

    $scope.removeShowtime = function (id) {
        console.log(id);
        $http.delete('/show/show' + id._id).success(function (response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refresh();
        });
    };

    $scope.editShowtime = function (id) {
         $http.get('/show/show/' + id._id).success(function (response) {
            $scope.showtime = response[0];
        });
    };

    $scope.updateShowtime = function () {
        console.log("REACHED UPDATE");
        console.log($scope.showtime._id);
        $http.put('/show/show/' + $scope.showtime._id, $scope.showtime).success(function (response) {
            console.log(response);
            refresh();
        })
    }
};
