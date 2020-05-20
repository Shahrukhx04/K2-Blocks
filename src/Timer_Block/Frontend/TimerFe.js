jQuery(document).ready(function( $ ) {

    var timeString = [];
    function getTimes(){
        $('.k2-tw-parent-container').each(function () {
            var t_String = $(this).attr('data-time').split(",");
            temp = [];
            var i;
            for (i = 0; i < t_String.length; i++) {
                temp.push(parseInt(t_String[i]));
            }
            timeString.push(temp);
        }
        )
        //console.log(timeString);

    }

    function updateTW(){
        $('.k2-tw-parent-container').each(function (index) {
            //console.log("In timer number:"+index)
            var targetDate = new Date(timeString[index][0],timeString[index][1],timeString[index][2],timeString[index][3],timeString[index][4],timeString[index][5],timeString[index][6]);
            //console.log(timeString);
            //console.log(targetDate);
            var variable1 = new Date(); //todays date
            //console.log(variable1);
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
            var temp = $(this).children(".k2-tw-block-container").children("span");
            temp.children(".tw-digit-seconds").html((seconds_ < 10) ? '0' + seconds_ : seconds_);
            temp.children(".tw-digit-minutes").html((minutes_ < 10) ? '0' + minutes_ : minutes_);
            temp.children(".tw-digit-hours").html((hours_ < 10) ? '0' + hours_ : hours_);
            temp.children(".tw-digit-days").html((days_ < 10) ? '0' + days_ : days_);
    
        });    
        //console.log("Hello");
    }
    var var1 = getTimes();
    var myVar = setInterval(updateTW, 1000);
});