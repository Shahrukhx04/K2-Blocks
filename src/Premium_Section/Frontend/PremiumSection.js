jQuery(document).ready(function( $ ) {
	$('.wp-block-k2-premium-section').each(function (index) {
		var triggerAttrs = $(this).children('.k2-ps-trigger-button')[0];
		var OverlayLeftRight = $(triggerAttrs).attr('data-OverlayLeftRight');
		var OverlayTopDown = $(triggerAttrs).attr('data-OverlayTopDown');
		var SilidingOption = $(triggerAttrs).attr('data-SilidingOption');
		var OverlayOpeningWidth = $(triggerAttrs).attr('data-OverlayWidth');

		var button = $(triggerAttrs).children('.k2-ps-trigger-span')[0];
		var mysidenav = $(this).children('.k2-ps-sliding-window')[0];
		$(button).click(function(){
			 $(mysidenav).css(SilidingOption, OverlayOpeningWidth + '%');
			$(mysidenav).css(OverlayTopDown, '0');
			$(mysidenav).css(OverlayLeftRight, '0');
			$("body").css("overflow", "hidden");
		});
		var crossButton = $(mysidenav).children('.k2-ps-close-button')[0];
		$(crossButton).click(function(){
			$(mysidenav).css(SilidingOption, '0%');
			$("body").css("overflow", "auto");

		})
	})
})
