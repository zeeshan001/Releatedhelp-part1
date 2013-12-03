jQuery(function(){

	var imageFadeSpeed = 700;
	var slidePause = 3000;
	var i = 0;
	var totalS =$('#slider .slide').length;

	function fade(){
			
		setInterval(function(){
			jQuerythis = jQuery('#slider');
			i++;
			jQuerythis.children(':last').animate({ 'opacity': 0 }, imageFadeSpeed, function(){
												jQuerythis
													.children(':last')
													.css( 'opacity', 1)
													.prependTo(jQuerythis)
												// Disc Indicator Activation
												jQuery('#indicator').children('.active').removeClass('active').prev().addClass('active');
												if(i==totalS){
													i=0;
													jQuery('#indicator').children(':last').addClass('active');
												}
												
											});
		}, slidePause);

	}// fade function end
	fade();

});