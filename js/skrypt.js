		$(document).ready(function(){
			var navOffset = $('nav').offset().top;

			$(window).scroll(function(){
				var scrollPos = $(window).scrollTop();

				if(scrollPos > navOffset){
					$('nav').addClass('fixed');
					$('nav').removeClass('navbar2');
				}else{
					$('nav').removeClass('fixed');
					$('nav').addClass('navbar2');
				}
			});
			$('.carousel').carousel({
  interval: 6000
})
		});


$(document).ready(function(){
	$('a[href^="#"]').on('click', function(el){
		el.preventDefault();

		var target = this.hash;
		var $target = $(target);

		// Scroll and show hash
		$('html, body').animate({
			'scrollTop': $target.offset().top
				}, 1000, 'swing', function(){
					window.location.hash = target;
		});
	});
});