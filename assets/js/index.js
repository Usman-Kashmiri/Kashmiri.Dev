$(document).ready(function () {

    // Menu toggle btn
    $('.menu-btn').click(function () {
        $('ul.toggle').toggleClass('active');
        $('.menu').toggleClass("active");
        $('.menu-btn .menu').toggleClass('active');
    });

    // sticky navbar on scroll script
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.nav-bar').addClass("sticky");
        } else {
            $('.nav-bar').removeClass("sticky");
        }
    });


    $('.menu li a').click(function () {
        $('html').css("scrollBehavior", "smooth");
    });

    // Dark theme mode
    var checkBox = document.getElementById('chk');

    var theme = window.localStorage.getItem('data-theme');
    if (theme) document.documentElement.setAttribute('data-theme', theme);
    checkBox.checked = theme == 'darkMode' ? true : false;

    if (checkBox.checked) {
        $('body').addClass('dark');
        $('section.home').addClass('dark-bg').removeClass('light-bg');
        $('img#lightimg').hide();
        $('#darkimg').show();
        $('.alert').hide();
    } else {
        $('body').removeClass('dark');
        $('section.home').addClass('light-bg').removeClass('dark-bg');
        $('img#darkimg').hide();
        $('#lightimg').show();
        $(".alert").hide().delay(5000).fadeIn();
    }

    $('#chk').click(function () {
        if (checkBox.checked) {
            $('section.home').addClass('dark-bg').removeClass('light-bg');
            $('img#lightimg').hide();
            $('#darkimg').show();
        } else {
            $('section.home').addClass('light-bg').removeClass('dark-bg');
            $('img#darkimg').hide();
            $('#lightimg').show();
        }
    });

    checkBox.addEventListener('change', function () {
        if (this.checked) {
            document.documentElement.setAttribute('data-theme', 'darkMode');
            $('body').addClass('dark');
            window.localStorage.setItem('data-theme', 'darkMode');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            $('body').removeClass('dark');
            window.localStorage.setItem('data-theme', 'light');
        }
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["JS Developer", "Php Developer"],
        typeSpeed: 100,
        backSpeed: 40,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["JS Developer", "Php Developer"],
        typeSpeed: 100,
        backSpeed: 40,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
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
                margin: 40,
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            },
            1500: {
                margin: 20
            }
        }
    });

    // GSAP animation
    gsap.registerPlugin(ScrollTrigger);

    // For About Section
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".about-content",
            pin: false,
            start: "top bottom"
        }
    })
    tl.from('.col-left', { opacity: 0, duration: 0.8, x: -100 })
    tl.from('.col-right', { opacity: 0, duration: 0.5, x: 100 })

    // For Skills progress bars
    gsap.from('.line', {
        scrollTrigger: {
            trigger: ".bars",
            start: "top center"
        },
        opacity: 0,
        duration: 0.8,
        x: -100,
        stagger: 0.2
    });



    // Messenger Chat Integration
    var chatbox = document.getElementById('fb-customer-chat');
    chatbox.setAttribute("page_id", "109278592070427");
    chatbox.setAttribute("attribution", "biz_inbox");

    // Your SDK code
    window.fbAsyncInit = function () {
        FB.init({
            xfbml: true,
            version: 'v15.0'
        });
    };

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
});