$(document).ready(function() {

    // nav menu toggle

    var $nav = $('.site-nav');
    var $dropdown = $('.dropdown');

    $('.site-nav-toggle').on('click', function(e) {
        e.preventDefault();

        if ($nav.is(':hidden')) {
            $nav.slideDown(300);
        } else {
            $nav.slideUp(300);
            $dropdown.slideUp(300);
        }
    });

    $('.dropdown-toggle').on('click', function(e) {
        e.preventDefault();
        
        if ($dropdown.is(':hidden')) {
            $dropdown.slideDown(300);
        } else {
            $dropdown.slideUp(300);
        }
    });

    $('.nav-link').on('click', function() {
        $nav.slideUp(300);
        $dropdown.slideUp(300);
    });

    $('.off-menu').on('click', function() {
        $nav.slideUp(300);
        $dropdown.slideUp(300);
    });

});