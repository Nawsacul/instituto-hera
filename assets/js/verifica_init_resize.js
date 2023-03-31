// Função para alternar a classe 'swiper-wrapper__center' com base na presença da classe 'swiper-pagination-lock'
function toggleWrapperCenter(paginacao, swiper) {
    // Seleciona o elemento de paginação usando o seletor fornecido como argumento
    const pagination = document.querySelector(paginacao);
    // Seleciona o elemento do wrapper do swiper usando o seletor fornecido como argumento
    const swiperWrapper = document.querySelector(swiper);

    // Verifica se a classe 'swiper-pagination-lock' está presente na paginação e a classe 'swiper-wrapper__center' não está presente no wrapper do swiper
    if (
        pagination.classList.contains("swiper-pagination-lock") &&
        !swiperWrapper.classList.contains("swiper-wrapper__center")
    ) {
        // Adiciona a classe 'swiper-wrapper__center' ao wrapper do swiper
        swiperWrapper.classList.add("swiper-wrapper__center");
    } 
    // Verifica se a classe 'swiper-pagination-lock' não está presente na paginação e a classe 'swiper-wrapper__center' está presente no wrapper do swiper
    else if (
        !pagination.classList.contains("swiper-pagination-lock") &&
        swiperWrapper.classList.contains("swiper-wrapper__center")
    ) {
        // Remove a classe 'swiper-wrapper__center' do wrapper do swiper
        swiperWrapper.classList.remove("swiper-wrapper__center");
    }
}
