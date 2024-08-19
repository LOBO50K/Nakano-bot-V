var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
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

this.sendContact(m.chat, data.map(([id, name]) => [id, name]), fkontak, { contextInfo: { externalAdReply: { showAdAttribution: true }}})
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = ['creador', 'creator', 'owner', 'propietario', 'dueño']

export default handler

/*import PhoneNumber from 'awesome-phonenumber'

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let biografia = await conn.fetchStatus('573012482597' +'@s.whatsapp.net').catch(_ => 'Sin Biografía')
let biografiaBot = await conn.fetchStatus(`${conn.user.jid.split('@')[0]}` +'@s.whatsapp.net').catch(_ => 'Sin Biografía')
let bio = biografia.status?.toString() || 'Sin Biografía'
let biobot = biografiaBot.status?.toString() || 'Sin Biografía'
let name = await conn.getName(who)

await sendContactArray(conn, m.chat, [
[`${nomorown}`, `👑 Propietario`, `🚩 𝗢𝗳𝗰𝗗𝗶𝗲𝗴𝗼`, dev, correo, `🇨🇴 Colombia`, `${yt}`, bio],
[`${conn.user.jid.split('@')[0]}`, `Es Una Bot 🍟`, `${wm}`, `📵 No Hacer Spam`, correo, `🇨🇴 Colombia`, md, biobot]
], m)

await conn.reply(m.chat,  `*❕ ${name} él es mi dueño, si quieres reportar un error contáctalo*`, m, fake)
}

handler.help = ['owner']
handler.tags = ['info']
handler.command = ['owner', 'creator']
// handler.estrellas = 1

export default handler

async function sendContactArray(conn, jid, data, quoted, options) {
if (!Array.isArray(data[0]) && typeof data[0] === 'string') data = [data]
let contacts = []
for (let [number, name, isi, isi1, isi2, isi3, isi4, isi5] of data) {
number = number.replace(/[^0-9]/g, '')
let njid = number + '@s.whatsapp.net'
let biz = await conn.getBusinessProfile(njid).catch(_ => null) || {}
// N:;${name.replace(/\n/g, '\\n').split(' ').reverse().join(';')};;;
let vcard = `
BEGIN:VCARD
VERSION:3.0
N:Sy;Bot;;;
FN:${name.replace(/\n/g, '\\n')}
item.ORG:${isi}
item1.TEL;waid=${number}:${PhoneNumber('+' + number).getNumber('international')}
item1.X-ABLabel:${isi1}
item2.EMAIL;type=INTERNET:${isi2}
item2.X-ABLabel:📧 Email
item3.ADR:;;${isi3};;;;
item3.X-ABADR:ac
item3.X-ABLabel:⭐️ Region
item4.URL:${isi4}
item4.X-ABLabel:Website
item5.X-ABLabel:${isi5}
END:VCARD`.trim()
contacts.push({ vcard, displayName: name })}
return await conn.sendMessage(jid, {
contacts: {
displayName: (contacts.length > 1 ? `2013 kontak` : contacts[0].displayName) || null,
contacts,
}},
{ quoted, 
...options
})}*/