$(document).ready(function() {

    // nav menu toggle

    var $nav = $('.site-nav');
    var $dropdown = $('.dropdown');

    $('.site-nav-toggle').on('click', function(e) {
        e.preventDefault();

        if ($nav.is(':hidden')) {
            $nav.slideDown(300);
            $('.menu-arrow').html('&#9650;');
        } else {
            $nav.slideUp(300);
            $dropdown.slideUp(300);
            $('.menu-arrow').html('&#9660;');
            $('.dropdown-arrow').html('&#9660;');
        }
    });

    $('.dropdown-toggle').on('click', function(e) {
        e.preventDefault();
        
        if ($dropdown.is(':hidden')) {
            $dropdown.slideDown(300);
            $('.dropdown-arrow').html('&#9650;');
        } else {
            $dropdown.slideUp(300);
            $('.dropdown-arrow').html('&#9660;');
        }
    });

    $('.nav-link').on('click', function() {
        $nav.slideUp(300);
        $dropdown.slideUp(300);
        $('.menu-arrow').html('&#9660;');
        $('.dropdown-arrow').html('&#9660;');
    });

    $('.off-menu').on('click', function() {
        $nav.slideUp(300);
        $dropdown.slideUp(300);
        $('.menu-arrow').html('&#9660;');
        $('.dropdown-arrow').html('&#9660;');
    });

});