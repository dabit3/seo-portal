<?php
require 'admin-login.php';
?>
<!doctype html>
<html lang="en" ng-app="myApp">
<head>
  <meta charset="utf-8">
  <title>SEO Dashboard</title>
  <link rel="stylesheet" href="css/app.css"/>
  <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
</head>
<body ng-controller="BodyCtrl">
  <div ng-include src="'partials/ct-header.html'"></div>
  <div ng-include src="'partials/ct-aside.html'"></div>
  
  <div class="main-container" >
    <div class="ct-ng-view-header">
    </div>
    <div>
      <div>
        <div class="ct-ng-view-container" ng-controller="VisitorInformationCtrl">
            <div ct-nav-directive></div>

            <div class="spinner"><img src="img/now-loading.gif" alt="" style="width: 300px;"></div>
            <div class="ct-ng-view-container" ng-controller="DashboardCtrl as dash">
            <div class="loading-container">
              <button id="click-me2" class="app-open-close">New VS Returning Visitors Last 30 Days</button>
              <div id="my-div2">
                <div id="total-traffic-wrapper-2" class="ct-scale"></div>
              </div>
              <button id="click-me3" class="app-open-close">Top 5 Pages Last 30 Days</button>
              <div id="my-div3">
                <div id="total-traffic-wrapper-3" class="ct-scale"></div>
              </div>
              <button id="click-me1" class="app-open-close">Traffic Type Last 30 Days</button>
              <div id="my-div1">
                <div id="traffic-type" class="ct-scale"></div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- In production use:
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
  -->
  <style>
  .aside-hero {
    height: 3750px;
    }</style>
  <script type="text/javascript" src='https://www.google.com/jsapi?autoload={"modules":[{"name":"visualization","version":"1"}]}'></script>
  <script src="lib/jquery.js"></script>
  <script src="lib/angular/angular.js"></script>
  <script type='text/javascript' src='https://cdn.firebase.com/js/client/1.0.17/firebase.js'></script>
  <script src="https://cdn.firebase.com/libs/angularfire/0.7.1/angularfire.min.js"></script>
  <script src="lib/angular/angular-animate.js"></script>
  <script src="lib/angular/angular-resource.js"></script>
  <script src="lib/angular/angular-route.js"></script>
  <script src="js/app.js"></script>
  <script src="js/services.js"></script>
  <script src="js/controllers.js"></script>
  <script src="js/filters.js"></script>
  <script src="js/directives.js"></script>
  <script src="js/total-traffic.js"></script>
  <script src="js/initMed.js"></script>
</body>
</html>
