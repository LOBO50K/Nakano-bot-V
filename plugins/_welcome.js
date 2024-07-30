import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
if (!m.messageStubType || !m.isGroup) return !0
let vn = 'https://qu.ax/cUYg.mp3'
let byegc = 'https://qu.ax/WUEu.webp'
let img = imagen1
let chat = global.db.data.chats[m.chat]

if (chat.welcome && m.messageStubType == 27) {
this.sendMessage(m.chat, { audio: { url: vn }, contextInfo:{ mentionedJid:[nombre], "externalAdReply": { "thumbnail": img, "title": `乂 Ｗ Ｅ Ｌ Ｃ Ｏ Ｍ Ｅ 乂`, "body": dev, "previewType": "PHOTO", "thumbnailUrl": null, "showAdAttribution": true,  sourceUrl: [tiktok, yt, md, channel].getRandom()}},  ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: fkontak })}

if (chat.welcome && m.messageStubType == 28) {
this.sendMessage(m.chat, { text: `\`\`\`[!] C fue alv : @${m.messageStubParameters[0].split`@`[0]} 😹\`\`\``,
contextInfo:{ forwardedNewsletterMessageInfo: { newsletterJid: '120363160031023229@newsletter', serverMessageId: '', newsletterName: namechannel }, forwardingScore: 9999999, isForwarded: true, mentionedJid:[nombre], "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": '乂 Ａ Ｄ Ｉ Ｏ́ Ｓ 乂', body: `Esperemos que no vuelva -_-`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": img, "sourceUrl": `${redes}`}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (chat.welcome && m.messageStubType == 32) {
this.sendMessage(m.chat, { text: `\`\`\`[!] C fue alv : @${m.messageStubParameters[0].split`@`[0]} 😹\`\`\``,
contextInfo:{ forwardedNewsletterMessageInfo: { newsletterJid: '120363160031023229@newsletter', serverMessageId: '', newsletterName: namechannel }, forwardingScore: 9999999, isForwarded: true, mentionedJid:[nombre], "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": '乂 Ａ Ｄ Ｉ Ｏ́ Ｓ 乂', body: `Esperemos que no vuelva -_-`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": img, "sourceUrl": `${redes}`}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}}

/*import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let img = imagen1
  let chat = global.db.data.chats[m.chat]

  if (chat.welcome && m.messageStubType == 27) {
    let welcome = `┌─★ *Ai Yaemori - MD* \n│「 Bienvenido 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✑  Bienvenido a\n   │✑  ${groupMetadata.subject}\n   └───────────────┈ ⳹`
await conn.sendMini(m.chat, packname, dev, welcome, img, img, redes, fkontak)
  }

  if (chat.welcome && m.messageStubType == 28) {
    let bye = `┌─★ *Ai Yaemori - MD* \n│「 ADIOS 👋 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✑  Se fue\n   │✑ Jamás te quisimos aquí\n   └───────────────┈ ⳹`
await conn.sendMini(m.chat, packname, dev, bye, img, img, redes, fkontak)
  }

  if (chat.welcome && m.messageStubType == 32) {
    let kick = `┌─★ *Ai Yaemori - MD* \n│「 ADIOS 👋 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✑  Se fue\n   │✑ Jamás te quisimos aquí\n   └───────────────┈ ⳹`
await conn.sendMini(m.chat, packname, dev, kick, img, img, redes, fkontak)
}}*/