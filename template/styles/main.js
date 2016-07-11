// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE file in the project root for full license information.
$(document).ready(function ()
{
    $("table").addClass("table table-bordered table-striped table-condensed");

    var amountScrolled = 300;

    $(window).scroll(function () {
        if ($(window).scrollTop() > amountScrolled)
            $('a.back-to-top').fadeIn('slow');
        else $('a.back-to-top').fadeOut('slow');
    });

    $('a.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 700);

        return false;
    })
});