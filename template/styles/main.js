$(document).ready(function ()
{
    $("table").addClass("table table-bordered table-striped table-condensed");

    var scrollTimeout = null;
    var amountScrolled = 300;

    $(window).scroll(function () {
        $('a.back-to-top').fadeOut('slow');

        if (scrollTimeout)
            clearTimeout(scrollTimeout);
        
        scrollTimeout = setTimeout(function ()
        {
            if ($(window).scrollTop() > amountScrolled)
                $('a.back-to-top').fadeIn('fast');

            else $('a.back-to-top').fadeOut('fast');
        }, 500);
    });

    $('a.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 700);

        return false;
    })
});