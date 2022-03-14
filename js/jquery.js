// wow
new WOW().init();

// zoomsl;
$(function() {
    $(".example").imagezoomsl();
});

// navbar fixed scroll
var num = 180;
$(window).bind('scroll', function() {
    if ($(window).scrollTop() > num) {
        $('.menu_Bar').addClass('navbar-fixed-top');
    } else {
        $('.menu_Bar').removeClass('navbar-fixed-top');
    }
});

// cách 2:
// $(window).bind('scroll', function() {
//     var menu = $('.menu_Bar');
//     if ($(window).scrollTop() > menu.offset().top) {
//         menu.addClass('navbar-fixed-top');
//     } else {
//         menu.removeClass('navbar-fixed-top');
//     }
// })


//scroll to top

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#top').fadeIn(1000);
        } else { $('#top').fadeOut(1000); }
    });
    $('#top').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 300);
        return false;
    });
});