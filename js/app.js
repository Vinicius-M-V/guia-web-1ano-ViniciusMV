// Seleção de elementos DOM
const html = document.documentElement;
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const temaToggle = document.querySelector('.tema-toggle');

// Configuração do menu mobile
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', 
        menuToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
    );
});

// Configuração do toggle de tema
function setTema(tema) {
    html.className = tema;
    localStorage.setItem('tema', tema);
    // Atualiza o ícone do botão
    temaToggle.textContent = tema === 'tema-escuro' ? '🌜' : '🌞';
}

// Carrega o tema salvo ou usa o padrão
const temaSalvo = localStorage.getItem('tema');
if (temaSalvo) {
    setTema(temaSalvo);
}

// Toggle do tema
temaToggle.addEventListener('click', () => {
    const novoTema = html.className === 'tema-escuro' ? 'tema-claro' : 'tema-escuro';
    setTema(novoTema);
});
