"use strict";

function scrollToLearnMore(page)
{
	$('html, body').animate({
        scrollTop: $(page).offset().top
      }, 800);
}


$(() => {

    $("body").append(`
        <div id="scrollbar">
            <div id="scrollbar_thumb"></div>
        </div>
    `);

	let scrolling = false;

	$("#scrollbar").on("mousedown", (e) => {
		scrolling = true;
	});

	$(document).on("mouseup", (e) => {
		scrolling = false;
	});

	$(document).on("mousemove", (e) => {
		if (scrolling)
		{
			let scrollbarHeight = $("#scrollbar").height();
			let perc = (e.clientY / scrollbarHeight) * 100;

			let totalHeight = document.body.scrollHeight - window.innerHeight;
			let current = Math.ceil((perc / 100) * totalHeight);

			window.scrollTo(0, current);
		}
	});


	// scroll bar
	window.onscroll = function()
	{
		let totalHeight = document.body.scrollHeight - window.innerHeight;
		let current = Math.ceil(window.scrollY);

		let perc = (current / totalHeight) * 100;

		let scrollbarHeight = $("#scrollbar").height();
		let thumbHeight = $("#scrollbar_thumb").height();
		// $("#scrollbar_thumb").css("top", (perc / 100) * (scrollbarHeight - thumbHeight));
		$("#scrollbar_thumb").stop(true, true).animate({top: (perc / 100) * (scrollbarHeight - thumbHeight)}, 50,"swing", function(){
			if(current > 0)
				$("#scrollbar_thumb").fadeIn(50);
			else
				$("#scrollbar_thumb").fadeOut();
		});
	};

	window.onscroll();
})