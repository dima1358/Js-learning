$(document).ready(function() {

	$('.main_btna, .main_btn, a[href="#sheldure"], .close').on("click", function() {
		$(".overlay").fadeToggle(1000);
		$(".modal").slideToggle(1000);
	});

});
