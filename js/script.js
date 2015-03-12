$(document).ready(function () {
    $('.top').addClass('animated fadeInDownBig');
    $('.logo').addClass('animated fadeInDownBig');
    $('.content').addClass('animated fadeInUpBig');
    $('.profile').addClass('animated zoomIn');
    $('.name').addClass('animated fadeInRightBig');

    $('.menu').hide();
    $('.main, .exit').click(function () {
        $('.menu').removeClass('animated bounceInLeft');
        $('.menu').addClass('animated bounceOutLeft');
    });

    $('.logo').click(function () {
        window.location.href = "http://jwbmedia.com/"
    });

    $('.hamburger').click(function () {
        $('.menu').show();
        $('.menu').removeClass('animated bounceOutLeft');
        $('.menu').addClass('animated bounceInLeft');
        $('.content').removeClass('animated fadeInUpBig');
    });

    $('.txtmain').click(function () {
        $('.menu').removeClass('animated bounceInLeft');
        $('.menu').addClass('animated bounceOutLeft');
        window.location.href = "http://jwbmedia.com/";
    });

    $('.txtprojects').click(function () {
        $('.menu').removeClass('animated bounceInLeft');
        $('.menu').addClass('animated bounceOutLeft');
        window.location.href = "http://jwbmedia.com/projects";
    });

    $('.txtlog').click(function () {
        $('.menu').removeClass('animated bounceInLeft');
        $('.menu').addClass('animated bounceOutLeft');
        window.location.href = "http://jwbmedia.com/log";
    });

    console.log('Animations Triggered');
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-59800017-1', 'auto');
    ga('send', 'pageview');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $('.top').addClass('topsmall');
            $('.logo').addClass('logosmall');
            $('.pagetitle').addClass('textsmall');
            $('.hamburger').addClass('hamburgersmall');
        }
        if ($(window).scrollTop() < 200) {
            $('.top').removeClass('topsmall');
            $('.logo').removeClass('logosmall');
            $('.pagetitle').removeClass('textsmall');
            $('.hamburger').removeClass('hamburgersmall');
        }
    });

    $('footer').click(function () {
        $('.content').html('<center><h1>You found It!</h1><br><img width="200px" height="200px" src="/easter.png"></center>');
        $('.content').removeClass('animated fadeIn');
        $('.content').hide();
        $('.content').fadeIn();
    });

    $('.download').click(function () {
        $(this).addClass('downloading');
        $(this).removeClass('download');
        $(this).text('Thank You!');
    });
});