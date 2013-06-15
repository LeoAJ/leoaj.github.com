$(function() {
    
    var header = $('header'),
        pos = header.offset();

    $(window).scroll(function() {
        if ($(this).scrollTop() > header.height() && header.hasClass('default')) {
            header.fadeOut('fast', function() {
                $(this).removeClass('default').addClass('color').fadeIn('fast');
            });
        } else if ($(this).scrollTop() <= pos.top && header.hasClass('color')) {
            header.fadeOut('fast', function() {
                $(this).removeClass('color').addClass('default').fadeIn('fast');
            });
        }
    });
});