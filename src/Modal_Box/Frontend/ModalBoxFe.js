jQuery(document).ready(function( $ ) {
    $('.k2-modal-container').each(function (index) {
        var modal = $(this).children(".k2-modal");
        var dataType = $(this).attr('data-type');
        if (dataType==='button') {
            // Get the button that opens the modal
            var btn = $(this).children(".k2-modal-button")[0];
            // When the user clicks on the button, open the modal
            btn.onclick = function() {
                modal[0].style.display = "block";
            }
        }
        else if (dataType === 'time'){
            var time = $(this).attr('data-time');
            setTimeout(function(){
                modal[0].style.display = "block";
              }, time);
        }
        
        var span = modal.children(".k2-modal-content").children(".k2-modal-close")[0];


        // When the user clicks on "close", close the modal
        span.onclick = function() {
            modal[0].style.display = "none";
        }

        // When the user clicks anywhere outside of the inner modal, close it
        window.onclick = function(event) {
            if (event.target == modal[0]) {
                modal[0].style.display = "none";
            }
        }
        $(document).keydown(function(event) { 
            if (event.keyCode == 27) { 
              $(modal).hide();
            }
          });
    });
});