'use strict';

var angular = require('angular');
require('angular-route');

var app = angular.module('movieApp', [ 'ngRoute' ]);

require('./service');
require('./controller');
app.filter('unique', function() {

   return function(collection, keyname) {

      var output = [],
          keys = [];


      angular.forEach(collection, function(item) {

          var key = item[keyname];

          if(keys.indexOf(key) === -1) {

              keys.push(key);

              output.push(item);
          }
      });

      return output;
   };
});
// var uniqueNames = [];
//   var uniqueObj = [];
//    for(i = 0; i< data.length; i++){
//     if(uniqueNames.indexOf(data[i].City) === -1){
//     uniqueObj.push(data[i])
//     uniqueNames.push(data[i].City);
//   }
// }

app.config(function($routeProvider) {

  $routeProvider.when('/', {
    templateUrl: 'views/home.html',
    controller: 'HomeController',
  })
  .when('/booking', {
    templateUrl: 'views/booking.html',
    controller: 'BookingController',
  })
  .when('/cancellation', {
    templateUrl: 'views/cancellation.html',
    controller: 'CancellationController',
  })
  .when('/admin', {
    templateUrl: 'views/admin.html',
    // controller: 'CancellationController',
  })
  .when('/sample', {
    templateUrl: 'views/sample.html',
    // controller: 'CancellationController',
  })
  .when('/moviebooking', {
    templateUrl: 'views/moviebooking.html',
    controller: 'MovieBookingController',

  })
  .when('/rating', {
    templateUrl: 'views/rating.html',
    controller: 'RatingController',
  })
  .when('/confirm', {
    templateUrl: 'views/confirm.html',
    controller: 'ConfirmController',
  })
  .otherwise({
    redirectTo: 'views/home.html',
  });
});
