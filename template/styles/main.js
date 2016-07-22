$(document).ready(function ()
{
    $("table").addClass("table table-bordered table-striped table-condensed");
    $("#selector").addClass("visible-xs");
    
    var offset = 220;
    var duration = 500;
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > offset)
            $('a.back-to-top').fadeIn(duration);
        else $('a.back-to-top').fadeOut(duration);
    });
    
    $('a.back-to-top').click(function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    });
});