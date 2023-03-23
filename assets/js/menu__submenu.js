// Seleciona o botão 'Especialidades' pelo seletor de classe
const especialidadesButton = document.querySelector('.menu__link--especialidades');

// Seleciona o submenu 'Especialidades' pelo seletor de classe
const menuSubmenu = document.querySelector('.menu__submenu');

// Função que alterna a exibição do submenu
function toggleSubmenu() {
  // Se a largura da janela for menor ou igual a 580 pixels (mobile)
  if (window.innerWidth <= 667) {
    // Alterna a classe 'menu__submenu--mobile-open' para exibir ou ocultar o submenu no mobile
    menuSubmenu.classList.toggle('menu__submenu--mobile-open');
  } else {
    // Alterna a classe 'menu__submenu--open' para exibir ou ocultar o submenu no desktop
    menuSubmenu.classList.toggle('menu__submenu--open');
  }
  // Alterna a classe 'menu__link--especialidades-ativo' para o botão 'Especialidades' ficar destacado quando o submenu estiver aberto
  especialidadesButton.classList.toggle('menu__link--especialidades-ativo');
}

// Adiciona um evento 'click' ao botão 'Especialidades'
especialidadesButton.addEventListener('click', function (event) {
  // Impede que o evento se propague e feche o submenu
  event.stopPropagation();
  // Chama a função 'toggleSubmenu' para alternar a exibição do submenu
  toggleSubmenu();
});

// Adiciona um evento 'click' ao documento inteiro
document.addEventListener('click', function (event) {
  // Seleciona o elemento clicado
  const target = event.target;
  // Verifica se o elemento clicado não está dentro do submenu e não é o botão 'Especialidades'
  if (!target.closest('.menu__submenu') && !target.closest('.menu__link--especialidades')) {
    // Remove a classe 'menu__submenu--open' para ocultar o submenu no desktop
    menuSubmenu.classList.remove('menu__submenu--open');
    // Remove a classe 'menu__submenu--mobile-open' para ocultar o submenu no mobile
    menuSubmenu.classList.remove('menu__submenu--mobile-open');
    // Remove a classe 'menu__link--especialidades-ativo' do botão 'Especialidades'
    especialidadesButton.classList.remove('menu__link--especialidades-ativo');
  }
});

// Adiciona um evento 'resize' à janela
window.addEventListener('resize', function () {
  // Se a largura da janela for maior que 580 pixels (desktop)
  if (window.innerWidth > 667) {
    // Remove a classe 'menu__submenu--mobile-open' para ocultar o submenu no mobile
    menuSubmenu.classList.remove('menu__submenu--mobile-open');
  }
});
