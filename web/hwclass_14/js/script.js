$(window).on("load", function () {

    "use strict";

    /* ===================================
            Loading Timeout
     ====================================== */

    setTimeout(function () {
        $(".loader").fadeOut("slow");
    }, 1000);

});

jQuery(function ($) {


    "use strict";


    /* ===================================
         Scroll
    ====================================== */


    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 260) { // Set position from top to add class
            $('header').addClass('header-appear');
        }
        else {
            $('header').removeClass('header-appear');
        }
    });

    //scroll to appear
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500)
            $('.scroll-top-arrow').fadeIn('slow');
        else
            $('.scroll-top-arrow').fadeOut('slow');
    });

    //Click event to scroll to top
    $(document).on('click', '.scroll-top-arrow', function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    $(".scroll").on("click", function (event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top - 60}, 1200);
    });


    $('.count').each(function () {
        $(this).appear(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 3000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });


    /* =====================================
         Parallax
      ====================================== */

    if ($(window).width() > 992) {
        $(".parallax").parallaxie({
            speed: 0.55,
            offset: 0,
        });
    }

    /* ===================================
        WOW Animation
    ====================================== */

    if ($(window).width() > 767) {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        new WOW().init();
    }



    /* =====================================
       Equal Height
    ====================================== */

    if ($(window).width() > 991) {
        $(document).ready(function() {
            equalHeight($(".equalheight"));
        });

        $(window).on("resize", function () {
            equalHeight($(".equalheight"));
        });
    }

    function equalHeight(group) {
        var tallest = 0;
        group.each(function() {
            var thisHeight = $(this).height();
            if(thisHeight > tallest) {
                tallest = thisHeight;
            }
        });
        group.height(tallest);
    }


    /* ===================================
           Owl Testimonial
    ====================================== */

    /*Testimonial one slide fade*/
    $(".owl-testimonial").owlCarousel({
        autoplay: 2500,
        items: 1,
        autoplayHoverPause: true,
        loop: true,
        margin: 30,
        dots: true,
        nav: false,
        responsive: {
            1280: {
                center: true,
                items: 3,
            },
            767: {
                items: 2,
            }
        }
    });




    /* ===================================
           Revolution Slider
    ====================================== */


    $("#rev_slider_22_1").show().revolution({
        sliderType:"standard",
        jsFileLocation:"//localhost:82/revslider/revslider/public/assets/js/",
        sliderLayout: "fullwidth",
        dottedOverlay:"none",
        delay:9000,
        navigation: {
            onHoverStop:"off",
        },
        responsiveLevels: [1240, 1024, 778, 480],
        visibilityLevels: [1240, 1024, 778, 480],
        gridwidth: [1140, 1024, 768, 480],
        gridheight: [660, 650, 600, 490],
        lazyType:"none",
        shadow:0,
        spinner:"off",
        stopLoop:"off",
        stopAfterLoops:-1,
        stopAtSlide:-1,
        shuffle:"off",
        autoHeight:"off",
        disableProgressBar:"on",
        hideThumbsOnMobile:"off",
        hideSliderAtLimit:0,
        hideCaptionAtLimit:0,
        hideAllCaptionAtLilmit:0,
        debugMode:false,
        fallbacks: {
            simplifyAll:"off",
            nextSlideOnWindowFocus:"off",
            disableFocusListener:false,
        }
    });


    /*============================================*
         Cube Portfolio
     * ============================================*/


    $('#js-grid-mosaic-flat').cubeportfolio({
        filters: '#js-filters-mosaic-flat',
        layoutMode: 'mosaic',
        sortByDimension: true,
        mediaQueries: [ {
            width: 800,
            cols: 3,
        }, {
            width: 480,
            cols: 1,
        }],
        defaultFilter: '*',
        animationType: 'fadeOutTop',
        gapHorizontal: 15,
        gapVertical: 15,
        gridAdjustment: 'responsive',
        caption: 'zoom',

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
    });


});
