var swiper2 = new Swiper(".team__swiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
    cssMode: true,
    grabCursor: true,
    navigation: {
        nextEl: ".team__button-next",
        prevEl: ".team__button-prev",
    },
    pagination: {
        el: ".team__pagination",
        clickable: true,
    },
    breakpoints: {
        768: {},
        1024: {},
        1440: {},
        1920: {},
    },
    on: {
        init: function () {
            toggleWrapperCenter(".team__pagination", ".team__swiper-wrapper")
        },
        resize: function () {
            toggleWrapperCenter(".team__pagination", ".team__swiper-wrapper")
        },
    }
});