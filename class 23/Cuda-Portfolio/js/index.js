document.querySelector(".header-area .header-logo .fas").addEventListener("click", function() {
    document.querySelector(".header-area .logo-menu .header-menu").classList.toggle("show");
    document.querySelector(".header-area .logo-menu .header-logo i").classList.toggle("fa-times");
});

$(".portfolio-menu ul li a").click(function(){
    return false;
});

var mixer = mixitup('.portfolios');
var mixer = mixitup(containerEl);
var mixer = mixitup(containerEl, {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 300
    }
});
