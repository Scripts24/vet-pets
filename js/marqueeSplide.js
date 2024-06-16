
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide', {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        autoplay: true,
        interval: 1500,
        autoWidth: true,
        gap: 40,
        arrows: false,
        pagination: false,

    }).mount();
});