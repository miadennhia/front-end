/* ===================================================================
 * Shisui
 * ------------------------------------------------------------------- */
(function($) {
    "use strict";
$(window).scroll(function(){
        if($(this).scrollTop() > 100){
           $('.header-top').addClass('fixed');
           $('.header-top').addClass('animated fadeInDown');
        }else{
            $('.header-top').removeClass('fixed');
           $('.header-top').removeClass('animated fadeInDown');
        }
    })

})(jQuery);