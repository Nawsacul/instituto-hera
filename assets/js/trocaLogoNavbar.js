function trocaLogoNavbar () {
    const tamanhoDaTela = window.innerWidth;
    const logoNavBar = document.querySelector(".navbar__logo");
    const logoRedonda = 'assets/img/HERA LOGO-FONTE-COR-04.png';
    const logoEstatica = 'assets/img/HERA LOGO-FONTE-COR-02 2.svg';

    if (tamanhoDaTela > 581) {
        logoNavBar.src = logoRedonda;
    }

    if (tamanhoDaTela < 581) {
        logoNavBar.src = logoEstatica;
    }
}

window.addEventListener('load', trocaLogoNavbar);
window.addEventListener('resize', trocaLogoNavbar);