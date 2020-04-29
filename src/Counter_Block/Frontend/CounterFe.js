jQuery(document).ready(function( $ ) {
    //console.log("hello0");
        var done = 0;
      $(window).scroll(function(){
        // This is then function used to detect if the element is scrolled into view
      //console.log("hello1");
        function elementScrolled(elem)
        {
          var docViewTop = $(window).scrollTop();
          var docViewBottom = docViewTop + $(window).height();
          var elemTop = $(elem).offset().top;
          return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
        }

        // This is where we use the function to detect if ".box2" is scrolled into view, and when it is add the class ".animated" to the <p> child element
        if(elementScrolled('.elementor-shortcode') && done==0) {
              done=1;
              //console.log("hello2");
            $('.elementor-shortcode').each(function () {
              $(this).prop('Counter',0).animate({
              Counter: $(this).text()
              }, {
                  duration: 3000,
                  easing: 'swing',
                  step: function (now) {
                      $(this).text(Math.ceil(now));
                  }
                  });
    });
        }
      });

    
});