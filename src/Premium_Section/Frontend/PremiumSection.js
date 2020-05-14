jQuery(document).ready(function( $ ) {

	var OverlayLeftRight = $('#TriggerAttributes').attr('data-OverlayLeftRight');
	var OverlayTopDown = $('#TriggerAttributes').attr('data-OverlayTopDown');
	var SilidingOption = $('#TriggerAttributes').attr('data-SilidingOption')


	$('#PremiumSectionButton').click(function(){
		console.log(OverlayLeftRight)
		console.log(OverlayTopDown)
		$('#mySidenav').css(SilidingOption, '100%');
		$('#mySidenav').css(OverlayTopDown, '0');
		$('#mySidenav').css(OverlayLeftRight, '0');
		$("body").css("overflow", "hidden");

	});

	$('#CrossButton').click(function(){
		console.log("Clicked Cross")
		$('#mySidenav').css(SilidingOption, '0%');
		$("body").css("overflow", "auto");

	})

})
