$(function(){
	var plugin = {};		   
	var defaults = {
		// if want to change Even / Odd classes name
		evenChild : 'even',
		oddChild : 'odd',
		autoSerial	: true,
		resposive	:true,
		recordShow	: 3,
		nextRecord	: 'Next',
		prevRecord	: 'Prev',
		firstRecord	:	'First',
		lastRecord	:	'Last',
		controls	:	true,
		atResolution:	767,
		serialInCol	:	1
		
	}		   
	$.fn.tableResposive = function(options){
	
	if(this.length == 0) return this;
	
	// support mutltiple elements
	if(this.length > 1){
		this.each(function(){$(this).tableResposive(options)});
		return this;
	}
	var table = {};
	var el = this;
	plugin.el = this;
	
	var windowWidth = $(window).width();
	
		var init = function(){
			table.settings = $.extend({}, defaults, options);
			table.headerChild =	 el.children('thead').children();
			table.Child = el.children('tbody').children();
			table.oddChild = el.children('tbody').children(':even');
			table.evenChild = el.children('tbody').children(':odd');
			setup();

		}
		var setup = function(){
			table.oddChild.addClass(table.settings.oddChild)
			table.evenChild.addClass(table.settings.evenChild)
			if(table.settings.autoSerial){
				$(table.Child).each(function(index){
					$(this).children().eq(table.settings.serialInCol - 1).text(index+1)
				});
			}
			if(table.settings.resposive){
				var trQty = table.Child.length
				$(table.Child).each(function(){
					for(i=0; i<trQty; i++ ){
						var title = table.headerChild.children().eq(i).text();
						$(this).children().eq(i).prepend('<span class="title">'+title+'</span>')
					}
				});
				
			}
			if(windowWidth < table.settings.atResolution && table.settings.resposive){
				var tableHeight = parseInt(table.Child.outerHeight(true)) * table.settings.recordShow;
				el.wrap('<div class="table-wrap"><div class="record-area"></div></div>');
				table.recordarea = el.parent()
				el.css({'margin' : 0})
				table.recordarea.css({
					height	: tableHeight,
					'overflow-y': 'auto'
				});
				
			if(table.settings.controls && table.settings.resposive){
				table.recordarea
				.parent()
				.append('<div class="table-controls"><a href="#" class="first-record">'
						+table.settings.firstRecord+
						'</a><a href="#" class="prev-record">'
						+table.settings.prevRecord+
						'</a><a  href="#" class="next-record">'
						+table.settings.nextRecord+
						'</a><a href="#" class="last-record">'
						+table.settings.lastRecord+'</a></div>')
				}
			table.recordarea.next().children().click(function(){
					if($(this).hasClass('first-record')){																  
						table.recordarea.stop(true, true)
						.animate({scrollTop : 0});
						//alert($(this).html())
					}																  
					if($(this).hasClass('prev-record')){																  
						table.recordarea.stop(true, true)
						.animate({scrollTop : '-=' +tableHeight});
						//alert($(this).html())
					}
					if($(this).hasClass('next-record')){																  
						table.recordarea.stop(true, true)
						.animate({scrollTop : '+=' +tableHeight});
						//alert($(this).html())
					}
					if($(this).hasClass('last-record')){
						positionLast = el.height()
						table.recordarea.stop(true, true)
						.animate({scrollTop : positionLast - tableHeight });
						//alert($(this).html())
					}
					return false;
				});
			}
		}
	   init();
	}
});