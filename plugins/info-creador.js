var handler = async (m, { conn }) => {
const p = nomorown
let pp = await conn.profilePictureUrl(`${p}@s.whatsapp.net`, 'image').catch((_) => icons)
let owner = `wa.me/${p}`
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; BANG SYAII\nZam\nORG: ${nameowner}\nTITLE:soft\nitem1.TEL;waid=${nomorown}:${nomorown}\nitem1.X-ABLabel:Contactar al propietario\nitem2.URL:https://github.com/OfcDiego\nitem2.X-ABLabel:💬 Más\nitem3.EMAIL;type=INTERNET: theyaemoribot@gmail.com\nitem3.X-ABLabel:Email\nitem4.ADR:;;🇲🇽 México;;;;\nitem4.X-ABADR:💬 Más\nitem4.X-ABLabel:Ubicación\nEND:VCARD`

const sentMsg = await conn.sendMessage(m.chat, {contacts: {displayName: wm,contacts: [{ vcard }]},    contextInfo: {externalAdReply: { title: packname, body: team, thumbnailUrl: pp, sourceUrl: null, mediaType: 1, showAdAttribution: true, renderLargerThumbnail: true }}}, { quoted: fkontak })
await conn.reply(m.chat,  '*❕ él es mi dueño, si quieres reportar un error contáctalo*', sentMsg)
}

handler.help = ['owner']
handler.tags = ['info']
handler.command = ['owner', 'creator']
// handler.estrellas = 1

export default handler

/*import PhoneNumber from 'awesome-phonenumber'

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
//m.react('⚙️')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let biografia = await conn.fetchStatus('573012482597' +'@s.whatsapp.net').catch(_ => 'Sin Biografía')
let biografiaBot = await conn.fetchStatus(`${conn.user.jid.split('@')[0]}` +'@s.whatsapp.net').catch(_ => 'Sin Biografía')
let bio = biografia.status?.toString() || 'Sin Biografía'
let biobot = biografiaBot.status?.toString() || 'Sin Biografía'
let name = await conn.getName(who)

  await sendContactArray(conn, m.chat, [
     [`${nomorown}`, `👑 Propietario`, `🚩 𝗢𝗳𝗰𝗗𝗶𝗲𝗴𝗼`, dev, correo, `🇨🇴 Colombia`, `${global.yt}`, bio],
[`${conn.user.jid.split('@')[0]}`, `Es Una Bot 🍟`, `${packname}`, `📵 No Hacer Spam`, correo, `🇨🇴 Colombia`, md, biobot]
], m)
  //m.reply(`Hola @${m.sender.split(`@`)[0]} este es el contacto de mi creador, no hagas spam!!`)
  } 

handler.help = ["creador","owner"]
handler.tags = ["info"]
handler.command = ['owner', 'creador']
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
item3.X-ABLabel:🏷 Region
item4.URL:${isi4}
item4.X-ABLabel:Website
item5.X-ABLabel:${isi5}
END:VCARD`.trim()
            contacts.push({ vcard, displayName: name })
        }
        return await conn.sendMessage(jid, {
            contacts: {
                displayName: (contacts.length > 1 ? `2013 kontak` : contacts[0].displayName) || null,
                contacts,
            }
        },
        {
            quoted,
            ...options
        })
        }*/