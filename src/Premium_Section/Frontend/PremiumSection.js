jQuery(document).ready(function( $ ) {
	$('.wp-block-k2-premium-section').each(function (index) {
		var triggerAttrs = $(this).children('.ButtonStyle')[0];
		var OverlayLeftRight = $(triggerAttrs).attr('data-OverlayLeftRight');
		var OverlayTopDown = $(triggerAttrs).attr('data-OverlayTopDown');
		var SilidingOption = $(triggerAttrs).attr('data-SilidingOption');
		var button = $(triggerAttrs).children('.PremiumSectionButton')[0];
		var mysidenav = $(this).children('.sidenav')[0];
		$(button).click(function(){
			$(mysidenav).css(SilidingOption, '100%');
			$(mysidenav).css(OverlayTopDown, '0');
			$(mysidenav).css(OverlayLeftRight, '0');
			$(mysidenav).css("overflow", "hidden");
		});
		var crossButton = $(mysidenav).children('.closebtn')[0];
		$(crossButton).click(function(){
			$(mysidenav).css(SilidingOption, '0%');
			$("body").css("overflow", "auto");
	
		})
	})
})
