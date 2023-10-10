(function ($) {
	"use strict";

	/*=========================
	PRELOADER JS
	===========================*/
    $(window).on('load', function(event) {
		$('.pre-loader').delay(500).fadeOut(500);
	});   

	/*=========================
	SLICK SLIDER JS
	===========================*/
	function mainSlider() {
		var BasicSlider = $('.slider-area');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.slider-single-item:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.slider-single-item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: false,
			autoplaySpeed: 10000,
			dots: true,
			fade: true,
			arrows: false,
			responsive: [
				{ breakpoint: 767, settings: { dots: false, arrows: false } }
			]
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}
	mainSlider();


	/* ======= FEATURE-SLIDER-JS  ======= */

	$('.feature-content').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.feature-menu'
	});
	$('.feature-menu').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.feature-content',
		dots: false,
		focusOnSelect: true,
		arrows: true,
		vertical: true,
		verticalSwiping: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-up"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-down"></i></button>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
					verticalSwiping: false,
					vertical: false,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					verticalSwiping: false,
					vertical: false,
				}
			}
		]
	});


	/* ======= SLICK SLIDER JS  ======= */
	$('.video-slider-active').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		centerMode: true,
		centerPadding: '0',
		focusOnSelect: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					centerMode: false,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					centerMode: false,
				}
			}
		]
	});

	/* ======= SLICK SLIDER JS  ======= */
	$('.testimonial-active').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
	});


	/*=========================
	MagnificPopup image JS
	===========================*/
	$('.gallery-single-item a, .about-img-2 a').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/*=========================
	MagnificPopup image JS
	===========================*/
	$('.about-img-2 a, .about-img a').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/* ======= Hamburger Menu  ======= */
	$('.nav-bars, .tt-nav, .close-btn').on('click', function () {
		$('.nav-bars, .sidebar-menu-wrapper').toggleClass('navbar-on');
		$('.tt-nav').fadeToggle();
		$('.tt-nav').removeClass('nav-hide');
	});

	/*=========================
	magnificPopup video JS
	===========================*/
	$('.video-single-item a').magnificPopup({
		type: 'iframe'
	});



	/*=========================
	Blog-post
	===========================*/
	$('.blog-single-item:nth-child(odd)').addClass('');
	$('.blog-single-item:nth-child(even)').addClass('blog-post-right');


	/*=========================
	SCROLLUP JS
	===========================*/
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});


})(jQuery);