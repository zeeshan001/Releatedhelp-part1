$(function(){

	$('.dropdown-toggle').click (function () {
		if ($(this).hasClass('exp')) {
			$(this).removeClass('exp');
			$(this).next().hide();
		}
		else {
			$(this).addClass('exp');
			$(this).next().show();
		}
		return false;
	});
	
	$('.row-fluid > div:first-child').addClass('first-child');
	$('.dropdown-menu > li:first-child').addClass('first-item');
	
});