jQuery(document).ready(function( $ ) {
    
    function updateTW(){
        $('.tw-holder').each(function () {
            var timeString = $(this).children("p").text();
            timeString=timerString.split(",");
            var targetDate = Date();
            console.log(timeString);
            console.log(targetDate);
            var variable1 = new Date();
            console.log(variable1);
            // Create a third variable by adding both variables:
            var delta = Math.abs((targetDate-variable1)/1000);
            // calculate (and subtract) whole days
            var days_ = Math.floor(delta / 86400);
            delta -= days_ * 86400;
            // calculate (and subtract) whole hours
            var hours_ = Math.floor(delta / 3600) % 24;
            delta -= hours_ * 3600;
            // calculate (and subtract) whole minutes
            var minutes_ = Math.floor(delta / 60) % 60;
            delta -= minutes_ * 60;
            // what's left is seconds
            var seconds_ = Math.floor(delta % 60);  // in theory the modulus is not required
            $(this).children("table").children("tbody").children("tr").children("#tw-digit-minutes").html(seconds_);
            console.log(seconds_);
        });    
        console.log("Hello");
    }
    var myVar = setInterval(updateTW, 1000);
});