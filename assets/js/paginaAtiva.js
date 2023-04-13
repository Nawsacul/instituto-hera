function paginaAtiva() {
    const currentUrl = window.location.href;
    const menuLinks = document.querySelectorAll('.menu__link');
    const submenuLinks = document.querySelectorAll('.menu__submenu-link')

    menuLinks.forEach((link) => {
        if (link.href === currentUrl) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    submenuLinks.forEach((link) => {
        if (link.href === currentUrl) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', paginaAtiva);