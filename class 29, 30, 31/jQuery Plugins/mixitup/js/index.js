// jQuery(document).ready(function(){
// 	jQuery(".container").mixItUp({
// 		'animation' : {
// 			'enable' : true,
// 			'effects' : 'translateX fade '
// 		}
// 	});
// });

var mixer = mixitup('.filtering-content');
var mixer = mixitup(containerEl);
var mixer = mixitup(containerEl, {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 300
    }
});
