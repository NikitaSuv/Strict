/**
 * Section: jQuery
 * 
 * 
 */
//@@include('general/global/global.js')
//@@include('general/ui/ui.js')
//@@include('general/components/components.js')
//@@include('general/sections/sections.js')    


$(function () {
	$('a[href^="#"]').on('click', function (event) {
		var target = $(this.getAttribute('href'));
		if (target.length) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top
			}, 500);
		}
	});
});