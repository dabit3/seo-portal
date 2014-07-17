$(document).ready(function() {
	
		var traffic = new google.visualization.ChartWrapper({
             "chartType": "PieChart",
            // Example Browser Share Query
            "containerId": "traffic-wrapper-1",
                             // Example URL: http://your-application-id.appspot.com/query?id=QUERY_ID&format=data-table-response
            "dataSourceUrl": "https://connect-final-proxy.appspot.com/query?id=ahVzfmNvbm5lY3QtZmluYWwtcHJveHlyFQsSCEFwaVF1ZXJ5GICAgIChhpgKDA&format=data-table-response",
            "refreshInterval": 1800,
           
            "options": {
               "showRowNumber" : true,
               "width": 600,
               "height": 440,
               "is3D": true,
               "backgroundColor": {fill: "transparent"},
               "title": "ESCOSIGNS - Traffic By Source Last 30 days"
            }
          });

        var traffic2 = new google.visualization.ChartWrapper({
           // Example Browser Share Query
          "containerId": "traffic-wrapper-2",
                           // Example URL: http://your-application-id.appspot.com/query?id=QUERY_ID&format=data-table-response
          "dataSourceUrl": "https://connect-final-proxy.appspot.com/query?id=ahVzfmNvbm5lY3QtZmluYWwtcHJveHlyFQsSCEFwaVF1ZXJ5GICAgICU55MKDA&format=data-table-response",
          "refreshInterval": 1800,
          "chartType": "Table",
          "options": {
            "cssClassNames" : "rowNumberCell",
             "width": 600,
             "backgroundColor": {fill: "transparent"},
             "title": "ESCOSIGNS - Visitors Today"
          }
        }); 
        
      	traffic.draw();
        traffic2.draw();
      	

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