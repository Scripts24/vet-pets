
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide', {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        autoplay: true,
        autoWidth: true,
        gap: 40,
        arrows: false,
        pagination: false,
        speed: 2500,
    }).mount();
});