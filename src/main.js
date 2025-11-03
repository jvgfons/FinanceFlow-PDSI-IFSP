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
