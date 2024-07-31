/*
💥 Codigo Realizado Por : 
• OfcDiego (https://github.com/OfcDiego)
✨️ Creado Para : 
• Ai Yaemori - MD
*/

var handler = async (m, { text,  usedPrefix, command }) => {

//rollwaifus
const waifus = [
{ nombre: 'Mini Yaemori', anime: 'Rent-A-Girlfriend', precio: '400', img: 'https://telegra.ph/file/86c564017ca2ccf10f008.jpg' },
// Agrega más waifus aquí...
]

// Función para obtener una waifu aleatoria
function obtenerWaifuAleatoria() {
const indiceAleatorio = Math.floor(Math.random() * waifus.length)
return waifus[indiceAleatorio]}

// Función para mostrar la waifu obtenida
function mostrarWaifu(waifu) {
await conn.sendMini(m.chat, packname, wm, txt, `${waifu.img}`, `${waifu.img}`, redes, fkontak)
let txt = `🚩 Nombre: ${waifu.nombre}\n✨️ Base: ${waifu.anime}\n💰 Valor: ${waifu.precio}` // m, rcanal)
}

// Ejecuta la función para obtener y mostrar una waifu aleatoria
const waifuAleatoria = obtenerWaifuAleatoria();
mostrarWaifu(waifuAleatoria)}

handler.command = ['rw', 'rollwaifu']
handler.help = ['rw']
handler.tags = ['anime']
handler.premium = false
export default handler