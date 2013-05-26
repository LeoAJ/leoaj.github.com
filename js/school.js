(function() {

    $('a.single').fancybox();

    $('.item').on('click', function() {
        
        var $this = $(this);
        
        $this.animate({
            height: '300px'
        });

        $('.description').css({
            display: 'block'
        });
    });

})();