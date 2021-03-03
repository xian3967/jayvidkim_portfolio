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
    }else{
      $('.l-header__main__background__text').hide();
    }
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
      $('.l-header__main__background__text').css({'color':'black','z-index':'200'});
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
  });

  $(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 300);
  });
  $('.l-header__nav__hambugermenu__button').click(function(){
    $('.l-header__nav__hambugermenu__button').toggleClass('open');
    $('body').toggleClass('menu_open');
    $('.l-header__nav__hambugermenu').fadeToggle();
  });
  $('.l-header__nav__hambugermenu ul li a').click(function(){
    $('.l-header__nav__hambugermenu__button').click();
  });
})(jQuery);
