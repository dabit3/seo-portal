'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'ngResource',
  'ngAnimate',
  'firebase'
])
.config(['$httpProvider', '$routeProvider', function($httpProvider, $routeProvider) {

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
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }]);
