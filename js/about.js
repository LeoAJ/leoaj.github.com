(function() {
    // console.log('google');
    var skillItem = $('.skillItem');

    skillItem.on('mouseover', function() {
        
        var $this = $(this);

        // $this.css({
        //     'color': 'white',
        //     'background': '#3399FF'
        // });
    });

    skillItem.on('mouseout', function() {
        var $this = $(this);

        // $this.css({
        //     'color': 'black',
        //     'background': '#C0C0C0'
        // });
    });

})();