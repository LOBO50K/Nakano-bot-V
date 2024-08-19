import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {

let grupos = `🍭 *G R U P O S - O F I C I A L E S:*

*♡ Grupo Oficial:*
• ${grupo}

*♡ Grupo Oficial2:*
• ${grupo2}

➠ Enlace anulado? entre aquí! 

*♡ Canal:*
• ${channel}

> ${dev}`

await conn.sendFile(m.chat, imagen2, "yaemori.jpg", grupos, m, null, rcanal)

await m.react(emojis)

}
handler.help = ['grupos']
handler.tags = ['main']
handler.command = ['grupos', 'aigrupos', 'gruposai']
export default handler