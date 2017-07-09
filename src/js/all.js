$('document').ready(function () {
  $('.a-show-menu').on('click', function (event) {
    event.preventDefault();
    $('body').toggleClass('menu-show');
  });
  $(window).resize(function () {
    if ($(window).width() > 768) {
      $('body').removeClass('menu-show');
    }
  });

  // scroll to
  $('.menu-li-tips').on('click', function(){
    $('html,body').animate({scrollTop:$('#tips').offset().top},800);
  });
  $('.menu-li-chef').on('click', function(){
    $('html,body').animate({scrollTop:$('#chef').offset().top},800);
  });
  $('.menu-li-map').on('click', function(){
    $('html,body').animate({scrollTop:$('#map').offset().top},800);
  });
  
});
