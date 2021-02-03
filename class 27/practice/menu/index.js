////////// For Responsive menu //////////////
jQuery(".main-menu .bar").click(function(){
    jQuery(".main-menu ul").slideToggle();
    return false;
});

jQuery(window).resize(function(){
    var screenWidth = jQuery(window).width();
    if(screenWidth > 768) {
        jQuery(".main-menu ul").removeAttr("style");
    }
});

////////////// for Sub menu //////////////////

if(jQuery(window).width() > 768) {
    jQuery(".main-menu ul li").hover(
        function(){
            jQuery(this).children("ul").slideToggle(1000);
        }
    );
} else {
    jQuery(".main-menu ul li").click(
        function(){
            jQuery(this).children("ul").slideToggle(1000);
        }
    );
}

jQuery(".main-menu ul ul").parent("li").children("a").append(" <i class='fa fa-angle-down'></i>")

