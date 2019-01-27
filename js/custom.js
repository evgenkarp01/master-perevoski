$( document ).ready(function() {

	$('#services-slick').slick({
	  infinite: true,
	  dots: true,
	  arrows: false,
	  slidesToShow: 7,
	  slidesToScroll: 5,
        responsive: [
            {
              breakpoint: 1919,
              settings: {
                slidesToShow: 6
              }
            },
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 5
              }
            },
            {
              breakpoint: 1350,
              settings: {
                slidesToShow: 4
              }
            },
            {
              breakpoint: 1060,
              settings: {
                slidesToShow: 3,
                  slidesToScroll: 3
              }
            },
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 2,
                  slidesToScroll: 2
              }
            },
            
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                  slidesToScroll: 1
              }
            }
          ]
	});
    $('#gallery-slick').slick({
	  infinite: true,
	  dots: false,
      prevArrow: $('.gallery__prev'),
      nextArrow: $('.gallery__next'),
	  slidesToShow: 5,
	  slidesToScroll: 5,
         responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
	});
    var Closed = false;

      $('.hamburger').click(function () {
        if (Closed == true) {
          $(this).removeClass('open');
          $(this).addClass('closed');
          $('.no-mobile').removeClass('no-mobile-add');
          Closed = false;
        } else {               
          $(this).removeClass('closed');
          $(this).addClass('open');
          $('.no-mobile').addClass('no-mobile-add');
          Closed = true;
        }
      });
         $('.no-mobile li a, .no-mobile').click(function () {
              $('.hamburger').removeClass('open');
              $('.hamburger').addClass('closed');
              $('.no-mobile').removeClass('no-mobile-add');
              Closed = false;
         });
})


