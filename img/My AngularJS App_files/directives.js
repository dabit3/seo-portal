
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
  .directive('trafficDirective', function() {
    return {
      restrict: 'A',
      templateUrl: 'partials/snippets/graph-loader.html'
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
  });
