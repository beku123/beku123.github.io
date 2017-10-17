'use strict';
$(document).ready(function(){

    
  scrollMenu();
    smoothScroll();
    
});

function smoothScroll() {
    
    $('#main-nav a[href*="#"]:not([href="#"])').click(function(){
      $('body').animate({scrollTop: $(this.hash).offset().top - 50},500);
});
}
    
function scrollMenu(){
    var menuHeight = $('#main-nav').height();
    var scrolled = $(window).scrollTop();
    
    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();
        if(scrolled >= menuHeight) {
            $('#main-nav').addClass('scrolled');
        
        }else{
            $('#main-nav').removeClass('scrolled');
        }
    });
}
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
