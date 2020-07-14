var $ = window.jQuery;

$(document).ready(function(){
   $('.feedback-right').slick({

   });
   // For statistic-animation
   $('.counter').counterUp({
    delay: 20,
    time: 1000
    });
    $('about').on('click', function(){
    $(this).closest.removeClass('header').closest.addClass('transparent-header');
    });
    $('about').on('click', function(){
        $('about').on('click', function(){
        $(this).closest.removeClass('menu-link').closest.addClass('transparent-link');
        });
    });

});
