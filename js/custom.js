
$('.landing-page__slide-wrapper__one').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    dots: false,
    arrows: false,
    speed: 1000,
    cssEase: 'linear'
});
$('.landing-page__slide-wrapper__two').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    dots: false,
    arrows: false,
    speed: 800,
    vertical: true,
    verticalSwiping: true,
    cssEase: 'linear'
});

$('.testimonial__slider').slick({
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: true,
    dots: false,
    arrows: true,
    speed: 1000,
    cssEase: 'linear',
    nextArrow: '<i class="fas fa-chevron-right"></i>',
    prevArrow: '<i class="fas fa-chevron-left"></i>',
});