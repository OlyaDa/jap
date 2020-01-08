
//input mask

$('.phoneidcl').inputmask('+380(99) 999-99-99',{ "oncomplete": function(){
        $(".disbutt").prop("disabled", false);
    }, "onincomplete": function(){ $(".disbutt").prop("disabled", true); } });

//modal window

$(document).ready(function() {
    $('.popup-link').magnificPopup();
});

//mobile menu (header)

$(function(){
    $('.toggle-menu').on('click',function(){
        $('.logo').toggleClass('change-img');
        $('.main-nav').toggleClass('open');
        $('.header').toggleClass('bg');
        $( ".toggle-menu" ).toggleClass( "menu-on");
    });
});

//slider for "office"

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'<button class="slick-arrow slick-prev"> <i class="fas fa-long-arrow-alt-left"></i> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <i class="fas fa-long-arrow-alt-right"></i> </button>',
    fade: true,
    asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    arrows: false,
});

//slider for "soffits"

$('.soffits-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: false,
    autoplay: false,
    speed: 1000,
    centerMode: true,
    centerPadding: '0px',
    prevArrow:'<button class="slick-arrow slick-prev"> <i class="fas fa-long-arrow-alt-left"></i> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <i class="fas fa-long-arrow-alt-right"></i> </button>',
    responsive: [
        {
            breakpoint: 993,
            settings: {
                slidesToShow: 3,
            }
        },

        {
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
                arrows: false,
            }
        },

        {
            breakpoint: 701,
            settings: {
                slidesToShow: 2,
                arrows: false,
            }
        },

        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                arrows: false,
                autoplay: false,
            }
        },
    ]
});

//slider for "reviews"

$('.reviews-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    prevArrow:'<button class="slick-arrow slick-prev"> <i class="fas fa-long-arrow-alt-left"></i> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <i class="fas fa-long-arrow-alt-right"></i> </button>',
    dots: false,
    autoplay: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },

        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
            }
        },

        {
            breakpoint: 461,
            settings: {
                slidesToShow: 1,
                autoplay: false,
            }
        },
    ]
});

//slider for "models"

$('.models-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: true,
    prevArrow:'<button class="slick-arrow slick-prev"> <i class="fas fa-long-arrow-alt-left"></i> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <i class="fas fa-long-arrow-alt-right"></i> </button>',
});

//scroll

$('.nav-link-new').mPageScroll2id();

//video popup

$(document).ready(function() {
    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
});

///////////
$(document).ready(function() {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });
});
