// Elementos da tela inicial
const enterBtn = document.getElementById('enterBtn');
const introScreen = document.getElementById('introScreen');
const mainContent = document.getElementById('mainContent');
const yearRange = document.getElementById('yearRange');
const yearLabel = document.getElementById('yearLabel');

let map;
let events = [];
let markers = [];

// Entrar no site
enterBtn.addEventListener('click', () => {
  introScreen.style.display = 'none';
  mainContent.classList.remove('hidden');
  initMap();
});

// Inicializar mapa
function initMap() {
  map = L.map('map').setView([20, 0], 2);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap contributors' }).addTo(map);

  // Carregar eventos do JSON
  fetch('events.json')
    .then(res => res.json())
    .then(data => {
      events = data;
      updateEvents(parseInt(yearRange.value));
    });
}

// Cores por tipo de evento
function getMarkerColor(type){
  switch(type){
    case "Guerra": return 'red';
    case "Descoberta": return 'blue';
    case "Política": return 'green';
    case "Ciência": return 'purple';
    case "Religião": return 'orange';
    case "Saúde": return 'pink';
    default: return 'gray';
  }
}

// Criar marcador animado
function createAnimatedMarker(ev){
  const color = getMarkerColor(ev.type);
  const marker = L.circleMarker([ev.lat, ev.lng], {
    radius: 8,
    color: color,
    fillColor: color,
    fillOpacity: 0.8
  }).addTo(map).bindPopup(`<b>${ev.name}</b><br>${ev.desc}<br><i>${ev.year}</i>`);

  // Pulse animation
  let growing = true;
  let radius = 8;
  setInterval(()=>{
    if(growing) radius+=0.3; else radius-=0.3;
    if(radius>=12) growing=false;
    if(radius<=8) growing=true;
    marker.setRadius(radius);
  },100);

  return marker;
}

// Atualizar eventos no mapa
function updateEvents(year){
  markers.forEach(m => map.removeLayer(m));
  markers = [];
  const filtered = events.filter(ev => ev.year <= year);
  filtered.forEach((ev,index)=>{
    setTimeout(()=>{
      markers.push(createAnimatedMarker(ev));
    },index*150); // efeito de simulação histórica
  });
}

// Linha do tempo interativa
yearRange.addEventListener('input',()=>{
  const year = parseInt(yearRange.value);
  yearLabel.textContent = "Ano: "+year;
  updateEvents(year);
});