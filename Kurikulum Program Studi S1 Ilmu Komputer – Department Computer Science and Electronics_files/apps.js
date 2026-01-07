// =SCROLL HEADER CONDITION
jQuery(window).scroll(function($) {
	var postContent = jQuery("#content").position().top;
	var contentHeight = (jQuery(".single-post").height()) / 1.5;
	jQuery(".share-box-wrapper").height(contentHeight);
	if ( jQuery(this).scrollTop() > postContent) {
		jQuery(".share-box-wrapper .share-box").addClass("sticky");
	} else {
		jQuery(".share-box-wrapper .share-box").removeClass("sticky");
	}

	if (jQuery(this).scrollTop() > contentHeight ) {
		jQuery(".share-box-wrapper .share-box").addClass("holdy");
	} else {
		jQuery(".share-box-wrapper .share-box").removeClass("holdy");
	}

});

;(function($){
  $.fn.customerPopup = function (e, intWidth, intHeight, blnResize) {
    
    // Prevent default anchor event
    e.preventDefault();
    
    // Set values for window
    intWidth = intWidth || '500';
    intHeight = intHeight || '400';
    strResize = (blnResize ? 'yes' : 'no');

    // Set title and open popup with focus on it
    var strTitle = ((typeof this.attr('title') !== 'undefined') ? this.attr('title') : 'Social Share'),
        strParam = 'width=' + intWidth + ',height=' + intHeight + ',resizable=' + strResize,            
        objWindow = window.open(this.attr('href'), strTitle, strParam).focus();
  }
    
}(jQuery));

jQuery(document).ready(function($) {
	// Gallery Slider Preview
	$(".slider-preview").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav',
		responsive: [
			{
				breakpoint: 600,
				settings: {
					arrows: true,
					asNavFor: '',
					fade: false
				}
			}
		]
	});

	// Gallery Slider Nav
	$(".slider-nav").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-preview',
		dots: false,
		focusOnSelect: true
	});

	// Navbar on mobile
	$(".dropdown > a").click(function(event) {
		event.stopPropagation();
		$(this).parent().find(".dropdown-menu").toggle();
	});

	// Click dropdown menu on mobile
	$(".dropdown").on("click", function(){
		$(this).toggleClass("active");
	});

	// Navbar dropdown on mobile
	function checkWidth() {
		// alert("berubah");
		var screenWidth = $(window).width();
		if (screenWidth > 992) {
			$(".dropdown > a").on("click", function(e) {
				$(this).parent().toggleClass("active");
				$(this).parent().find(".dropdown-menu").toggleClass("open");

				//e.preventDefault();
			});
		}
	}
	checkWidth();

	$(window).resize(checkWidth);
	$(".topbar").scroll(function(){
		$(this).addClass('scrolled');
	});

    $('.share-box a').on("click", function(e) {
      $(this).customerPopup(e);
    });

});

