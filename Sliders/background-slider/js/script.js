$(function(){
	$('.accordion-toggle').click (function () {
		$('.accordion-toggle').removeClass('exp')
		if($(this).hasClass('exp') ){
			$(this).removeClass('exp');
		}
		else{
			$(this).addClass('exp');
		}
	});
});