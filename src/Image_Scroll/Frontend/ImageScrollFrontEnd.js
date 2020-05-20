
jQuery(document).ready(function( $ ) {
	$('.wp-block-k2-imagescroll-block').each(function (index) {
		var imageScroll = $(this).children('.k2-is-sub-parent-container').children('.k2-is-image-parent-container')[0];
		var PositionX = $(imageScroll).attr('data-PositionX');
		var PositionY = $(imageScroll).attr('data-PositionY');
		var PositionHoverX = $(imageScroll).attr('data-PositionHoverX');
		var PositionHoverY = $(imageScroll).attr('data-PositionHoverY');
		$(imageScroll).mouseover(function(){
			$(imageScroll).css({backgroundPosition: PositionHoverX + '%' + PositionHoverY +'%'});
		});
		$(imageScroll).mouseout(function(){
			$(imageScroll).css({backgroundPosition: PositionX + '%' + PositionY +'%'});
		});
	});
});
