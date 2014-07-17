'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dashboard', {templateUrl: 'partials/dashboard.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when(
  	'/view3', 
  	{
  		templateUrl: 'partials/testing.html', 
  		controller: 'TestingCtrl'
  	});
  $routeProvider.when(
    '/total-traffic', 
    {
      templateUrl: 'partials/total-traffic.html', 
      controller: 'TotalTrafficCtrl'
    });
  $routeProvider.otherwise({redirectTo: '/dashboard'});
  }]);
