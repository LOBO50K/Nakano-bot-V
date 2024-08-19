import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {

let cuentas = `🍭 *C U E N T A S - O F C S* 🍭

*\`\♡ Propietario:\`\*
• ${creador}

*\`\♡ Bot Principal:\`\*
• Wa.me/${ofcbot}

*\`\♡ Grupo Oficial:\`\*
• ${grupo}

*\`\♡ Grupo Oficial2:\`\*
• ${grupo2}

*\`\♡ Canal:\`\*
• ${channel}

*\`\♡ Asistencia:\`\*
• ${asistencia}`

await conn.sendFile(m.chat, imagen1, "yaemori.jpg", cuentas, m, null, rcanal)

await m.react(emojis)

}
handler.help = ['cuentasoficiales']
handler.tags = ['main']
handler.command = ['cuentas', 'cuentasai', 'cuentasoficiales']
export default handler