jQuery(document).ready(function( $ ) {
    $('.modal-container').each(function (index) {
        console.log("found box container")
        var modal = $(this).children(".modal");

        var dataType = $(this).attr('data-type');
        if (dataType==='button') {
            // Get the button that opens the modal
            var btn = $(this).children(".modal-button")[0];
            // When the user clicks on the button, open the modal
            btn.onclick = function() {
                modal[0].style.display = "block";
            }
        }
        else if (dataType === 'time'){
            var time = $(this).attr('data-time');
            console.log(time);
            console.log("hello")
            setTimeout(function(){
                modal[0].style.display = "block";
              }, time);
        }
        
        var span = modal.children(".modal-content").children(".modal-footer").children(".close")[0];
        console.log(span)

        // When the user clicks on "close", close the modal
        span.onclick = function() {
            modal[0].style.display = "none";
        }

        // When the user clicks anywhere outside of the inner modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal[0].style.display = "none";
            }
        }
    });
});