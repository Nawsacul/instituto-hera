function toggleWrapperCenter(paginacao, swiper) {
    const pagination = document.querySelector(paginacao);
    const swiperWrapper = document.querySelector(swiper);

    if (
        pagination.classList.contains("swiper-pagination-lock") &&
        !swiperWrapper.classList.contains("swiper-wrapper__center")
    ) {
        swiperWrapper.classList.add("swiper-wrapper__center");
    } else if (
        !pagination.classList.contains("swiper-pagination-lock") &&
        swiperWrapper.classList.contains("swiper-wrapper__center")
    ) {
        swiperWrapper.classList.remove("swiper-wrapper__center");
    }
}