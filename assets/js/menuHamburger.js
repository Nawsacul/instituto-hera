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
  // Verifica se a largura da janela é menor que 580px
  if (window.innerWidth < 741) {
    // Remove a classe 'is-active' da label do menu hambúrguer
    minhaLabel.classList.remove('is-active');
    // Remove a classe 'navbar__menu--open' do menu de navegação
    navbarMenu.classList.remove('navbar__menu--open');
  }
}

// Adiciona um event listener de clique à label do menu hambúrguer
minhaLabel.addEventListener('click', function (event) {
  // Impede a propagação do evento de clique
  event.stopPropagation();
  // Alterna o valor da variável isHamburgerClicked
  isHamburgerClicked = !isHamburgerClicked;
  // Alterna a classe 'is-active' da label do menu hambúrguer
  minhaLabel.classList.toggle('is-active');
  // Alterna a classe 'navbar__menu--open' do menu de navegação
  navbarMenu.classList.toggle('navbar__menu--open');
  // Remove a classe 'navbar__menu--hidden' do menu de navegação
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