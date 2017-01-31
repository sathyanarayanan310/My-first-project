'use strict';

module.exports = function($scope, $http) {


  var refresh = function () {
        $http.get('/loc/loc').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.locationlist = response;
            $scope.location = "";
        });
    };

    refresh();

    $scope.addLocation = function () {
        console.log($scope.location);
        $http.post('/loc/loc', $scope.location).success(function (response) {
            console.log(response);
            console.log("CREATE IS SUCCESSFUL");
            refresh();
        });
    };

    $scope.removeLocation = function (id) {
        console.log(id);
        $http.delete('/loc/loc/' + id._id).success(function (response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refresh();
        });
    };

    $scope.editLocation = function (id) {
         $http.get('/loc/loc/' + id._id).success(function (response) {
            $scope.location = response[0];
        });
    };

    $scope.updateLocation = function () {
        console.log("REACHED UPDATE");
        console.log($scope.location._id);
        $http.put('/loc/loc/' + $scope.location._id, $scope.location).success(function (response) {
            console.log(response);
            refresh();
        })
    }
};
