/*
💥 Codigo Realizado Por : 
• OfcDiego (https://github.com/OfcDiego)
✨️ Creado Para : 
• Ai Yaemori - MD
*/

//aun no funciona correctamente.


// Creamos un objeto para almacenar las waifus reclamadas
let waifusReclamadas = {
  // Aquí puedes agregar tus waifus reclamadas
  "Mikasa Ackerman": "Ataque a los Titanes",
  "Asuna Yuuki": "Sword Art Online",
  "Rias Gremory": "High School DxD"
};

// Función para mostrar las waifus reclamadas
function mostrarWaifusReclamadas() {
  m.reply("Tus waifus reclamadas son:");
  for (let waifu in waifusReclamadas) {
    m.reply(`${waifu} de ${waifusReclamadas[waifu]}`);
  }
}

// Llamamos a la función para mostrar las waifus reclamadas
mostrarWaifusReclamadas()}


handler.command = ['c', 'reclamar']
handler.help = ['c']
handler.tags = ['anime']
handler.premium = false
export default handler