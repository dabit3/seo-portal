$(document).ready(function() {
  
   google.setOnLoadCallback(drawVisualization);

    function drawVisualization() {

      var browserWrapper = new google.visualization.ChartWrapper({
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

      var visitsWrapper = new google.visualization.ChartWrapper({
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
       
      setTimeout(function() {
        browserWrapper.draw();
       }, 200); 

        setTimeout(function() {
         visitsWrapper.draw();
       }, 200); 
       // visitsWrapper.draw();
    }

    

});

 