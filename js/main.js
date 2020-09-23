$(function(){

    // Header

    let header = $("#header");
    let intro = $("#intro");
    let intoH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    checkScroll(scrollPos, intoH);

    $(window).on("scroll resize", function(){
        intoH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, intoH); 
      
    });

    function checkScroll(scrollPos, intoH){
        if(scrollPos > intoH){
            header.addClass("fixed");

        }else{
            header.removeClass("fixed");
        }
    }

    // /Header

    // Smooth skroll

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let elmentId = $(this).data("scroll");

        let elmentOffset = $(elmentId).offset().top;
        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elmentOffset -80
        },700);

    });

    // /Smooth skroll

    // navToggle
    navToggle.on("click", function(event){
        event.preventDefault();
        nav.toggleClass("show");

    });

    // /navToggle

    // Slider https://kenwheeler.github.io/slick/
    let slider = $("#reviewsSlider");
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade:true
    
      });

    // /Slider
});