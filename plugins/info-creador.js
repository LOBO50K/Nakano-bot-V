var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }        

const owner = `👑 *Propietario:*
${creador}
༺═──────────────═༻
🍧 *Youtube:*
${yt}
༺═──────────────═༻
🍭 *Bot Oficial:*
Wa.me/${ofcbot}
*༺═──────────────═༻*
📧 *Correo:*
${correo}
༺═──────────────═༻
😊 *Asistencia:*
${asistencia}
༺═──────────────═༻`

await conn.sendFile(m.chat, imagen1, 'yaemori.jpg', owner, fkontak)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = ['creador', 'creator', 'owner', 'propietario', 'dueño']

export default handler