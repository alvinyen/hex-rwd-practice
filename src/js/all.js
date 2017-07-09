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
});
