(function() {
    
    var year = 4,
        js = $('#js'),
        html = $('#html'),
        css = $('#css'),
        node = $('#node'),
        jq = $('#jq'),
        java = $('#java'),
        python = $('#python'),
        ec = $('#ec'),
        mongo = $('#mongo'),
        couch = $('#couch'),
        sql = $('#sql'),
        mysql = $('#mysql');

    // set years
    js.text(year);
    html.text(year);
    css.text(year);
    jq.text(year - 1);
    java.text(year - 1);
    python.text(year - 1);
    node.text(year - 2);
    sql.text(year - 2);
    ec.text(year - 3);
    mysql.text(year - 2);
    mongo.text(year - 3);
    couch.text(year - 3);

    // set hover
    $('.experience').on('mouseover', function() {
        var $this = $(this),
            value = $this.text();

        $this.text(value + ' years');
        $this.animate({
            'width': '50px'
        }, 500);
    });

    $('.experience').on('mouseout', function() {
        var $this = $(this),
            value = $this.text().replace(' years', '');

        
        $this.animate({
            'width': '8px'
        }, 500, function() {
            $this.text(value);
        });
    });

})();