$(document).ready(function() {	

             var landingPages = new google.visualization.ChartWrapper({
            "chartType" : "PieChart",
            "containerId" : "total-traffic-wrapper-3",
            "dataSourceUrl" : "https://connect-final-proxy.appspot.com/query?id=ahVzfmNvbm5lY3QtZmluYWwtcHJveHlyFQsSCEFwaVF1ZXJ5GICAgIDD0IcJDA&format=data-table-response",
            "options": {
               "showRowNumber" : true,
               "width": 600,
               "height": 440,
               "is3D": true,
               "backgroundColor": {fill: "transparent"},
               "title": "ESCOSIGNS - Top 5 pages last 30 Days"
                }
              });

             var visitorType = new google.visualization.ChartWrapper({
            "chartType" : "PieChart",
            "containerId" : "total-traffic-wrapper-2",
            "dataSourceUrl" : "https://connect-final-proxy.appspot.com/query?id=ahVzfmNvbm5lY3QtZmluYWwtcHJveHlyFQsSCEFwaVF1ZXJ5GICAgIDFj5IJDA&format=data-table-response",
            "options": {
               "showRowNumber" : true,
               "width": 600,
               "height": 440,
               "is3D": true,
               "backgroundColor": {fill: "transparent"},
               "title": "ESCOSIGNS - New VS Returning Users Last 30 Days"
                }
              });

        setTimeout(function() {
          var trafficType = new google.visualization.ChartWrapper({
                  "chartType" : "PieChart",
                  "containerId" : "traffic-type",
                
                  "dataSourceUrl" : "https://connect-final-proxy.appspot.com/query?id=ahVzfmNvbm5lY3QtZmluYWwtcHJveHlyFQsSCEFwaVF1ZXJ5GICAgICH5J4KDA&format=data-table-response",
                  "options": {
                     "showRowNumber" : true,
                     "width": 600,
                     "height": 440,
                     "is3D": true,
                     "backgroundColor": {fill: "transparent"},
                     "title": "ESCOSIGNS - Traffic Type Last 30 Days"
                      }
                    });

             trafficType.draw();  
             console.log("Second event fired")
           }, 500);

        landingPages.draw();
        visitorType.draw();
        

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