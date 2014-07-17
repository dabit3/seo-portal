$(document).ready(function() {
	
	setTimeout(function() {
		var visitors = new google.visualization.ChartWrapper({
           // Example Browser Share Query
          "containerId": "ct-total-visitors",
                           // Example URL: http://your-application-id.appspot.com/query?id=QUERY_ID&format=data-table-response
          "dataSourceUrl": "https://connect-final-proxy.appspot.com/query?id=ahVzfmNvbm5lY3QtZmluYWwtcHJveHlyFQsSCEFwaVF1ZXJ5GICAgIDQpZUKDA&format=data-table-response",
          "refreshInterval": 1800,
          "chartType": "Table",
          "options": {
            "cssClassNames" : "rowNumberCell",
             "width": 600,
             "backgroundColor": {fill: "transparent"},
             "title": "ESCOSIGNS - Visitors Today"
          }
        }); 

		

	}, 0);

});