
const minhaLabel = document.querySelector('label[for="menuHamburguer"]');
const meuInput = document.querySelector('#menuHamburguer');

minhaLabel.addEventListener('click', function() {
  minhaLabel.classList.toggle('is-active');
});