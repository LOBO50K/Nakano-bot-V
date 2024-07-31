// RollWaifu.js

// Array de waifus
const waifus = [
  { nombre: 'Mikasa Ackerman', anime: 'Shingeki no Kyojin' },
  { nombre: 'Asuna Yuuki', anime: 'Sword Art Online' },
  { nombre: 'Hestia', anime: 'DanMachi' },
  { nombre: 'Rias Gremory', anime: 'High School DxD' },
  { nombre: 'Saber', anime: 'Fate/stay night' },
  // Agrega más waifus aquí...
];

// Función para obtener una waifu aleatoria
function obtenerWaifuAleatoria() {
  const indiceAleatorio = Math.floor(Math.random() * waifus.length);
  return waifus[indiceAleatorio];
}

// Función para mostrar la waifu obtenida
function mostrarWaifu(waifu) {
  console.log(`Tu waifu es: ${waifu.nombre} de ${waifu.anime}`);
}

// Ejecuta la función para obtener y mostrar una waifu aleatoria
const waifuAleatoria = obtenerWaifuAleatoria();
mostrarWaifu(waifuAleatoria);

//};
handler.help = ['rollwaifu'];
handler.tags = ['anime'];
handler.command = ['rw', 'rollwaifu'];
handler.register = true;

export default handler;