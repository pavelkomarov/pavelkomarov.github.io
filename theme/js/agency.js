
// Set the action of the navbar buttons. jQuery for page page-scrolling feature
// (requires jQuery Easing plugin); snap to correct url if not on home page.
$('a.page-scroll').bind('click', function(event) {
	event.preventDefault();
	let link = $(this).attr('href');
	let site_root = window.location.protocol + '//' + window.location.host + '/';
	
	// match if we're currently on the home page
	if (window.location.href.match('^https?://.*/(#.*)?$')) {
		$('html, body').stop().animate({
			scrollTop: $(link).offset().top
		}, 1500, 'easeInOutExpo');
		setTimeout(() => {window.location = site_root + link}, 1500);
	} else {
		window.location = site_root + link
	}
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({ target: '.navbar', offset: 200 })

// A function to fade-in the navbar's background on the homepage
// based on vertical location
var navbar_opacity = function() {
	let offset = $(document).scrollTop();
	let opacity = 1; // by default the background appears
	if (window.location.href.match('^https?://.*/(#.*)?$')) {
		if (offset <= 200) {
			opacity = 0;
		} else if (200 <= 500){
			opacity = (offset - 200)/300;
		}
	}
	$('.navbar').css('background-color', 'rgba(34,34,34,'+opacity+')');
}
$(window).bind('scroll', navbar_opacity);
$(window).bind('load', navbar_opacity);


// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul a').click(function() {
	$('.navbar-toggler:visible').click();
});
