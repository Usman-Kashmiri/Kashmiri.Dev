$(document).ready(function() {

    // preloader
    var myVar = setTimeout(showPage, 3000);

    function showPage() {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("page").style.display = "block";
    }

    // Menu toggle btn
    $('.menu-btn').click(function() {
        $('ul.toggle').toggleClass('active');
        $('.menu').toggleClass("active");
        $('.menu-btn .menu').toggleClass('active');
    });

    // $('#change-bg').click(function() {
    //     $('section.home').addClass('dark-bg').removeClass('light-bg')
    // });

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

    $('#chk').click(function() {
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

    checkBox.addEventListener('change', function() {
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

    const btn = document.getElementById("chk");
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    const currentTheme = localStorage.getItem("theme");
    if (currentTheme == "dark") {
        document.body.classList.toggle("dark-theme");
    } else if (currentTheme == "light") {
        document.body.classList.toggle("light-theme");
    }

    btn.addEventListener("click", function() {
        if (prefersDarkScheme.matches) {
            document.body.classList.toggle("light-theme");
            var theme = document.body.classList.contains("light-theme") ?
                "light" :
                "dark";
        } else {
            document.body.classList.toggle("dark-theme");
            var theme = document.body.classList.contains("dark-theme") ?
                "dark" :
                "light";
        }
        localStorage.setItem("theme", theme);
    });

    // sticky navbar on scroll script
    $(window).scroll(function() {
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

    // GSAP animation
    gsap.registerPlugin(ScrollTrigger)

    const progressTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".bars",
                pin: false,
                start: "top bottom",
                once: true
            }
        })
        .from('.line', { opacity: 0, duration: 1, x: -100, stagger: 0.3 })
});