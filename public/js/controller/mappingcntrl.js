'use strict';

module.exports = function($scope, $http) {

  var refresh = function () {
        $http.get('/map/map').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.mappinglist = response;
            $scope.mapping = "";
        });
    };

    refresh();

    $scope.addMapping = function () {
        console.log($scope.mapping);
        $http.post('/map/map', $scope.mapping).success(function (response) {
            console.log(response);
            console.log("CREATE IS SUCCESSFUL");
            refresh();
        });
    };

    $scope.removeMapping = function (id) {
        console.log(id);
        $http.delete('/map/map/' + id._id).success(function (response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refresh();
        });
    };

    $scope.editMapping = function (id) {
         $http.get('/map/map/' + id._id).success(function (response) {
            $scope.mapping = response[0];
        });
    };

    $scope.updateMapping = function () {
        console.log("REACHED UPDATE");
        console.log($scope.mapping._id);
        $http.put('/map/map/' + $scope.._id, $scope.mapping).success(function (response) {
            console.log(response);
            refresh();
        })
    }
};
