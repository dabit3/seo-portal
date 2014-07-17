$(document).ready(function() {

	$(document).on("click", "#total-traffic-loader", function() {

        $('.ct-loading').show();

        setTimeout(function() {
		$('.ct-loading').hide();
		}, 2000);

});

});