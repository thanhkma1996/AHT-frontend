(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

$(document).ready(function(){
	/* Timer Countdown */
	var now = new Date().getTime();
	/* Set your coundown date */
	//var countDownDate = new Date("Sep 28, 2018 15:37:25").getTime();
	var countDownDate = now + 1450521854;
	
	var distance = countDownDate - now;
	
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	$('.countdown-number .time-item.days .number').html(('0' + days).slice(-2));
	$('.countdown-number .time-item.hours .number').html(('0' + hours).slice(-2));
	$('.countdown-number .time-item.minutes .number').html(('0' + minutes).slice(-2));
	$('.countdown-number .time-item.seconds .number').html(('0' + seconds).slice(-2));

	// Update the count down every 1 second
	setInterval(function() {
		var now = new Date().getTime();
		distance = countDownDate - now;
		
		days = Math.floor(distance / (1000 * 60 * 60 * 24));
		hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		seconds = Math.floor((distance % (1000 * 60)) / 1000);

		$('.countdown-number .time-item.days .number').html(('0' + days).slice(-2));
		$('.countdown-number .time-item.hours .number').html(('0' + hours).slice(-2));
		$('.countdown-number .time-item.minutes .number').html(('0' + minutes).slice(-2));
		$('.countdown-number .time-item.seconds .number').html(('0' + seconds).slice(-2));

		if (distance < 0) {
			$('.countdown-number').hide();
		}
	}, 1000);
	
	/* Newsletter Popup */
	setTimeout(function(){ 
		if($('#newsletter_popup').length){
			$.magnificPopup.open({
				items: {
					src: '#newsletter_popup' 
				},
				type: 'inline',
				removalDelay: 300,
				callbacks: {
					beforeOpen: function() {
						this.st.mainClass = 'mfp-zoom-out modal_newsletter_popup';
					}
				}
			});
		}
	}, 2000);
	$('#newsletter_popup .mfp-close').click(function(){
		var magnificPopup = $.magnificPopup.instance; 
		magnificPopup.close();
	}); 
	/* Header */
	/* Search */
	$('.block-search .block-title').click(function(){
		$('body').addClass('active-search');
	});
	$('.block-search .close-canvas').click(function(){
		$('body').removeClass('active-search');
	});
	/* Cart */
	$('.block-mini-cart .block-title').click(function(){
		$('body').addClass('active-cart');
	});
	$('.block-mini-cart .close-canvas').click(function(){
		$('body').removeClass('active-cart');
	});
	/* Menu */
	$('#toggle_menu').click(function(){
		$('body').toggleClass('active-menu');
	});
	$('.top-menu .close-canvas').click(function(){
		$('body').removeClass('active-menu');
	});
	$('.top-menu.megamenu-version2 .parent-menu .items.level0.parent > a').click(function(e){
		e.preventDefault();
		if($(this).parent().hasClass('active')){
			$(this).parent().removeClass('active');
			$(this).parent().find('.sub-menu').slideUp();
		}else {
			$('.top-menu.megamenu-version2 .parent-menu .items.level0.parent.active > .sub-menu').slideUp();
			$('.top-menu.megamenu-version2 .parent-menu .items.level0.parent.active').removeClass('active');
			$(this).parent().addClass('active');
			$(this).parent().find('.sub-menu').slideDown();
		}
	});
	$('.top-menu.megamenu-version1 .parent-menu .items.level0.parent > a').click(function(e){
		if($(window).width() < 992){
			e.preventDefault();
			if($(this).parent().hasClass('active')){
				$(this).parent().removeClass('active');
				$(this).parent().find('.sub-menu').slideUp();
			}else {
				$('.top-menu.megamenu-version1 .parent-menu .items.level0.parent.active > .sub-menu').slideUp();
				$('.top-menu.megamenu-version1 .parent-menu .items.level0.parent.active').removeClass('active');
				$(this).parent().addClass('active');
				$(this).parent().find('.sub-menu').slideDown();
			}
		}
	});
	
	/* Filter - 1 Columns */
	$('.product-toolbar .filter-action').click(function(){
		$('.product-toolbar .filter-content').slideToggle();
	});
	/* Price Slider */
	$("#pricelimit").slider({
		tooltip: 'hide'
	}).on('slide', function(ev){
		$value = $('#pricelimit').data('slider').getValue();
		$('.price-range .price.from .value').html($value['0']);
		$('.price-range .price.to .value').html($value['1']);
	});
	
	/* Slider show nav 1 */
	var sliderNav1 = $("#slider_nav_1");
	sliderNav1.find('.item > img').each(function( index ) {
		var $img = $(this).attr('src');
		$(this).parent().addClass('have-bg');
		$(this).parent().css('background-image', 'url('+$img+')');
	});
	sliderNav1.owlCarousel({
		items: 1,
		autoplay: false,
		autoplayTimeout: 6000,
		loop: true,
		nav: true,
		slideSpeed: 1000,
		autoplaySpeed: 1000,
		dots: false,
		navText: ["<i class='icon arrow_carrot-up'></i>","<i class='icon arrow_carrot-down'></i>"],
	}).on('changed.owl.carousel', function(event) {
		var index = 1;
		var item = event.item.index - 1;
		if(item <= 0){
			index = event.item.index + 1
		}else {
			index = event.item.index - 1
		}
		$('.slider-position').html(('0' + index).slice(-2));
		
		var $currentItem = $('.owl-item', sliderNav1).eq(event.item.index);
		var $elemsToanim = $currentItem.find("[data-animation-in]");

		setAnimation ($elemsToanim, 'in');
		
	}).on('change.owl.carousel', function(event) {
		
		var $currentItem = $('.owl-item', sliderNav1).eq(event.item.index);
		var $elemsToanim = $currentItem.find("[data-animation-out]");
		
		setAnimation ($elemsToanim, 'out');
		
	});
	
	/* Slider show nav 2 */
	var sliderNav2 = $("#slider_nav_2");
	sliderNav2.find('.item > img').each(function( index ) {
		var $img = $(this).attr('src');
		$(this).parent().addClass('have-bg');
		$(this).parent().css('background-image', 'url('+$img+')');
	});
	sliderNav2.owlCarousel({
		items: 1,
		autoplay: false,
		autoplayTimeout: 6000,
		loop: true,
		nav: true,
		slideSpeed: 1000,
		autoplaySpeed: 1000,
		dots: false,
		navText: ["<i class='icon arrow_carrot-up'></i>","<i class='icon arrow_carrot-down'></i>"],
	}).on('changed.owl.carousel', function(event) {
		var index = 1;
		var item = event.item.index - 1;
		if(item <= 0){
			index = event.item.index + 1
		}else {
			index = event.item.index - 1
		}
		$('.slider-position').html(('0' + index).slice(-2));
		
		var $currentItem = $('.owl-item', sliderNav2).eq(event.item.index);
		var $elemsToanim = $currentItem.find("[data-animation-in]");

		setAnimation ($elemsToanim, 'in');
		
	}).on('change.owl.carousel', function(event) {
		
		var $currentItem = $('.owl-item', sliderNav2).eq(event.item.index);
		var $elemsToanim = $currentItem.find("[data-animation-out]");
		
		setAnimation ($elemsToanim, 'out');
		
	});
	
	/* Slider show nav 3 */
	var sliderNav3 = $("#slider_nav_3");
	sliderNav3.find('.item > img').each(function( index ) {
		var $img = $(this).attr('src');
		$(this).parent().addClass('have-bg');
		$(this).parent().css('background-image', 'url('+$img+')');
	});
	sliderNav3.owlCarousel({
		items: 1,
		autoplay: false,
		autoplayTimeout: 6000,
		loop: true,
		nav: true,
		slideSpeed: 1000,
		autoplaySpeed: 1000,
		dots: false,
		navText: ["<i class='icon arrow_carrot-up'></i>","<i class='icon arrow_carrot-down'></i>"],
	}).on('changed.owl.carousel', function(event) {
		var index = 1;
		var item = event.item.index - 1;
		if(item <= 0){
			index = event.item.index + 1
		}else {
			index = event.item.index - 1
		}
		$('.slider-position').html(('0' + index).slice(-2));
		
		var $currentItem = $('.owl-item', sliderNav3).eq(event.item.index);
		var $elemsToanim = $currentItem.find("[data-animation-in]");

		setAnimation ($elemsToanim, 'in');
		
	}).on('change.owl.carousel', function(event) {
		
		var $currentItem = $('.owl-item', sliderNav3).eq(event.item.index);
		var $elemsToanim = $currentItem.find("[data-animation-out]");
		
		setAnimation ($elemsToanim, 'out');
		
	});
	
	/* Slider show nav 4 */
	var sliderNav4 = $("#slider_nav_4");
	sliderNav4.find('.item > img').each(function( index ) {
		var $img = $(this).attr('src');
		$(this).parent().addClass('have-bg');
		$(this).parent().css('background-image', 'url('+$img+')');
	});
	sliderNav4.owlCarousel({
		items: 1,
		autoplay: false,
		autoplayTimeout: 6000,
		loop: true,
		nav: true,
		slideSpeed: 1000,
		autoplaySpeed: 1000,
		dots: false,
		navText: ["<i class='icon arrow_carrot-up'></i>","<i class='icon arrow_carrot-down'></i>"],
	}).on('changed.owl.carousel', function(event) {
		var index = 1;
		var item = event.item.index - 1;
		if(item <= 0){
			index = event.item.index + 1
		}else {
			index = event.item.index - 1
		}
		$('.slider-position').html(('0' + index).slice(-2));
		
		var $currentItem = $('.owl-item', sliderNav4).eq(event.item.index);
		var $elemsToanim = $currentItem.find("[data-animation-in]");

		setAnimation ($elemsToanim, 'in');
		
	}).on('change.owl.carousel', function(event) {
		
		var $currentItem = $('.owl-item', sliderNav4).eq(event.item.index);
		var $elemsToanim = $currentItem.find("[data-animation-out]");
		
		setAnimation ($elemsToanim, 'out');
		
	});
	
	/* Slider show nav 5 */
	var sliderNav5 = $("#slider_nav_5");
	sliderNav5.find('.item > img').each(function( index ) {
		var $img = $(this).attr('src');
		$(this).parent().addClass('have-bg');
		$(this).parent().css('background-image', 'url('+$img+')');
	});
	sliderNav5.owlCarousel({
		items: 1,
		autoplay: false,
		autoplayTimeout: 6000,
		loop: true,
		nav: true,
		slideSpeed: 1000,
		autoplaySpeed: 1000,
		dots: false,
		navText: ["<i class='icon arrow_carrot-up'></i>","<i class='icon arrow_carrot-down'></i>"],
	}).on('changed.owl.carousel', function(event) {
		var index = 1;
		var item = event.item.index - 1;
		if(item <= 0){
			index = event.item.index + 1
		}else {
			index = event.item.index - 1
		}
		$('.slider-position').html(('0' + index).slice(-2));
		
		var $currentItem = $('.owl-item', sliderNav5).eq(event.item.index);
		var $elemsToanim = $currentItem.find("[data-animation-in]");

		setAnimation ($elemsToanim, 'in');
		
	}).on('change.owl.carousel', function(event) {
		
		var $currentItem = $('.owl-item', sliderNav5).eq(event.item.index);
		var $elemsToanim = $currentItem.find("[data-animation-out]");
		
		setAnimation ($elemsToanim, 'out');
		
	});
	
	/* Slider show dots 1 */
	var sliderDots1 = $("#slider_dots_1");
	
	sliderDots1.find('.item > img').each(function( index ) {
		var $img = $(this).attr('src');
		$(this).parent().addClass('have-bg');
		$(this).parent().css('background-image', 'url('+$img+')');
	});
	sliderDots1.owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout: 6000,
		loop: true,
		nav: false,
		slideSpeed: 1000,
		autoplaySpeed: 1000,
		dots: true,
		navText: ["<i class='icon arrow_carrot-up'></i>","<i class='icon arrow_carrot-down'></i>"],
	}).on('changed.owl.carousel', function(event) {
		var index = 1;
		var item = event.item.index - 1;
		if(item <= 0){
			index = event.item.index + 1
		}else {
			index = event.item.index - 1
		}
		$('.slider-position').html(('0' + index).slice(-2));
		
		var $currentItem = $('.owl-item', sliderDots1).eq(event.item.index);
		var $elemsToanim = $currentItem.find("[data-animation-in]");

		setAnimation ($elemsToanim, 'in');
		
	}).on('change.owl.carousel', function(event) {
		
		var $currentItem = $('.owl-item', sliderDots1).eq(event.item.index);
		var $elemsToanim = $currentItem.find("[data-animation-out]");
		
		setAnimation ($elemsToanim, 'out');
		
	});
	
	/* Slider show dots 1 */
	var sliderDots2 = $("#slider_dots_2");
	
	sliderDots2.find('.item > img').each(function( index ) {
		var $img = $(this).attr('src');
		$(this).parent().addClass('have-bg');
		$(this).parent().css('background-image', 'url('+$img+')');
	});
	sliderDots2.owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout: 6000,
		loop: true,
		nav: false,
		slideSpeed: 1000,
		autoplaySpeed: 1000,
		dots: true,
		navText: ["<i class='icon arrow_carrot-up'></i>","<i class='icon arrow_carrot-down'></i>"],
	}).on('changed.owl.carousel', function(event) {
		var index = 1;
		var item = event.item.index - 1;
		if(item <= 0){
			index = event.item.index + 1
		}else {
			index = event.item.index - 1
		}
		$('.slider-position').html(('0' + index).slice(-2));
		
		var $currentItem = $('.owl-item', sliderDots2).eq(event.item.index);
		var $elemsToanim = $currentItem.find("[data-animation-in]");

		setAnimation ($elemsToanim, 'in');
		
	}).on('change.owl.carousel', function(event) {
		
		var $currentItem = $('.owl-item', sliderDots2).eq(event.item.index);
		var $elemsToanim = $currentItem.find("[data-animation-out]");
		
		setAnimation ($elemsToanim, 'out');
		
	});
	
	/* Slider show dots 1 */
	var sliderDots3 = $("#slider_dots_3");
	
	sliderDots3.find('.item > img').each(function( index ) {
		var $img = $(this).attr('src');
		$(this).parent().addClass('have-bg');
		$(this).parent().css('background-image', 'url('+$img+')');
	});
	sliderDots3.owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout: 6000,
		loop: true,
		nav: false,
		slideSpeed: 1000,
		autoplaySpeed: 1000,
		dots: true,
		navText: ["<i class='icon arrow_carrot-up'></i>","<i class='icon arrow_carrot-down'></i>"],
	}).on('changed.owl.carousel', function(event) {
		var index = 1;
		var item = event.item.index - 1;
		if(item <= 0){
			index = event.item.index + 1
		}else {
			index = event.item.index - 1
		}
		$('.slider-position').html(('0' + index).slice(-2));
		
		var $currentItem = $('.owl-item', sliderDots3).eq(event.item.index);
		var $elemsToanim = $currentItem.find("[data-animation-in]");

		setAnimation ($elemsToanim, 'in');
		
	}).on('change.owl.carousel', function(event) {
		
		var $currentItem = $('.owl-item', sliderDots3).eq(event.item.index);
		var $elemsToanim = $currentItem.find("[data-animation-out]");
		
		setAnimation ($elemsToanim, 'out');
		
	});
	
	/* Slider show dots 1 */
	var sliderDots4 = $("#slider_dots_4");
	
	sliderDots4.find('.item > img').each(function( index ) {
		var $img = $(this).attr('src');
		$(this).parent().addClass('have-bg');
		$(this).parent().css('background-image', 'url('+$img+')');
	});
	sliderDots4.owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout: 6000,
		loop: true,
		nav: false,
		slideSpeed: 1000,
		autoplaySpeed: 1000,
		dots: true,
		navText: ["<i class='icon arrow_carrot-up'></i>","<i class='icon arrow_carrot-down'></i>"],
	}).on('changed.owl.carousel', function(event) {
		var index = 1;
		var item = event.item.index - 1;
		if(item <= 0){
			index = event.item.index + 1
		}else {
			index = event.item.index - 1
		}
		$('.slider-position').html(('0' + index).slice(-2));
		
		var $currentItem = $('.owl-item', sliderDots4).eq(event.item.index);
		var $elemsToanim = $currentItem.find("[data-animation-in]");

		setAnimation ($elemsToanim, 'in');
		
	}).on('change.owl.carousel', function(event) {
		
		var $currentItem = $('.owl-item', sliderDots4).eq(event.item.index);
		var $elemsToanim = $currentItem.find("[data-animation-out]");
		
		setAnimation ($elemsToanim, 'out');
		
	});
	
	/* Slider show dots 1 */
	var sliderDots5 = $("#slider_dots_5");
	
	sliderDots5.find('.item > img').each(function( index ) {
		var $img = $(this).attr('src');
		$(this).parent().addClass('have-bg');
		$(this).parent().css('background-image', 'url('+$img+')');
	});
	sliderDots5.owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout: 6000,
		loop: true,
		nav: false,
		slideSpeed: 1000,
		autoplaySpeed: 1000,
		dots: true,
		navText: ["<i class='icon arrow_carrot-up'></i>","<i class='icon arrow_carrot-down'></i>"],
	}).on('changed.owl.carousel', function(event) {
		var index = 1;
		var item = event.item.index - 1;
		if(item <= 0){
			index = event.item.index + 1
		}else {
			index = event.item.index - 1
		}
		$('.slider-position').html(('0' + index).slice(-2));
		
		var $currentItem = $('.owl-item', sliderDots5).eq(event.item.index);
		var $elemsToanim = $currentItem.find("[data-animation-in]");

		setAnimation ($elemsToanim, 'in');
		
	}).on('change.owl.carousel', function(event) {
		
		var $currentItem = $('.owl-item', sliderDots5).eq(event.item.index);
		var $elemsToanim = $currentItem.find("[data-animation-out]");
		
		setAnimation ($elemsToanim, 'out');
		
	});
	
	$('button.quickview').click(function(){
		$.magnificPopup.open({
			items: {
				src: 'quickview-content.html'
			},
			type: 'iframe',
			removalDelay: 300,
			mainClass: 'mfp-fade mfp-quickview',
			closeOnBgClick: false,
			preloader: true,
			tLoading: ''
		});
	});
	/* New Arrivals Slide */
	$("#new-products-widget").owlCarousel({
		items: 4,
		autoplay: false,
		loop: false,
		nav: false,
		dots: true,
		slideBy: 4,
		responsive: {
			0 : {
				items : 2,
				slideBy: 2
			},
			768 : {
				items : 3,
				slideBy: 3
			},
			1200 : {
				items : 4,
				slideBy: 4
			}
		}
	});
	
	$("#slider-flex-item").owlCarousel({
		items: 1,
		autoplay: false,
		loop: false,
		nav: false,
		dots: true
	});
	
	$(".gallery-widget-image").slick({
		dots: false,
		arrows: false,
	});
	
	$('.product-gallery-thumb .option-item').click(function(){
		$(this).parents('.product-item').find('.gallery-widget-image').slick('slickGoTo', $(this).index(), false);;
	});
	
	
	/* Home page 2*/
	/* Trending Slide */
	var trendingHorizontal = $("#trending-products-widget2");
	var trendingVertical = $('#trending-products-thumb');
	
	trendingHorizontal.owlCarousel({
		items: 1,
		autoplay: false,
		loop: false,
		nav: true,
		dots: false,
		slideBy: 3,
		navText: ["<i class='arrow_carrot-left'></i>","<i class='arrow_carrot-right'></i>"],
		responsive: {
			0 : {
				nav : false,
				dots: true
			},
			768 : {
				nav : true,
				dots: false
			}
		}
	}).on('changed.owl.carousel', function(event) {
		var index = event.item.index;
		trendingVertical.slick('slickGoTo', index);
	});
	
	trendingVertical.slick({
		vertical: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		verticalSwiping: true,
		arrows: false,
		centerPadding: '30px',
	}).on("click",".slick-slide",function() {
		var position = $(this).attr('data-owl');
		trendingHorizontal.trigger('to.owl.carousel', position);
	});
	
	/* New Arrivals Slide */
	$("#new-products-widget2").owlCarousel({
		items: 3,
		autoplay: false,
		loop: false,
		nav: false,
		dots: true,
		slideBy: 3,
		responsive: {
			0 : {
				items : 2,
				slideBy: 2
			},
			768 : {
				items : 3,
				slideBy: 3
			},
			1200 : {
				items : 3,
				slideBy: 3
			}
		}
	});
	$("#collection-slider").owlCarousel({
		items: 1,
		autoplay: true,
		loop: true,
		nav: false,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		dots: true,
		slideBy: 1
	});
	/* Home page 3*/
	/* Blog Slide*/
	$("#blogs-widget").owlCarousel({
		items: 3,
		autoplay: false,
		loop: false,
		nav: false,
		dots: true,
		slideBy: 3,
		responsive: {
			0 : {
				items : 1,
				slideBy: 1
			},
			768 : {
				items : 2,
				slideBy: 2
			},
			1200 : {
				items : 3,
				slideBy: 3
			}
		}
	});
	/* Brand Slide*/
	$("#brand-widget").owlCarousel({
		items: 5,
		autoplay: true,
		loop: true,
		nav: false,
		dots: false,
		responsive: {
			0 : {
				items : 2
			},
			768 : {
				items : 3
			},
			992 : {
				items : 4
			},
			1200 : {
				items : 5
			}
		}
	});
	/* Home page 4 */
	$("#collection-slider-center").owlCarousel({
		items: 1,
		autoplay: true,
		loop: true,
		nav: false,
		dots: true,
		startPosition: 1,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		slideBy: 1
	});
	$("#collection-slider-last").owlCarousel({
		items: 1,
		autoplay: true,
		loop: true,
		nav: false,
		dots: true,
		startPosition: 2,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		slideBy: 1
	});
	
	/* Testimonial */
	$("#testimonial-widget").owlCarousel({
		items: 3,
		autoplay: true,
		loop: true,
		nav: false,
		dots: true,
		responsive: {
			0 : {
				items : 1
			},
			768 : {
				items : 2
			},
			992 : {
				items : 3
			}
		}
	});
	/* Home page 7 */
	/* Instagram */
	$("#collection-instagram").owlCarousel({
		items: 6,
		autoplay: true,
		loop: true,
		nav: true,
		dots: false,
		navText: ["<i class='arrow_carrot-left'></i>","<i class='arrow_carrot-right'></i>"],
		responsive: {
			0 : {
				items: 2
			},
			768 : {
				items: 3
			},
			992 : {
				items: 4
			},
			1200 : {
				items: 6
			}
		}
	});
	/* Home page 8 */
	/* Testimonial */
	$("#testimonial-widget8").owlCarousel({
		items: 1,
		autoplay: true,
		loop: true,
		nav: true,
		dots: false,
		navText: ["<i class='arrow_carrot-left'></i>","<i class='arrow_carrot-right'></i>"],
		responsive: {
			0 : {
				nav: false,
				dots: true
			},
			992 : {
				nav: true,
				dots: false
			}
		}
	});
	/* Product Detail */
	$('#owl-carousel-gallery').owlCarousel({
		items: 1,
		autoplay: false,
		lazyLoad: false,
		nav: true,
		dots: false,
		navText: ["<i class='arrow_carrot-left'></i>","<i class='arrow_carrot-right'></i>"],
	});
	
	$('#vertical-thumbnail').slick({
		dots: false,
		arrows: true,
		vertical: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		verticalSwiping: true,
		centerMode: false,
		prevArrow: "<i class='arrow_carrot-up'></i>",
		nextArrow: "<i class='arrow_carrot-down'></i>",
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 3
				}
			}
		]
	});
	
	$('#owl-carousel-gallery').on('changed.owl.carousel', function(event) {
		var index = event.item.index;
		$('#vertical-thumbnail .item-thumb').removeClass('active');
		$('#vertical-thumbnail .item-thumb[data-owl='+index+']').addClass('active');
		var wdw = $(window).width();
		var ci = $('#vertical-thumbnail .item-thumb').length;
		if(wdw >= 1199 && ci > 3) {
			$('#vertical-thumbnail').slick('slickGoTo', index);
		}else if(wdw < 1199 && wdw >= 768 && ci > 2){
			$('#vertical-thumbnail').slick('slickGoTo', index);
		}else if(wdw < 768 && wdw >= 600 && ci > 3){
			$('#vertical-thumbnail').slick('slickGoTo', index);
		}else if(wdw < 768 && wdw >= 600 && ci > 2){
			$('#vertical-thumbnail').slick('slickGoTo', index);
		}else if(wdw < 360){
			$('#vertical-thumbnail').slick('slickGoTo', index);
		}
	});
	
	$('#vertical-thumbnail .item-thumb').click(function(){
		$('#vertical-thumbnail .item-thumb').removeClass('active');
		var position = $(this).attr('data-owl');
		$('#owl-carousel-gallery').trigger('to.owl.carousel', position);
		$(this).addClass('active');
	});
	
	if($('#map').length){
		var address = 'New York Avenue, Huntington Station, NY, USA';
		var html = '';
		$.ajax({
			type: "GET",
			dataType: "json",
			url: "http://maps.googleapis.com/maps/api/geocode/json",
			data: {'address': address,'sensor':false},
			success: function(data){
				if(data.results.length){
					latitude = data.results[0].geometry.location.lat;
					longitude = data.results[0].geometry.location.lng;
					
					var locations = [
				[html, latitude, longitude, 2]
				];
			
				var map = new google.maps.Map(document.getElementById('map'), {
					zoom: 14,
					scrollwheel: false,
					navigationControl: true,
					mapTypeControl: false,
					scaleControl: false,
					draggable: true,
					center: new google.maps.LatLng(latitude, longitude),
					mapTypeId: google.maps.MapTypeId.ROADMAP
				});
			
				var infowindow = new google.maps.InfoWindow();
			
				var marker, i;
			
				for (i = 0; i < locations.length; i++) {  
			  
					marker = new google.maps.Marker({ 
					position: new google.maps.LatLng(locations[i][1], locations[i][2]), 
					map: map,
					});
			
			
				  google.maps.event.addListener(marker, 'click', (function(marker, i) {
					return function() {
					  infowindow.setContent(locations[i][0]);
					  infowindow.open(map, marker);
					}
				  })(marker, i));
				}
				}
			}
		});
	}
	/* Portfolio Masonry */
	var $containerMasonry = $("#containerMasonry");
    $containerMasonry.imagesLoaded(function () {
        $containerMasonry.masonry();
    });
	
	/* Portfolio Slide */
	$(".portfolio-slider").owlCarousel({
		items: 3,
		autoplay: true,
		loop: true,
		nav: true,
		dots: false,
		navText: ["<i class='arrow_carrot-left'></i>","<i class='arrow_carrot-right'></i>"],
		responsive: {
			0 : {
				items: 2,
				nav: false,
				dots: true
			},
			992 : {
				items: 3,
				nav: true,
				dots: false
			}
		}
	});
	
	$('.portfolio-items.gallery').magnificPopup({
		delegate: '.portfolio-item a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-gallery',
		fixedContentPos: true,
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
			return item.el.attr('title');
			}
		}
	});
	
	$('.popup-image').magnificPopup({
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-gallery',
		fixedContentPos: true,
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
			return item.el.attr('title');
			}
		}
	});
});
	
$(window).on('resize orientationchange', function() {
	$('#trending-products-thumb').slick('resize');
});

function setAnimation ( _elem, _InOut ) {
	var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

	_elem.each ( function () {
		var $elem = $(this);
		var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );

		$elem.addClass($animationType).one(animationEndEvent, function () {
			$elem.removeClass($animationType);
		});
	});
}

function plusQty(qtyInput){
	var qty = $('#'+qtyInput).val();
	qty = parseInt(qty);
	qty++;
	$('#'+qtyInput).val(qty);
}
function minusQty(qtyInput){
	var qty = $('#'+qtyInput).val();
	qty = parseInt(qty);
	
	if(qty>1){
		qty--;
		$('#'+qtyInput).val(qty);
	}
}