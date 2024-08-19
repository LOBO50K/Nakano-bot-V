import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {

let grupos = `🍭 *E N L A C E S :*

*\`\♡ Grupo Oficial :\`\*
• ${grupo}

*♡ Grupo2 :*
• ${grupo2}

➠ Enlace anulado? entre aquí! 

*♡ Canal :*
• ${channel}

*♡ Asistencia :*
• ${global.asistencia}

> ${dev}`

await conn.sendFile(m.chat, imagen2, "yaemori.jpg", grupos, m, null, rcanal)

await m.react(emojis)

}
handler.help = ['grupos']
handler.tags = ['main']
handler.command = ['grupos', 'aigrupos', 'gruposai']
export default handler