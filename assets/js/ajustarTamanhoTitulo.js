function ajustarTamanhoTitulo() {
    const tamanhoDaTela = window.innerWidth;
    const tituloHero = document.querySelector(".content__title");
    const widthTituloHero = window.getComputedStyle(tituloHero).width;
    const scheduleV2ContainerTitle = document.querySelectorAll(".schedulev2__container-title");
    const titulosSobre = document.querySelectorAll(".sobre-text__container-title");

    // Ajuste o tamanho das imagens apenas se a largura da tela for igual ou maior que 581 pixels e menor que 1023
    if (tamanhoDaTela > 581 && tamanhoDaTela < 1023 && scheduleV2ContainerTitle) {
        scheduleV2ContainerTitle.forEach(titulo => titulo.style.width = widthTituloHero);
    } else if (tamanhoDaTela > 581 && tamanhoDaTela < 1023 && titulosSobre) {
        titulosSobre.forEach(titulo => titulo.style.width = widthTituloHero);
    } else {
        scheduleV2ContainerTitle.forEach(titulo => titulo.style.width = "");
        titulosSobre.forEach(titulo => titulo.style.width = "");
    }


}

window.addEventListener('load', ajustarTamanhoTitulo);
window.addEventListener('resize', ajustarTamanhoTitulo);