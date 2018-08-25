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

    // scroll to page section from nav links
	
	var $scrollLink = $('.scroll');

	var topMargin = $('.all-content').css('margin-top');
	topMargin = topMargin.split('px').shift();

	$scrollLink.on('click', function(e) {
		e.preventDefault();

		$('body,html').animate({
			scrollTop: $(this.hash).offset().top - topMargin
		}, 1000);
	});

	$(window).scroll(function() {
		var scrollBarLocation = $(this).scrollTop();

		$scrollLink.each(function() {
			var sectionOffset = $(this.hash).offset().top - topMargin - 3;

			// if (sectionOffset <= scrollBarLocation) {
			// 	$(this).parent().addClass('active');
			// 	$(this).parent().siblings().removeClass('active');
			// }
		})
	});

});