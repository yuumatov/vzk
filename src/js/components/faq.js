$('.faq__button').click(function() {
    $(this).parent().toggleClass('faq--active');
    $(this).next().slideToggle();
})