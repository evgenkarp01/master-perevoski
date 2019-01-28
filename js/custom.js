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


    $("a.ancLinks").click(function () { 
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html,body').animate( { scrollTop: destination }, 400 );
		return false;
	});



	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.scrollup, .callme').fadeIn();
		}else{
			$('.scrollup, .callme').fadeOut();
		}
	});
	$('.scrollup').click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 600);
		return false;
	});



	 $(function(){
        $('[name="phone"]').mask("9(999) 999-99-99");
        $('[name="phone_contact"]').mask("9(999) 999-99-99");
    });

    function call(ev) {
 	  var msg   = $(ev).closest('form').serialize();
        $.ajax({
          type: 'POST',
          url: '../php/send.php',
          data: msg,
          success: function(data) {
            $(ev).closest('.result').html(data);
            $(ev).slideUp('fast');
          },
          error:  function(xhr, str){
	    alert('Возникла ошибка: ' + xhr.responseCode);
          }
        });
    }
        
    $("#modal-button").on("click", function(event){
        event.preventDefault();
         if(($('[name="phone"]').val()!='')&&($('[name="phone"]').val()!='_(___)___-__-__')){
            call(this);
            $('[name="phone"]').removeClass('error');
         }else{
         	$('[name="phone"]').addClass('error');
         }
    });

     $("#contact-button").on("click", function(event){
        event.preventDefault();
         if(($('[name="phone_contact"]').val()!='')&&($('[name="phone_contact"]').val()!='_(___)___-__-__')){
            call(this);
            $('[name="phone_contact"]').removeClass('error');
         }else{
         	$('[name="phone_contact"]').addClass('error');
         }
    });

    $('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});





  $('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});



})
