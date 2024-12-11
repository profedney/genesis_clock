// Idade do universo em segundos no "nascimento" do Unix Epoch (10 zeros removidos)
const GENESIS_BASE = "43500000"; // Parte fixa: 4,35 × 10^17 sem os últimos 10 dígitos

// Função para atualizar o Genesis Clock
function updateGenesisClock() {
  let nowUnixSeconds = Math.floor(Date.now() / 100); // Tempo atual em segundos (Unix Time)
  let genesisClock = GENESIS_BASE + nowUnixSeconds.toString(); // Concatena a parte fixa com o Unix Epoch atual
  document.getElementById("genesis-clock").textContent = genesisClock;
}

// Atualiza o relógio imediatamente ao carregar
updateGenesisClock();

// Atualiza o relógio a cada segundo
setInterval(updateGenesisClock, 100);
