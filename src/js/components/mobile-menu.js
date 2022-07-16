$('.mobile-menu-btn').click(function() {
    $(this).toggleClass('mobile-menu-btn--active');
    $('body').toggleClass('body--overlay');
    $('.header-nav').toggleClass('header-nav--active');
});

if($(window).innerWidth() <= 1023) {
    $('.header-nav__item--submenu').click(function() {
        $(this).toggleClass('header-nav__item--active');
        $(this).find('.header-nav__submenu').slideToggle();
    });
}