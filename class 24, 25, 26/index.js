

//// Add css style ///
var dhorbo = jQuery(".table").text();
jQuery(".fan").text(dhorbo);
jQuery(".fan").html("<h1>"+dhorbo+"</h1>")
jQuery(".table").css("color", "purple");
jQuery(".table").css({
    "background": "yellow",
    "fontSize": "30px",
    "fontFamily": "tahoma"
})
jQuery(".table").addClass("something")
//jQuery(".fan").removeClass("fan")

////  Add atribute ////
jQuery(".fan").attr("amra", "shobai");
jQuery("[amra]").css('color', 'blue')
//jQuery(".fan").removeAttr("class")



//// click method ////
jQuery(".table").click(function(){
    //jQuery(".fan").hide();
    jQuery(".fan").toggle();
});

//// hover method ////
// jQuery(".table").hover(function(){
//     jQuery(".fan").toggle();
// });


/// fadeIn fadeOut fadeToggle Methods ///
jQuery(".clickkoren").click(function(){
    jQuery(".box").fadeToggle(1000);
    return false; /// a link er action ar kaj korbe na
});

/// slideUp slideDown slideToggle ///
jQuery(".clickkoren2").hover(
    function(){
        jQuery(".box").slideUp(1000);
    },
    function(){
        jQuery(".box").slideDown(500);
    }
);


// dobble click ////
// .dblclick(function(){
//     statement
// })


// Animate Method ///
jQuery(".box").animate({
    "margin-left": 200
},3000);



// prepend append before after ////
jQuery(".fan").prepend("<p>prepend of this is table</p>")
jQuery(".fan").append("<p>append of this is table</p>")
jQuery(".fan").before("<p>before of this is table</p>")
jQuery(".fan").after("<p>after of this is table</p>")



