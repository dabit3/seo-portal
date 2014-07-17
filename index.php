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
  
  <div class="main-container" ng-controller="DashboardCtrl">
    <div class="ct-ng-view-header">
    </div>
    <div>
      <div>
        <div class="ct-ng-view-container">
            <div ct-nav-directive></div>
            <div class="spinner"><img src="img/now-loading.gif" alt="" style="width: 300px;"></div>
            <div class="loading-container h2-hover">
              <section class="ct-comments-main" ng-controller="FirebaseCtrl">
                <h5>Comments</h5>
                <h5><input name="" id="" placeholder="Leave comment" ng-model="newComment" ng-keydown="addComment($event)" class="" /></h5>
                <div class="ct-comments-comments">
                  <div ng-repeat="comment in comments" class="firebase-single-comment">
                       <span><b>{{comment.from}}</b><br /> {{comment.body}}</span>
                  </div>
                </div>
              </section>
              <h2>Visitors Today: <span class="ct-highlight">{{todayAndYesterday.rows[1][1]}}</span></h2>
              <h2>Visitors Yesterday: <span class="ct-highlight">{{todayAndYesterday.rows[0][1]}}</span></h2>
              <h2>Organic Visitors Today: <span class="ct-highlight">{{todayAndYesterday.rows[1][2]}}</span></h2>
              <h2>Organic Visitors Yesterday: <span class="ct-highlight">{{todayAndYesterday.rows[0][2]}}</span></h2>
              <h2>Visitors Last 30 Days: <span class="ct-highlight">{{total30days.rows[0][0]}}</span></h2>
              <h2>New Visitors Last 30 Days: <span class="ct-highlight">{{total30days.rows[0][2]}}</span></h2>
              <h2>Average Session Duration: <span class="ct-highlight">{{total30days.rows[0][5] / 60 | number:2}} Minutes</span></h2>
              <h2>Organic Traffic Last 30 days: <span class="ct-highlight">{{total30days.rows[0][6]}}</span></h2>
              <h2>PPC Traffic Last 30 days: <span class="ct-highlight">{{paid30Days.rows[0][0]}}</span></h2>
              <h2>Direct Traffic Last 30 days: <span class="ct-highlight">{{direct30days.rows[0][0]}}</span></h2>
             <!-- <button id="click-me1" class="app-open-close">Top Pages Last 30 Days</button>
              <div id="my-div1">
                <div id="keywords-wrapper"></div>
              </div>
              <button id="click-me2" class="app-open-close">Visitor Type Last 30 Days</button>
              <div id="my-div2">
                <div id="organic-wrapper"></div>
              </div>
              <button id="click-me3" class="app-open-close">Last 30 Days by State</button>
              <div id="my-div3">
                <div id="ppc-wrapper"></div>
              </div>
                <script src="js/dashboard.js"></script> -->
              <section class="table-data">
                <div ng-contoller="TableCtrl">
                  <ul>
                    <li ng-repeat="url in tableData.row[0][1]"></li>
                  </ul>
                </div>
              </section>
              <section class="ct-previous-month">
                <h3>Last 30 Days</h3>
                <div id="ct-snapshot" ></div>
              </section>

            </div>
        </div>
      </div>
    </div>
  </div>
  <!-- In production use:
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
  -->
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
  <script src="js/initHome.js"></script>
  <script src="js/snapshot.js"></script>
  
</body>
</html>

