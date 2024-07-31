var handler = async (m, { text,  usedPrefix, command }) => {

global.anime = `${waifu.nombre}`

//rollwaifus
const waifus = [
{ nombre: 'Mikasa Ackerman', anime: 'Shingeki no Kyojin' },
{ nombre: 'Asuna Yuuki', anime: 'Sword Art Online' },
{ nombre: 'Hestia', anime: 'DanMachi' },
{ nombre: 'Rias Gremory', anime: 'High School DxD' },
{ nombre: 'Saber', anime: 'Fate/stay night' },
// Agrega más waifus aquí...
]

// Función para obtener una waifu aleatoria
function obtenerWaifuAleatoria() {
const indiceAleatorio = Math.floor(Math.random() * waifus.length)
return waifus[indiceAleatorio]}

// Función para mostrar la waifu obtenida
function mostrarWaifu(waifu) {
conn.reply(m.chat, `🚩 Waifu: ${waifu.nombre}\n✨️ Base: ${waifu.anime}`, m, rcanal)}

// Ejecuta la función para obtener y mostrar una waifu aleatoria
const waifuAleatoria = obtenerWaifuAleatoria();
mostrarWaifu(waifuAleatoria)}

handler.command = ['rw', 'rollwaifu']
handler.help = ['rw']
handler.tags = ['anime']
handler.premium = false
export default handler