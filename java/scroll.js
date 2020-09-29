$(document).ready(function () {
    $('#down').on('click', function () {
        var posicion = $('#inicio').offset().top;

        $('body, html').animate({
            scrollTop: posicion + "px"
        }, 1000);
    });
});

$(document).ready(function () {
    $('#down1').on('click', function () {
        var posicion = $('#lg-pg').offset().top;

        $('body, html').animate({
            scrollTop: posicion + "px"
        }, 1000);
    });
});

$(document).ready(function () {
    $('#down2').on('click', function () {
        var posicion = $('#py-rl').offset().top;

        $('body, html').animate({
            scrollTop: posicion + "px"
        }, 1000);
    });
});

$(document).ready(function () {
    $('#down3').on('click', function () {
        var posicion = $('#contacto').offset().top;

        $('body, html').animate({
            scrollTop: posicion + "px"
        }, 1000);
    });
});

$(document).ready(function () {
    $('#down4').on('click', function () {
        var posicion = $('#inicio').offset().top;

        $('body, html').animate({
            scrollTop: posicion + "px"
        }, 1000);
    });
});
