/*
💥 Codigo Realizado Por : 
• OfcDiego (https://github.com/OfcDiego)
• DarkesJs (https://githib.com/WOTCHITA)
✨️ Creado Para : 
• Ai Yaemori - MD
*/

var handler = async (m, { text,  usedPrefix, command }) => {

//rollwaifus
const waifus = [
{ nombre: 'Ruby Hoshino', anime: 'Oshi no Ko', precio: '5', img: 'https://telegra.ph/file/651922149737fd9f6533c.jpg' },
{ nombre: 'Mikasa Ackerman', anime: 'Shingeki no Kyojin', precio: '10', img: 'https://telegra.ph/file/651922149737fd9f6533c.jpg' },
// Agrega más waifus aquí...
]

// Función para obtener una waifu aleatoria
function obtenerWaifuAleatoria() {
const indiceAleatorio = Math.floor(Math.random() * waifus.length)
return waifus[indiceAleatorio]}

// Función para mostrar la waifu obtenida
function mostrarWaifu(waifu) {
// conn.reply(m.chat, `🚩 Nombre: ${waifu.nombre}\n✨️ Base: ${waifu.anime}\n💰 Valor: ${waifu.precio}`, m, rcanal)
  conn.sendFile(m.chat, img, 'error.jpg', `🚩 Nombre: ${waifu.nombre}\n✨️ Base: ${waifu.anime}\n💰 Valor: ${waifu.precio}`, m, null, rcanal);}

// Ejecuta la función para obtener y mostrar una waifu aleatoria
const waifuAleatoria = obtenerWaifuAleatoria();
mostrarWaifu(waifuAleatoria)}

handler.command = ['rw', 'rollwaifu']
handler.help = ['rw']
handler.tags = ['anime']
export default handler