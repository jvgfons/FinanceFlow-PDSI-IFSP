// Marca "lido" e salva no localStorage
const statusEl = document.getElementById('statusLeitura');
const btnConcluido = document.getElementById('btnMarcarConcluido');
const btnTopo = document.getElementById('btnVoltarTopo');

const STORAGE_KEY = 'finance-flow-proposta-lida';

// Estado inicial
(function init() {
  const lida = localStorage.getItem(STORAGE_KEY) === 'true';
  if (lida) {
    statusEl.textContent = 'Status: proposta marcada como lida ✅';
  } else {
    statusEl.textContent = 'Status: proposta ainda não lida';
  }
})();

// Ação: marcar como lido
btnConcluido.addEventListener('click', () => {
  localStorage.setItem(STORAGE_KEY, 'true');
  statusEl.textContent = 'Status: proposta marcada como lida ✅';
});

// Ação: voltar ao topo
btnTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function setupScrollSpy() {
  const nav = document.querySelector('header .navbar');
  if (!nav || typeof bootstrap === 'undefined') return;

  const h = Math.ceil(nav.getBoundingClientRect().height) + 10; // folguinha
  document.documentElement.style.setProperty('--nav-h', `${h}px`);

  // Destroi instância anterior se existir e recria com offset correto
  const prev = bootstrap.ScrollSpy.getInstance(document.body);
  if (prev) prev.dispose();

  new bootstrap.ScrollSpy(document.body, {
    target: '#navbarNav',
    offset: h
  });
}

// Inicializa e mantém atualizado
document.addEventListener('DOMContentLoaded', () => {
  setupScrollSpy();
  // Fecha o menu colapsado ao clicar nos links (mobile)
  const nav = document.getElementById('navbarNav');
  nav?.querySelectorAll('a.nav-link[href^="#"]').forEach(a => {
    a.addEventListener('click', () => {
      const c = bootstrap.Collapse.getInstance(nav);
      if (c) c.hide();
    });
  });
});

window.addEventListener('load', setupScrollSpy);
window.addEventListener('resize', () => {
  // Debounce simples
  clearTimeout(window.__spyRsz);
  window.__spyRsz = setTimeout(setupScrollSpy, 150);
});


