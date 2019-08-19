
/*=============================================
=            count            =
=============================================*/

$('.count').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});

/*=====  End of count  ======*/




jQuery(document).ready(function() {

	jQuery('.tabs .tab-links a').on('click', function(e) {
		var currentAttrValue = jQuery(this).attr('href');
		jQuery('.tabs ' + currentAttrValue).show().siblings().hide();
		jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
		e.preventDefault();
	});

});



$('.carousel-video').owlCarousel({
	loop:false,
	margin:10,
	// autoHeight:true,
	nav:true,
	autoplay: false,
	dots: false,
	navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
						items:2
					},
				1000:{
            items:3
        }
    }

})

$('.owl-carousel').owlCarousel({
	loop:true,
	margin:10,
	// autoHeight:true,
	nav:true,
	autoplay: false,
	dots: false,
	navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
						items:2
					},
				800:{
					items:3
				},
				1000:{
            items:4
        }
    }

})





$('.panel-collapse').on('show.bs.collapse', function () {

	$(this).siblings('.panel-heading').addClass('active');

});



$('.panel-collapse').on('hide.bs.collapse', function () {

	$(this).siblings('.panel-heading').removeClass('active');

});