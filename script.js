document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão de menu (o ícone "hamburguer")
    const menuToggle = document.querySelector('.menu-toggle');
    // Seleciona o menu móvel
    const mobileMenu = document.getElementById('mobile-menu');
    // Seleciona todos os links dentro do menu móvel
    const menuLinks = mobileMenu.querySelectorAll('a');

    // 1. Alternar a visibilidade do menu ao clicar no botão
    menuToggle.addEventListener('click', function() {
        // Alterna a classe 'open' no menu
        mobileMenu.classList.toggle('open');
        
        // Alterna o atributo aria-expanded para acessibilidade
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        
        // Alterna o atributo aria-hidden
        mobileMenu.setAttribute('aria-hidden', isExpanded);
    });

    // 2. Fechar o menu ao clicar em um link (útil em navegação por âncora)
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove a classe 'open'
            mobileMenu.classList.remove('open');
            // Reseta os atributos de acessibilidade
            menuToggle.setAttribute('aria-expanded', 'false');
            mobileMenu.setAttribute('aria-hidden', 'true');
        });
    });
});