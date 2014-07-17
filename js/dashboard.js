$(document).ready(function() {
	
		var keywordsWrapper7 = new google.visualization.ChartWrapper({
             "chartType": "PieChart",
            // Example Browser Share Query
            "containerId": "keywords-wrapper",
                             // Example URL: http://your-application-id.appspot.com/query?id=QUERY_ID&format=data-table-response
            "dataSourceUrl": "https://connect-final-proxy.appspot.com/query?id=ahVzfmNvbm5lY3QtZmluYWwtcHJveHlyFQsSCEFwaVF1ZXJ5GICAgICQ3Z4KDA&format=data-table-response",
            "refreshInterval": 1800,
           
            "options": {
               "showRowNumber" : true,
               "width": 600,
               "height": 440,
               "is3D": true,
               "backgroundColor": {fill: "transparent"},
               "title": "ESCOSIGNS - Top Pages Last 30 Days"
            }
          });

		var keywordsWrapper73 = new google.visualization.ChartWrapper({
			"chartType" : "PieChart",
			"containerId" : "organic-wrapper",
			"dataSourceUrl" : "https://connect-final-proxy.appspot.com/query?id=ahVzfmNvbm5lY3QtZmluYWwtcHJveHlyFQsSCEFwaVF1ZXJ5GICAgIDQ6pkKDA&format=data-table-response",
			"options": {
               "showRowNumber" : true,
               "width": 600,
               "height": 440,
               "is3D": true,
               "backgroundColor": {fill: "transparent"},
               "title": "ESCOSIGNS - New Visitors Vs Returning Visitors"
            }
		})

		/* var keywordsWrapper71 = new google.visualization.ChartWrapper({
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
        }); */

        var keywordsWrapper72 = new google.visualization.ChartWrapper({
			"chartType" : "PieChart",
			"containerId" : "ppc-wrapper",
			"dataSourceUrl" : "https://connect-final-proxy.appspot.com/query?id=ahVzfmNvbm5lY3QtZmluYWwtcHJveHlyFQsSCEFwaVF1ZXJ5GICAgIDi25sKDA&format=data-table-response",
			"options": {
               "showRowNumber" : true,
               "width": 600,
               "height": 440,
               "is3D": true,
               "backgroundColor": {fill: "transparent"},
               "title": "ESCOSIGNS - Top States Last 30 Days"
            }
		})

        keywordsWrapper7.draw();
        keywordsWrapper73.draw();
      	keywordsWrapper72.draw();
      	

      	$( "#click-me1" ).click(function() {
		  $( "#my-div1" ).animate({
		    height: "toggle"
		  	}, 500);
		});
      	
      	$( "#click-me2" ).click(function() {
		  $( "#my-div2" ).animate({
		    height: "toggle"
		  	}, 500);
		});

		$( "#click-me3" ).click(function() {
		  $( "#my-div3" ).animate({
		    height: "toggle"
		  	}, 500);
		});

      	

        

});