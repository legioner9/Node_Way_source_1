$(document).ready(function(){

	/** SLIDERS **/

	// Reviews Slider
	var reviewsSlider = new Swiper('.reviews__slider', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: '.reviews__slider .swiper-pagination',
		},
		navigation: {
			nextEl: '.reviews__slider .swiper-button-next',
			prevEl: '.reviews__slider .swiper-button-prev',
		}
	});

	/** END SLIDERS **/


	// Burger Menu
	$('.burger').on('click', function () {
		$(this).toggleClass('burger__open');
		$('body').toggleClass('overflow');
		$('.mobile').toggleClass('mobile__open');
	});


	// Scroll Top
	$(window).scroll(function(){
		if ($(window).scrollTop() >= 250) {
			$('.scroll__top').addClass('show');
		}
		else{
			$('.scroll__top').removeClass('show');
		}
	});

	$('.scroll__top').on('click', function () {
		$("html, body").animate({
			scrollTop: 0
		}, 300);
	});


	// Popup Fancybox
	$('[data-fancybox]').fancybox({
		animationDuration : 150,
		animationEffect   : 'slide-in-out'
	});
	$.fancybox.defaults.closeExisting=true;
	$.fancybox.defaults.touch = false;
	$.fancybox.defaults.autoFocus = false;


}); //end