
$(function(){
	
	// Next Action
	$('.next_scroll').click(function(){
		var out_container = $(this).siblings('.outer_container')
		var items_container = $(out_container).children();
		
		var items = $(items_container).find('li');
		var no_of_items = items.size();
		
		var current_left = 0;
		var max_right = 0;

		var no_show_items = 9;
		var item_layout_width = $(items).eq(0).outerWidth(true);  // include border padding margin
		
		var new_width = no_of_items*item_layout_width+'px';
		
//		$items_container.css({ 'width': new_width });
		
		current_left = parseInt($(items_container).css('left'));
		
		max_right = (no_of_items - no_show_items)*item_layout_width;
		
		if(current_left<=-max_right){
			return false;	
		}
		$(items_container).animate({

			'left': '-='+item_layout_width+'px'
		}, 200);
		return false;
	});
	
	// Previous Actiion
	$('.prev_scroll').click(function(){
		
		var out_container = $(this).siblings('.outer_container')
		var items_container = $(out_container).children();
		
		var items = $(items_container).find('li');
		var no_of_items = items.size();
		
		current_left = parseInt($(items_container).css('left'));

		var no_show_items = 9;
		var item_layout_width = $(items).eq(0).outerWidth(true);  // include border padding margin
		
		
		current_left = parseInt($(items_container).css('left'));
		
//		max_right = (no_of_items - no_show_items)*item_layout_width;

		if(current_left>=0){
			return false;	
		}
		
		$(items_container).animate({

			'left': '+='+item_layout_width+'px'
		}, 200);
		return false;
	});
	
	
	$('.items_container a').click(function(){
		
		$this = $(this);
		var new_image_path = $this.attr('href');
		
		$('#big-image').fadeOut( function(){ $('#big-image').attr('src', new_image_path) }).fadeIn();
		
		return false;
	});
	
});