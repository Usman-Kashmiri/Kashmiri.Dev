$(document).ready(function() {

    // Menu toggle btn
    $('.menu-btn').click(function() {
        $('ul.toggle').toggleClass('active');
        $('.menu').toggleClass("active");
        $('.menu-btn .menu').toggleClass('active');
    });

    $(window).scroll(function() {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.nav-bar').addClass("sticky");
        } else {
            $('.nav-bar').removeClass("sticky");
        }
    });

    // aos (animate on scroll)
    AOS.init();

    $('.menu li a').click(function() {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Frontend Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 40,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Frontend Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 40,
        loop: true
    });

    // Messenger Chat Integration
    var chatbox = document.getElementById('fb-customer-chat');
    chatbox.setAttribute("page_id", "593965871093444");
    chatbox.setAttribute("attribution", "biz_inbox");

    window.fbAsyncInit = function() {
        FB.init({
            xfbml: true,
            version: 'v11.0'
        });
    };

    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            },
            1500: {
                margin: 60,
            }
        }
    });
});