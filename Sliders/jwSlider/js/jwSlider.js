// Jeffery Way Slider
(function($){
	
	$.fn.jwSlider = function(options){
		
		var defaults = {
			
			speed: 1000,
			pause: 3000,
			transition: 'slide'  // slide / fade
		};
		
		if ( options.pause <= options.speed ) options.pause = options.speed + 500;
		
		options = $.extend(defaults, options);
		
		this.each(function(){  // apply on ul
						   
			var $this = $(this);
			
			$this.wrap('<div class="jwSliderWrap" />')
			$this.css({
					  	width: '99999px',
					  })
			
			
			if(options.transition === 'slide'){
				
				$this.children().css({
									 	float: 'left'
									 });
				
				$('.jwSliderWrap').css({
									   	width: $this.children().width(),
										overflow: 'hidden'
									   });
				
				slide();
				
			}// end if slide
			
			if(options.transition === 'fade'){
				
				$this.children().css({
									 	width: $this.children().children().width(),
										position: 'absolute',
										left: 0,
										top: 0
									 });
				
				for( var i=$this.children().size()-1, y=0; i>=0; i--, y++ ){
					//console.log(i + ' : ' + y);
					$this.children().eq(y).css( 'z-index', i+9999 );
				}
				
				fade();
				
			} // end if fade
			
			
			function fade(){
					
				setInterval(function(){
									 
					$this.children(':first').animate({ 'opacity': 0 }, options.speed, function(){
						
												$this
													.children(':first')
													.css( 'opacity', 1)
													.css(
															'z-index', $this
																		.children(':last')
																		.css('z-index')-1
														 )
													.appendTo($this);
											});
					
				}, options.pause);
				
			}// fade function end
			
			
			function slide(){
					
				setInterval(function(){
									 
					$this.animate({ left: '-'+$this.parent().width() }, options.speed, function(){
						
																								$this
																									.css('left', 0 )
																									.children(':first')
																									.appendTo($this);
					});
					
				}, options.pause);
				
			}// slide function end
			
		});
		
	};
	
})(jQuery);