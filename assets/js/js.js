(function($) {
  //floating
  $(function() {
    $(window).scroll(function() {
      if ($(document).scrollTop() > 50) {
        $('.l-header__nav__menu').fadeIn();
      } else {
        $('.l-header__nav__menu').fadeOut();
      }
    });
  });
  //

  $(window).resize(function() {
    careerTabHeight();
  });

//intro
  $('.introJs').addClass('display-intro');
  $(window).load(function() {
    function intro(ms) {
      return new Promise(function(resolve) {
        setTimeout(function() {
          resolve()
        }, ms)
      })
    }
    intro(100)
      .then(function() {
        $('.introJs').addClass('display-loaded');
        return intro(700)
      }).then(function() {
        $('.introJs').addClass('display-block');
        return intro(400)
      }).then(function() {
        $('.introJs').removeClass('display-intro display-loaded');
        return intro(300)
      }).then(function() {
        $('.introJs').removeClass('display-block');
      });
  });
//


//scroll event
  $(window).scroll(function() {
    $('.fade_slide').each(function() {
      let POS = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
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
  });

  $(window).scroll(function() {
    $('.scroll_graph').each(function() {
      let POS = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > POS - windowHeight + 150) {
        let graphLength = $(this).data('contents');
        $(this).width(graphLength + '%');
      }
    });
  });
//


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
    $('.p-main__project__contents__box__hide').fadeIn();
    $('.more_button').hide();
  });

  $('.more_button_close').click(function() {
    $('.p-main__project__contents__box__hide').fadeOut();
    $('.more_button').show();
    $('html, body').animate({
      scrollTop: $('#anc_10').offset().top - 600
    }, 500);
  });

  $('.faq__button__img').click(function() {
    let buttonClickId = event.target.id;
    $('#slick-slide-control' + buttonClickId).click();
    $('.faq__button').removeClass('button_checked');
    $('.faq__button_' + buttonClickId).addClass('button_checked');
  });

  $('body').on('click', '.slick-arrow', function() {
    let mediaMatch = window.matchMedia("(min-width: 951px)");
    if (mediaMatch.matches) {
      let buttonId = $('.slick-active button').attr('id');
      let buttonIdNumber = buttonId.replace(/slick-slide-control/, '');
      $('.faq__button').removeClass('button_checked');
      $('.faq__button_' + buttonIdNumber).addClass('button_checked');
    }
  });

  $('.career__button').click(function() {
    careerTabHeight();
    let careerButtonClickId = event.target.id;
    $('.career__tab__text').hide().removeClass('current');
    $('.career__tab__img').hide().removeClass('current');
    $('.career__button').removeClass('selected');
    setTimeout(function() {
      $('.career__tab__img__' + careerButtonClickId).fadeIn().addClass('current');
      $('.career__tab__text__' + careerButtonClickId).fadeIn().addClass('current');
      $('.career__button#' + careerButtonClickId).addClass('selected');
      careerTabHeight();
    }, 50);
  });

  function careerTabHeight() {
    let tabRightHeight = $('.career__tab__img.current').outerHeight();
    let tabLeftHeight = $('.career__tab__text.current').outerHeight();
    $('.career__right__tab').css('height', tabRightHeight);
    $('.career__left__tab').css('height', tabLeftHeight);
  };

  //scroll silder
  $(function() {
    const listWrapperEl = document.querySelector('.p-main__career__scroll__list-wrapper');
    const listEl = document.querySelector('.p-main__career__scroll__list');

    gsap.to(listEl, {
      x: () => -(listEl.clientWidth - listWrapperEl.clientWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: '.side-scroll',
        start: 'top top', // 要素の上端（top）が、ビューポートの上端（top）にきた時
        end: () => `+=${listEl.clientWidth - listWrapperEl.clientWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
  });

  //mv silder
  $(document).ready(function() {
    $('.l-main__mv__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 3000,
      speed: 2500,
      dots: false,
      arrow: false,
      fade: true,
      loop: true,
      swipe: true,
      touchMove: true,
      pauseOnHover: false,
      autoplay: true,
    });
    $('.l-main__mv__position__list__item__logo').each(function() {
      let currentClass = 'current';
      $(this).find('.l-main__mv__position__list__item__logo-item:first-child').addClass('first-current current');
    });
    $('.l-main__mv__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      $('.l-main__mv__position__list__item__logo').each(function() {
        let currentClass = 'current';
        $(this).find('.l-main__mv__position__list__item__logo-item').removeClass('first-current').removeClass(currentClass)
          .eq(nextSlide).addClass(currentClass);
      });
      $('.js-silde-text').each(function() {
        let currentClass = 'current';
        $(this).find('.js-silde-text__item').removeClass('first-current').removeClass(currentClass)
          .eq(nextSlide).addClass(currentClass);
      });
    });
  });
  //
})(jQuery);
