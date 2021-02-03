
/// this ////
jQuery("p").click(function(){
    jQuery(this).hide();
});



//// resize Method ////
var screenSize = jQuery(window).width();
jQuery(".box").text("Resize your window " + screenSize);
jQuery(window).resize(function(){
    var screenSize = jQuery(window).width();
    jQuery(".box").text("Resize your window " + screenSize);
})
