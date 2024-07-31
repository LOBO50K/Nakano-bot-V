/*
💥 Codigo Realizado Por : 
• OfcDiego (https://github.com/OfcDiego)
✨️ Creado Para : 
• Ai Yaemori - MD
*/

//aun no funciona correctamente.

// Creamos un objeto para almacenar las waifus disponibles
let waifusDisponibles = [
  { nombre: "Mikasa Ackerman", serie: "Ataque a los Titanes" },
  { nombre: "Asuna Yuuki", serie: "Sword Art Online" },
  { nombre: "Rias Gremory", serie: "High School DxD" },
  { nombre: "Hestia", serie: "Is It Wrong to Try to Pick Up Girls in a Dungeon?" },
  { nombre: "Rem", serie: "Re:Zero" }
];

// Creamos un objeto para almacenar las waifus reclamadas
let waifusReclamadas = {};

// Función para reclamar una waifu aleatoria
function reclamarWaifu() {
  // Seleccionamos una waifu aleatoria del arreglo de waifus disponibles
  let waifuAleatoria = waifusDisponibles[Math.floor(Math.random() * waifusDisponibles.length)];

  // Verificamos si la waifu ya ha sido reclamada
  if (waifusReclamadas[waifuAleatoria.nombre]) {
    m.reply(`La waifu ${waifuAleatoria.nombre} ya ha sido reclamada.`);
  } else {
    // Agregamos la waifu a la lista de waifus reclamadas
    waifusReclamadas[waifuAleatoria.nombre] = waifuAleatoria.serie;
    m.reply(`Has reclamado a ${waifuAleatoria.nombre} de ${waifuAleatoria.serie}.`);
  }
}

// Llamamos a la función para reclamar una waifu
reclamarWaifu()}

handler.command = ['c', 'reclamar']
handler.help = ['c']
handler.tags = ['anime']
handler.premium = false
export default handler