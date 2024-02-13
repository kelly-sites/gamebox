// changes color of header on homepage as you scroll down
$(function() {
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
            $(".header").removeClass("active");
        }
    });
});

// turns header into collapsible
function toggleMenu() {
    var header = document.querySelector('.header');
    header.classList.toggle('active');
}
