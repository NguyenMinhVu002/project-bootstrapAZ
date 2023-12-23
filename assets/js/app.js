$(document).ready(function() {
    $(window).resize(
        function() {
            if ($(document).width() < 1200) {
                // console.log($(document).width())
                $("#logo").removeClass("mr-6");
            } else {
                $("#logo").addClass("mr-6");
            }
            // clear effect hover of nav-item when window of width < 992px
            if ($(document).width() < 992) {
                $("#main-menu .nav-item").removeClass("dropdown-hover");
                $(".nav-link.dropdown-toggle").attr("data-toggle", "dropdown");
            } else {
                $("#main-menu .nav-item").addClass("dropdown-hover");
                $(".nav-link.dropdown-toggle").attr("data-toggle", "");
            }
        });
    // ---------Owl Carousel-------------
    $(".owl-carousel").owlCarousel($('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    }));
    $(".owl-nav .owl-prev").html('<i class="fas fa-angle-left"></i>');
    $(".owl-nav .owl-next").html('<i class="fas fa-angle-right"></i>');


});