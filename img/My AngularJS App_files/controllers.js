'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', function($scope) {
  	$scope.title = 'Dashboard',
  	$scope.client = 'Evangeline Specialties',
  	$scope.visitors_today = 44,
  	$scope.date = '1/31/2014'
  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('TestingCtrl', ['$scope', '$timeout',  function($scope, $timeout) {
        $timeout(function() {
          $scope.myHref = 'http://www.google.com';
        }, 1500);
        $timeout(function() {
          $scope.imgSrc = 'https://www.google.com/images/srpr/logo11w.png';
        }, 1500);

        $scope.thisProperty = "Hello Computer",
        $scope.someAction = function() {
          $scope.thisProperty = "Hello Human";
        };
  }])
  .controller('TotalTrafficCtrl', ['$scope', function($scope) {
  	$scope.title = 'Total Traffic',
  	$scope.client = 'Evangeline Specialties',
  	$scope.visitors_today = 44,
  	$scope.date = '1/31/2014'
  }])
  .controller('GraphLoaderController', ['$scope', function($scope) {

  }])
  .controller('InjectingController', ['$scope', function($scope){
    $scope.someModel = {
      someProperty: 'Hello Computer'
    }
    $scope.thisAction = function() {
      $scope.someModel.someProperty = 'Hell You Sick Bastard';
    };
  }])
  .controller('AsideController', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.myclick = function() {
           $scope.$apply(function() {
                $timeout(function() {
                browserWrapper.draw();
               }, 200); 

                $timeout(function() {
                 visitsWrapper.draw();
               }, 200); 
               // visitsWrapper.draw();
             });
        };
  }]);
