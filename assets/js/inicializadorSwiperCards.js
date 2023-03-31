var swiper1 = new Swiper(".cards__swiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
    cssMode: true,
    grabCursor: true,
    navigation: {
        nextEl: ".cards__button-next",
        prevEl: ".cards__button-prev",
    },
    pagination: {
        el: ".cards__pagination",
        clickable: true,
        // dynamicBullets: true,
    },
    breakpoints: {
        768: {},
        1024: {},
        1440: {},
        1920: {},
    },
    on: {
        init: function () {
            toggleWrapperCenter(".cards__pagination", ".cards__swiper-wrapper")
        },
        resize: function () {
            toggleWrapperCenter(".cards__pagination", ".cards__swiper-wrapper")
        },
    }
});