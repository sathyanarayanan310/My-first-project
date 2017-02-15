'use strict';

var angular = require('angular');
require('angular-route');

var app = angular.module('movieApp', [ 'ngRoute' ]);

require('./service');
require('./controller');

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
  .when('/moviebooking', {
    templateUrl: 'views/moviebooking.html',
    controller: 'MovieBookingController',
  })
  .otherwise({
    redirectTo: 'views/home.html',
  });
});
