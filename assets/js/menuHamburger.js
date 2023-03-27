// Seleciona o elemento da label do menu hambúrguer
const minhaLabel = document.querySelector('.navbar__hamburger');

// Seleciona o elemento do menu de navegação
const navbarMenu = document.querySelector('.navbar__menu');

// Seleciona todos os elementos de links do menu, exceto o link "ESPECIALIDADES"
const navLinks = document.querySelectorAll('.menu__link:not(.menu__link--especialidades)');

// Seleciona todos os elementos de links do submenu
const submenuLinks = document.querySelectorAll('.menu__submenu-link');

// Seleciona o elemento do link da logo
const logoLink = document.querySelector('.navbar__logo');

let isHamburgerClicked = false;

// Função para fechar o menu no mobile
function closeMenuOnMobile(event) {
  if (window.innerWidth < 580) {
    minhaLabel.classList.remove('is-active');
    navbarMenu.classList.remove('navbar__menu--open');
  }
}

// Adiciona um event listener de clique à label do menu hambúrguer
minhaLabel.addEventListener('click', function (event) {
  event.stopPropagation();
  isHamburgerClicked = !isHamburgerClicked;
  minhaLabel.classList.toggle('is-active');
  navbarMenu.classList.toggle('navbar__menu--open');
  navbarMenu.classList.remove('navbar__menu--hidden');
});

// Adiciona event listeners de clique a todos os links do menu, exceto o link "ESPECIALIDADES"
navLinks.forEach(link => {
  link.addEventListener('click', closeMenuOnMobile);
});

// Adiciona event listeners de clique a todos os links do submenu
submenuLinks.forEach(link => {
  link.addEventListener('click', closeMenuOnMobile);
});

// Adiciona um event listener de clique ao link da logo
logoLink.addEventListener('click', closeMenuOnMobile);

// Adiciona um event listener de clique ao objeto document
document.addEventListener('click', function (event) {
  if (!isHamburgerClicked && !navbarMenu.contains(event.target)) {
    closeMenuOnMobile(event);
  } else {
    isHamburgerClicked = false;
  }
});

window.addEventListener('scroll', function () {
  closeMenuOnMobile();
});