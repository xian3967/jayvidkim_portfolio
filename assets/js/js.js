(function($) {
  $("html,body").animate({
    scrollTop: 1,
    speed: 0
  });
$('.introJs').addClass('display-intro');
$(window).load(function(){
  setTimeout(function() {
    $('.introJs').addClass('display-loaded');
  }, 400);
  setTimeout(function() {
    $('.introJs').addClass('display-block');
  }, 800);
  setTimeout(function() {
    /*var mediaMatch = window.matchMedia("(max-width: 965px)");
    if (mediaMatch.matches) {
      $('.l-header__main__background__text').css('color','black');
    }else{
      $('.l-header__main__background__text').hide();
    }
    */
    $('.l-header__main__background__text').css('color','black');
  }, 900);
  setTimeout(function() {
    $('.introJs').removeClass('display-intro display-loaded');
  }, 1200);
  setTimeout(function() {
    $('.introJs').removeClass('display-block');
    $('.l-header__main__side-menu').addClass('l-header__main__side-menu_open');
  }, 1500);
  setTimeout(function() {
    $('.l-header__main__title').fadeIn();
  }, 2000);
  setTimeout(function() {
    $('.l-header__main__img').fadeIn();
  }, 2300);
  setTimeout(function() {
    $('.l-header__main__scroll__wrapper').fadeIn();
  }, 2800);
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

})(jQuery);
