
// jQuery for page page-scrolling feature - requires jQuery Easing plugin
$('a.page-scroll').bind('click', function(event) {
	console.log(JSON.stringify(window.location))
	var link = $(this).attr('href');
	$('html, body').stop().animate({
		scrollTop: $(link).offset().top
	}, 1500, 'easeInOutExpo');
	event.preventDefault();
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({ target: '.navbar', offset: 200 })

// A function to fade-in the navbar's background based on location on page
var navbar_opacity = function() {
    let offset = $(document).scrollTop(),
        opacity = 1; // by default the background appears
    /*if (offset <= 200) {
        opacity = 0;
    } else if (200 <= 500){
        opacity= (offset - 200)/300;
    }*/
    $('.navbar').css('background-color', 'rgba(34,34,34,'+opacity+')');
}
$(window).bind('scroll', navbar_opacity);
$(window).bind('load', navbar_opacity);


// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul a').click(function() {
	$('.navbar-toggler:visible').click();
});
