(function($) {
  $("html,body").animate({
    scrollTop: 1,
    speed: 0
  });

  setTimeout(function() {
    var mediaMatch = window.matchMedia("(max-width: 980px)");
    if (mediaMatch.matches) {
      $('.l-header__main__background__text').fadeIn();
    }
  }, 100);
  $(window).resize(function() {
    var mediaMatch = window.matchMedia("(max-width: 980px)");
    if (mediaMatch.matches) {
      $('.l-header__main__background__text').show();
    } else {
      $('.l-header__main__background__text').hide();
    }
    //var testHeight = $('.strength_text.current').outerHeight();
    //console.log(testHeight);
    //$('.strength_text_box').css('height', testHeight);
  });

  $('.introJs').addClass('display-intro');
  $(window).load(function() {
    setTimeout(function() {
      $('.introJs').addClass('display-loaded');
    }, 400);
    setTimeout(function() {
      $('.introJs').addClass('display-block');
    }, 800);
    setTimeout(function() {
      $('.l-header__main__background__text').css({
        'color': 'black',
        'z-index': '200'
      });
    }, 950);
    setTimeout(function() {
      $('.introJs').removeClass('display-intro display-loaded');
    }, 1200);
    setTimeout(function() {
      $('.introJs').removeClass('display-block');
      var mediaMatch = window.matchMedia("(max-width: 980px)");
      if (mediaMatch.matches) {
        $('.l-header__main__scroll__wrapper').fadeIn();
      }
      $('.l-header__main__side-menu').addClass('l-header__main__side-menu_open');
    }, 1500);
    setTimeout(function() {
      $('.l-header__main__title').fadeIn();
    }, 2000);
    setTimeout(function() {
      $('.l-header__main__img').fadeIn();
    }, 2300);
    setTimeout(function() {
      var mediaMatch = window.matchMedia("(min-width: 980px)");
      if (mediaMatch.matches) {
        $('.l-header__main__scroll__wrapper').fadeIn();
      }
    }, 2500);
  });

  $(window).scroll(function() {
    $('.fade_slide').each(function() {
      var POS = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > POS - windowHeight + 200) {
        $(this).css({
          'opacity': '1',
          'transform': 'translateY(0)',
          '-webkit-transform': 'translateY(0)',
          '-moz-transform': 'translateY(0)',
          '-ms-transform': 'translateY(0)'
        });
      }
    });
    if ($(window).scrollTop() > $('.p-main__contact_wrapper').offset().top - $(window).height() + 50) {
      $('.localStorage_fixed').fadeOut();
    } else if($(window).scrollTop() > $('.p-main__about_wrapper').offset().top - $(window).height() + 50) {
      $('.localStorage_fixed').fadeIn();
    } else{
      $('.localStorage_fixed').fadeOut();
    }
  });

  $(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 80
    }, 500);
  });
  $('.l-header__nav__hambugermenu__button').click(function() {
    $('.l-header__nav__hambugermenu__button').toggleClass('open');
    $('body').toggleClass('menu_open');
    $('.l-header__nav__hambugermenu_wrapper').fadeToggle();
  });

  $('.l-header__nav__hambugermenu ul li a').click(function() {
    $('.l-header__nav__hambugermenu__button').click();
  });

  $('.more_button').click(function() {
    $('.p-main__project__contents_box_hide').fadeIn();
    $('.more_button').hide();
  });

  $('.more_button_close').click(function() {
    $('.p-main__project__contents_box_hide').fadeOut();
    $('.more_button').show();
  });
  /*
  function slideTest(number) {
    var testHeight = $('.strength_text.current').outerHeight();
    $('.strength_text_box').css('height', testHeight);
    $('.strength_img').hide();
    $('.strength_text').hide().removeClass('current');
    $('.strength_button').removeClass('button_checked');
    $('.strength_button_img').removeClass('current_img');
    setTimeout(function() {
      $('.img_' + number).fadeIn().addClass('current_img');
      $('.text_' + number).fadeIn().addClass('current');
      $('.strength_button_' + number).addClass('button_checked');
      $('.strength_button_img#' + number).addClass('current_img');
    }, 100);
  };
    setInterval(function() {
      var getButtonId = $('.strength_button_img.current_img').attr('id');
      var slideNumber
      if (getButtonId === '01') {
        slideNumber = '02';
      } else if (getButtonId === '02') {
        slideNumber = '03';
      } else if (getButtonId === '03') {
        slideNumber = '04';
      } else if (getButtonId === '04') {
        slideNumber = '01';
      }
      slideTest(slideNumber);
    }, 10000);

    $('.strength_button_img').click(function(event) {
      var buttonClickId = event.target.id;
      slideTest(buttonClickId);
    });
  */
  $('.strength_button_img').click(function() {
    var buttonClickId = event.target.id;
    $('#slick-slide-control' + buttonClickId).click();
    $('.strength_button').removeClass('button_checked');
    $('.strength_button_' + buttonClickId).addClass('button_checked');
  });
})(jQuery);
