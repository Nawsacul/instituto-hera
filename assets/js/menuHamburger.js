const minhaLabel = document.querySelector('.navbar__hamburger');
const navbarMenu = document.querySelector('.navbar__menu');

minhaLabel.addEventListener('click', function() {
  minhaLabel.classList.toggle('is-active');
  navbarMenu.classList.toggle('navbar__menu--open');
  navbarMenu.classList.remove('navbar__menu--hidden');
});