
jQuery(document).ready(function( $ ) {


	var PositionX = $('#ImageScroll').attr('data-PositionX');
	var PositionY = $('#ImageScroll').attr('data-PositionY');
	var PositionHoverX = $('#ImageScroll').attr('data-PositionHoverX');
	var PositionHoverY = $('#ImageScroll').attr('data-PositionHoverY');

	$('#ImageScroll').mouseover(function(){

		console.log(PositionX, PositionY, PositionHoverX, PositionHoverY)
		$(this).css({backgroundPosition: PositionHoverX + '%' + PositionHoverY +'%'});
	});
	$('#ImageScroll').mouseout(function(){
		$(this).css({backgroundPosition: PositionX + '%' + PositionY +'%'});
	});
});
