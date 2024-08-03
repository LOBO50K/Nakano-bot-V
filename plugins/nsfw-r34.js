//import { igdl } from 'ruhend-scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) return conn.reply(m.chat, `🚩 El grupo no admite contenido *Nsfw.*`, m, rcanal)
if (!text) return m.reply('🚩 Ingresa el nombre de la imágen que estas buscando.')
await m.react(rwait)
try {
//let { dl_url } = await Starlights.rule34(text)
const url = `https://rule34.xxx/index.php?page=dapi&s=post&q=index&json=1&tags=${use}`;
await conn.sendFile(m.chat, url, 'thumbnail.jpg', `*» Resultado* : ${text}`, m, null, rcanal)
await m.react(done)
} catch {
conn.reply(m.chat, '🚩 Ocurrió un error', m, fake)
await m.react(error)
}}
handler.help = ['rule34 *<búsqueda>*']
handler.tags = ['nsfw']
handler.command = ['rule34', 'r34']
handler.register = true 
//handler.estrellas = 20
//handler.group = true 
export default handler