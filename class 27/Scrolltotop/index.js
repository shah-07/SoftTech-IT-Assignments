jQuery(".scrolltotop").click(function(){
    jQuery("html").animate({"scrollTop": 0}, 1000)
    return false;
});

jQuery(window).scroll(function(){
    var utd = jQuery(window).scrollTop();

    if(utd > 200) {
        jQuery(".scrolltotop").fadeIn();
    } else {
        jQuery(".scrolltotop").fadeOut();
    }

    var headerHeight = jQuery(".header-logo").outerHeight();
    if (utd > headerHeight) {
        jQuery(".main-menu").addClass("fixed");
    } else {
        jQuery(".main-menu").removeClass("fixed");
    }
});