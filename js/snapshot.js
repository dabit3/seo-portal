$(document).ready(function() {
	 var snapshot = new google.visualization.ChartWrapper({
            "chartType" : "LineChart",
            "containerId" : "ct-snapshot",
            "dataSourceUrl" : "https://connect-final-proxy.appspot.com/query?id=ahVzfmNvbm5lY3QtZmluYWwtcHJveHlyFQsSCEFwaVF1ZXJ5GICAgIDUuoYKDA&format=data-table-response",
            "options": {
               "width" : 1200,
               "height" : 500,
               "is3D": true,
               "backgroundColor": {fill: "transparent"}
                }
              });
	 snapshot.draw();
});