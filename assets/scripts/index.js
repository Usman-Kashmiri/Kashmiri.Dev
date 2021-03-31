$(document).ready(function() {
    $(window).scroll(function() {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.nav-bar-container').addClass("sticky");
        } else {
            $('.nav-bar-container').removeClass("sticky");
        }
    });

    // aos (animate on scroll)
    AOS.init();

    $('.menu li a').click(function() {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.menu').toggleClass("active");
        $('.menu-btn').toggleClass("active");
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
});