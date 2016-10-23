$(document).ready(function ()
{
    $("table").addClass("table table-bordered table-striped table-condensed");
    $("#selector").addClass("hidden-lg hidden-md");
    
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

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-70778035-2', 'auto');
ga('send', 'pageview');