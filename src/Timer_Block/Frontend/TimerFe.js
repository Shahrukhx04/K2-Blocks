jQuery(document).ready(function( $ ) {

    var timeString = null;
    
    function updateTW(){
        $('.tw-holder').each(function () {
            if(timeString == null){
                var t_String = $(this).children("p").text().split(",");
                timeString = [];
                var i;
                for (i = 0; i < t_String.length; i++) {
                    timeString.push(parseInt(t_String[i]));
                }
                $(this).children("p").remove();
            }
            var targetDate = new Date(timeString[0],timeString[1],timeString[2],timeString[3],timeString[4],timeString[5],timeString[6]);
            console.log(timeString);
            console.log(targetDate);
            var variable1 = new Date(); //todays date
            console.log(variable1);
            var days_;
            var hours_;
            var minutes_;
            var seconds_;
            if(targetDate-variable1 <= 0) {
                //display zeros
                days_ = 0;
                hours_ = 0;
                minutes_ = 0;
                seconds_ = 0;
            }
            else{
                var delta = Math.abs((targetDate-variable1)/1000);
                // calculate (and subtract) whole days
                days_ = Math.floor(delta / 86400);
                delta -= days_ * 86400;
                // calculate (and subtract) whole hours
                hours_ = Math.floor(delta / 3600) % 24;
                delta -= hours_ * 3600;
                // calculate (and subtract) whole minutes
                minutes_ = Math.floor(delta / 60) % 60;
                delta -= minutes_ * 60;
                // what's left is seconds
                seconds_ = Math.floor(delta % 60);  // in theory the modulus is not required
            }
            $(this).children("table").children("tbody").children("tr").children("#tw-digit-seconds").html(seconds_);
            $(this).children("table").children("tbody").children("tr").children("#tw-digit-minutes").html(minutes_);
            $(this).children("table").children("tbody").children("tr").children("#tw-digit-hours").html(hours_);
            $(this).children("table").children("tbody").children("tr").children("#tw-digit-days").html(days_);
    
        });    
        console.log("Hello");
    }
    var myVar = setInterval(updateTW, 1000);
});