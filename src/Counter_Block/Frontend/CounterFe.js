

jQuery(document).ready(function( $ ) {
        //console.log("hello0");

        function elementScrolled(elem)
        {
          var docViewTop = $(window).scrollTop();
          var docViewBottom = docViewTop + $(window).height();
          var elemTop = $(elem).offset().top;
          return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
        }

        function animateCounter(){
          // This is where we use the function to detect if ".box2" is scrolled into view, and when it is add the class ".animated" to the <p> child element
            $('.k2-cw-container').each(function () {
              if(elementScrolled(this) && $(this).attr('data-done') == 0){
                $(this).attr('data-done',"1");
                console.log("was true")
                console.log($(this).children(".k2-cw-content").children(".k2-cw-number").children(".k2-cw-span-number").text())
                $(this).prop('Counter',0).animate({
                Counter: $(this).children(".k2-cw-content").children(".k2-cw-number").children(".k2-cw-span-number").text()
                }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).children(".k2-cw-content").children(".k2-cw-number").children(".k2-cw-span-number").text(Math.ceil(now));
                    }
                    });
              }
            });
        
      }
      var callAnimateCOunteronReady = animateCounter();  
      $(window).scroll(function(){
        // This is then function used to detect if the element is scrolled into view
        var callAnimateCOunter = animateCounter();  
      });

    
});