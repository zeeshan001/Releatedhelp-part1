$(function () {
	
	var obj = $('#slider');	
	var items = $('li', obj);
	var itemW = items.eq(0).width();
	var total = items.length;
	obj.width(total*itemW);
	var maxAnim = (total-1)*itemW;
	
	
	function slideNext() {
		
		stopSlider();
		
		if(parseInt(obj.css('margin-left')) - itemW + maxAnim <= 0){
			obj.children(':first').appendTo(obj);
			obj.css({'margin-left': '+='+itemW+'px' });
		}
			
		obj.animate({
			'margin-left': '-='+itemW+'px'
		},500);
		
		slider();
	};
	function slidePrev() {
		
		stopSlider();
		
		if(parseInt(obj.css('margin-left')) + itemW + maxAnim >= 0){
			obj.children(':last').prependTo(obj);
			obj.css({'margin-left': '-='+itemW+'px' });
		}
		
		obj.animate({
			'margin-left': '+='+itemW+'px'
		},500);
		slider();
	};
	
	
	
// auto slide function (if you comment 'stopSlider()' ,'slider()' and bolow to the stopSlider then only click work);
	function slider(){
		t = setTimeout(
			function(){
				slideNext();
			}
			,3000
		);
	}
	function stopSlider(){
		clearTimeout(t);
	}
	
	
	
	$('#prev').click(function(){
		if( ! obj.is(':animated') ){
			slidePrev();
		}
		return false;
	});
	$('#next').click(function(){
		if( ! obj.is(':animated') ){
			slideNext();
		}
		return false;
	});
	slider();
	
	
});