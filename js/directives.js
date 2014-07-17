
'use strict';

/* Directives */

angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).
  directive('myDirective', function() {
  	return {
  		restrict: 'A',
  		replace: true,
  		scope: {
  			myUrl: '=someAttr',
  			myLinkText: '@'
  		},
  		template: '<div><label>My Url Field</label>\
  		<input type="text" ng-model="myUrl" />\
  		<a href="{{myUrl}}">{{myLinkText}}</a>\
  		</div>'
  	}
  })
  .directive('ctNavDirective', function() {
    return {
      restrict: 'A',
      templateUrl: 'partials/ct-nav-template.html',
      controller: 'NavCtrl1'
    }
  })

  .directive('ctAside', function() {
    return {
      restrict: 'A',
      templateUrl: 'partials/ct-aside.html'
    }
  })
  .directive('ctHeader', function() {
    return {
      restrict: 'A',
      templateUrl: 'partials/ct-header.html'
    }
  })
  .directive('totalTrafficOne', function() {
    return {
      restrict : 'A',
      templateUrl: 'partials/total-traffic-one.html',
      link: function() {

        var browserWrapper3 = new google.visualization.ChartWrapper({
            // Example Browser Share Query
           "containerId": "browser-7-days",
                            // Example URL: http://your-application-id.appspot.com/query?id=QUERY_ID&format=data-table-response
           "dataSourceUrl": "https://www.connect-final-proxy.appspot.com/query?id=ahVzfmNvbm5lY3QtZmluYWwtcHJveHlyFQsSCEFwaVF1ZXJ5GICAgICAgIAKDA&format=data-table-response",
           "refreshInterval": 1800,
           "chartType": "PieChart",
           "options": {
              "showRowNumber" : true,
              "width": 630,
              "height": 440,
              "is3D": true,
              "backgroundColor": {fill: "transparent"},
              "title": "ESCOSIGNS - Last 7 Days of by traffic source"
           }
         });
        browserWrapper3.draw();
      }
    }
  })

  .directive('totalTrafficTwo', function() {
    return {
      restrict : 'A',
      templateUrl: 'partials/total-traffic-two.html',
      link: function() {

        var visitsWrapper4 = new google.visualization.ChartWrapper({
             // Example Browser Share Query
            "containerId": "visits-30-days",
                             // Example URL: http://your-application-id.appspot.com/query?id=QUERY_ID&format=data-table-response
            "dataSourceUrl": "https://www.connect-final-proxy.appspot.com/query?id=ahVzfmNvbm5lY3QtZmluYWwtcHJveHlyFQsSCEFwaVF1ZXJ5GICAgICA8ogKDA&format=data-table-response",
            "refreshInterval": 1800,
            "chartType": "PieChart",
            "options": {
               "showRowNumber" : true,
               "width": 630,
               "height": 440,
               "is3D": true,
               "backgroundColor": {fill: "transparent"},
               "title": "ESCOSIGNS - Last 30 Days by top page"
            }
          });
        visitsWrapper4.draw();
      }
    }
  })

  .directive('topFive', function() {
    return {
      restrict : 'A',
      templateUrl: 'partials/top-five.html',
      link: function() {

        var visitsWrapper5 = new google.visualization.ChartWrapper({
             // Example Browser Share Query
            "containerId": "top-5",
                             // Example URL: http://your-application-id.appspot.com/query?id=QUERY_ID&format=data-table-response
            "dataSourceUrl": "https://connect-final-proxy.appspot.com/query?id=ahVzfmNvbm5lY3QtZmluYWwtcHJveHlyFQsSCEFwaVF1ZXJ5GICAgIDgrJQKDA&format=data-table-response",
            "refreshInterval": 1800,
            "chartType": "PieChart",
            "options": {
               "showRowNumber" : true,
               "width": 630,
               "height": 440,
               "is3D": true,
               "backgroundColor": {fill: "transparent"},
               "title": "ESCOSIGNS - Last 5 Days by search engine"
            }
          });
        visitsWrapper5.draw();
      }
    }
  })

  .directive('topKeywords', function() {
    return {
      restrict: 'A',
      templateUrl: 'partials/top-keywords.html',
      link: function(scope, element, attrs) {

        var keywordsWrapper6 = new google.visualization.ChartWrapper({
             // Example Browser Share Query
            "containerId": "top-keywords",
                             // Example URL: http://your-application-id.appspot.com/query?id=QUERY_ID&format=data-table-response
            "dataSourceUrl": "https://connect-final-proxy.appspot.com/query?id=ahVzfmNvbm5lY3QtZmluYWwtcHJveHlyFQsSCEFwaVF1ZXJ5GICAgIDg2o0KDA&format=data-table-response",
            "refreshInterval": 1800,
            "chartType": "BarChart",
            "options": {
               "showRowNumber" : true,
               "width": 630,
               "height": 440,
               "is3D": true,
               "backgroundColor": {fill: "transparent"},
               "title": "ESCOSIGNS - Last 30 Days by keyword (Top 20)"
            }
          });
        keywordsWrapper6.draw();

      }
    }
  })
  
  
  /* 
  
  .directive('dashboardTrafficOne', function() {
    return {
      restrict: 'A',
      templateUrl: 'partials/dashboard-traffic-one.html',
      link: function(scope, element, attrs) {

        var keywordsWrapper7 = new google.visualization.ChartWrapper({
             // Example Browser Share Query
            "containerId": "keywords-wrapper",
                             // Example URL: http://your-application-id.appspot.com/query?id=QUERY_ID&format=data-table-response
            "dataSourceUrl": "https://connect-final-proxy.appspot.com/query?id=ahVzfmNvbm5lY3QtZmluYWwtcHJveHlyFQsSCEFwaVF1ZXJ5GICAgICQ3Z4KDA&format=data-table-response",
            "refreshInterval": 1800,
            "chartType": "PieChart",
            "options": {
               "showRowNumber" : true,
               "width": 600,
               "height": 440,
               "is3D": true,
               "backgroundColor": {fill: "transparent"},
               "title": "ESCOSIGNS - Top Pages Last 30 Days"
            }
          });
        keywordsWrapper7.draw();

      }
    }
  })


.directive('dashboardTrafficSecond', function() {
  return {
    restrict: 'EA',
    templateUrl: 'partials/dashboard-traffic-second.html',
    link: function(scope, element, attrs) {

      var keywordsWrapper71 = new google.visualization.ChartWrapper({
           // Example Browser Share Query
          "containerId": "table-wrapper",
                           // Example URL: http://your-application-id.appspot.com/query?id=QUERY_ID&format=data-table-response
          "dataSourceUrl": "https://connect-final-proxy.appspot.com/query?id=ahVzfmNvbm5lY3QtZmluYWwtcHJveHlyFQsSCEFwaVF1ZXJ5GICAgICQtpYKDA&format=data-table-response",
          "refreshInterval": 1800,
          "chartType": "Table",
          "options": {
            "cssClassNames" : "rowNumberCell",
             "width": 600,
             "height": 140,
             "backgroundColor": {fill: "transparent"},
             "title": "ESCOSIGNS - Visitors Today"
          }
        });
      keywordsWrapper71.draw();

    }
  }
})

.directive('dashboardTrafficThird', function() {
  return {
    restrict: 'EA',
    templateUrl: 'partials/dashboard-traffic-third.html',
    link: function(scope, element, attrs) {

      var keywordsWrapper72 = new google.visualization.ChartWrapper({
           // Example Browser Share Query
          "containerId": "ppc-wrapper",
                           // Example URL: http://your-application-id.appspot.com/query?id=QUERY_ID&format=data-table-response
          "dataSourceUrl": "https://connect-final-proxy.appspot.com/query?id=ahVzfmNvbm5lY3QtZmluYWwtcHJveHlyFQsSCEFwaVF1ZXJ5GICAgIDQkJEKDA&format=data-table-response",
          "refreshInterval": 1800,
          "chartType": "Table",
          "options": {
            "showRowNumber" : true,
             "width": 1120,
             "height": 140,
             "backgroundColor": {fill: "transparent"},
             "title": "ESCOSIGNS - PPC This Month",
             "allowHtml" : true
          }
        });
      keywordsWrapper72.draw();

    }
  }
})

*/

  ;
