/*
💥 Codigo Realizado Por : 
• OfcDiego (https://github.com/OfcDiego)
✨️ Creado Para : 
• Ai Yaemori - MD
*/

//aun no funciona correctamente.

// Creamos un objeto para almacenar las waifus reclamadas
let waifusReclamadas = {};

// Función para reclamar una waifu
function reclamarWaifu(nombreWaifu) {
  // Si la waifu ya ha sido reclamada, no hacemos nada
  if (waifusReclamadas[nombreWaifu]) {
    m.reply(`La waifu ${nombreWaifu} ya ha sido reclamada.`);
    return;
  }

  // Si no, la agregamos al objeto y mostramos un mensaje
  waifusReclamadas[nombreWaifu] = true;
  m.reply(`La waifu ${nombreWaifu} ha sido reclamada.`);
}

// Función para contar la cantidad de waifus reclamadas
function contarWaifusReclamadas() {
  // Usamos Object.keys() para obtener un arreglo con los nombres de las waifus reclamadas
  let nombresWaifus = Object.keys(waifusReclamadas);
  // Retornamos la longitud del arreglo, que es la cantidad de waifus reclamadas
  return nombresWaifus.length;
}

// Ejemplo de uso:
reclamarWaifu("Mikasa");
reclamarWaifu("Asuna");
reclamarWaifu("Mikasa"); // No se reclama de nuevo

console.log(`Cantidad de waifus reclamadas: ${contarWaifusReclamadas()}`);
}

handler.command = ['c', 'reclamar']
handler.help = ['c']
handler.tags = ['anime']
handler.premium = false
export default handler