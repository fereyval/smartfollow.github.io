/*
 * Smooth anchors scrolling
 */
$(document).ready(function($)
{
	$('a').click(function(e){
		var anchor = $(this).attr('href');

		if (anchor != '#' && anchor[0] == '#')
		{
			e.preventDefault();

			var scrollHeight = ($(window).height() - ($(anchor).height() + parseInt($(anchor).css('padding-top')) + parseInt($(anchor).css('padding-bottom')))) / 2;
			if (scrollHeight < 0)
				scrollHeight = 0;

			$('html, body').animate({
				scrollTop: $(anchor).offset().top - scrollHeight - (parseInt($('body').css('padding-top')) / 2)
			}, 800, function(){
				window.history.pushState("", "", anchor);
			});
		}
	});
});
