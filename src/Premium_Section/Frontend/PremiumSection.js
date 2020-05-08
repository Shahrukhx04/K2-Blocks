jQuery(document).ready(function( $ ) {

	$('#PremiumSectionButton').click(function(){
		$('#mySidenav').css("width", '100%');
	});

	$('#CrossButton').click(function(){
		console.log("Clicked Cross")
		$('#mySidenav').css("width", '0%');
	})

})
