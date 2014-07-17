'use strict';

/* Controllers */
var fileToGet = 'https://connect-final-proxy.appspot.com/query?id=ahVzfmNvbm5lY3QtZmluYWwtcHJveHlyFQsSCEFwaVF1ZXJ5GICAgIDglYMKDA&format=json';
// var fileToGet = 'js/mydata.json';

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', function($scope) {

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }])

  .controller('TableCtrl', ['$scope', '$http', '$animate', function($scope, $http, $animate) {

  var tableData = "Target_Url"
  $http.get(tableData)
    .succes(function(data) {
      $scope.tableData = data;
      console.log(data);
    })

  }])

  .controller('FirebaseCtrl', ['$scope', '$http', '$firebase', function($scope, $http, $firebase) {
      var ref = new Firebase("https://vivid-fire-930.firebaseio.com/");
      $scope.comments = $firebase(ref);
      $scope.username = 'Guest' + Math.floor(Math.random() * 101);
      
      $scope.addComment = function(e) {
        if (e.keyCode != 13) return;
        $scope.comments.$add({
          from: $scope.username,
          body: $scope.newComment
        });
        $scope.newComment = "";
      }
    }
  ]) 

  .controller('NavCtrl1', ['$scope', '$http', '$resource', '$templateCache', function($scope, $http, $resource, $templateCache) {

   
    $scope.client = 'Evangeline Specialties';
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth()+1;
    if (month<10){
    month="0" + month;
    var day=d.getDate();
    $scope.date=year + "-" + month + "-" + day;

    /* $scope.method = 'GET';
    $scope.url = fileToGet;

    $scope.code = null;
    $scope.response = null;

    $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
      success(function(data, status) {
        $scope.status = status;
        $scope.data = data;
      }).
      error(function(data, status) {
        $scope.data = data || "Request failed";
        $scope.status = status;
      });

     $scope.someSection = $scope.data; */

      /* var getDefs = new myFactory(fileToGet).get(function(data) {

      $scope.wholeFile = data;
      // $scope.wholeFile should contain the entire JSON-formatted object

      $scope.someSection = data.profileInfo.webPropertyId;
      // $scope.someSection should contain the "varX" and "varY" items now

      // get the stringified value
    }); */

};

  }])
  .controller('BodyCtrl', ['$scope', '$http', function($scope, $http) {

      var todayAndYesterday = "https://connect-final-proxy.appspot.com/query?id=ahVzfmNvbm5lY3QtZmluYWwtcHJveHlyFQsSCEFwaVF1ZXJ5GICAgIDD0McIDA&format=json&callback=JSON_CALLBACK"
      $http.jsonp(todayAndYesterday)
        .success(function(data) {
            $scope.todayAndYesterday = data;
        });

      
    }])

  .controller('GeneralCtrl', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.title = "General Performance"
  }])

  .controller('OrganicCtrl', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.title = "Organic Performance"
  }])

  .controller('VisitorInformationCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.title = "Visitor Information"
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

  .controller('MOMCtrl', ['$scope', '$http', function($scope, $http) {
      $scope.title = "MOM Comparisons"
  }])

  .controller('DashboardCtrl', ['$scope', '$http', function($scope, $http) {
      $scope.title = "Dashboard"  

      var paidTraffic30Days = "https://connect-final-proxy.appspot.com/query?id=ahVzfmNvbm5lY3QtZmluYWwtcHJveHlyFQsSCEFwaVF1ZXJ5GICAgICl6IsLDA&format=json&callback=JSON_CALLBACK"
      $http.jsonp(paidTraffic30Days)
        .success(function(data) {
            $scope.paid30Days = data;
        })

      var direct30Days = "https://connect-final-proxy.appspot.com/query?id=ahVzfmNvbm5lY3QtZmluYWwtcHJveHlyFQsSCEFwaVF1ZXJ5GICAgIDU8IoLDA&format=json&callback=JSON_CALLBACK"
      $http.jsonp(direct30Days)
        .success(function(data) {
          $scope.direct30days = data;
        })

      var total30Days = "https://connect-final-proxy.appspot.com/query?id=ahVzfmNvbm5lY3QtZmluYWwtcHJveHlyFQsSCEFwaVF1ZXJ5GICAgIDUuoYJDA&format=json&callback=JSON_CALLBACK"
      $http.jsonp(total30Days)
        .success(function(data) {
          $scope.total30days = data;
        })
  }])
  
  .controller('TotalTrafficCtrl', ['$scope', function($scope) {
  	$scope.title = 'Total Traffic',
  	$scope.client = 'Evangeline Specialties',
  	$scope.visitors_today = 44,
  	$scope.date = '1/31/2014'
  }])
  .controller('CollapseDemoCtrl', ['$scope', function($scope) {
    function CollapseDemoCtrl($scope) {
      $scope.isCollapsed = 1;
    }
  }])
  .controller('CollapseDemoCtrl2', ['$scope', function($scope) {
    function CollapseDemoCtrl2($scope) {
      $scope.isCollapsed = 1;
    }
  }])

  .controller('CollapseDemoCtrl3', ['$scope', function($scope) {
    function CollapseDemoCtrl2($scope) {
      $scope.isCollapsed = 1;
    }
  }])

  .controller('TopFiveCtrl', ['$scope', function($scope) {
    function TopFiveCtrl($scope) {
      $scope.isCollapsed = 1;
    }
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

  }]);
