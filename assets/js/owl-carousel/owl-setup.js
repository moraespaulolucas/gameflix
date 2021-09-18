$('.owl-carousel').owlCarousel({
    center: true,
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 2
        },
        300: {
            items: 4
        },
        600: {
            items: 6
        },
        900: {
            items: 8
        }
    }
})