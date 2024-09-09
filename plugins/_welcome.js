import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://tinyurl.com/2bhtm2h2')
  let img = await (await fetch(`${pp}`)).buffer()
  let chat = global.db.data.chats[m.chat]

  if (chat.bienvenida && m.messageStubType == 27) {
    let bienvenida = ` *${botname}* \n│✯ 𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙾 ✯\n @${m.messageStubParameters[0].split`@`[0]} \n   │✑  𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙾 𝙰\n   │✑  ${groupMetadata.subject}\n   └───────────────┈ ⳹`
    
await conn.sendAi(m.chat, botname, textbot, bienvenida, img, img, canal, estilo)
  }
  
  if (chat.bienvenida && m.messageStubType == 28) {
    let bye = ` *${botname}* \n│𖣔 𝙰𝙳𝙸𝙾𝚂 𖣔\n @${m.messageStubParameters[0].split`@`[0]} \n   │✑  𝚂𝙴 𝙵𝚄𝙴\n   │✑ 𝙰𝙳𝙸𝙾𝚂   └───────────────┈ ⳹`
await conn.sendAi(m.chat, botname, textbot, bye, img, img, canal, estilo)
  }
  
  if (chat.bienvenida && m.messageStubType == 32) {
    let kick = ` *${botname}* \n│🃟 𝙰𝙳𝙸𝙾𝚂 🃟\n @${m.messageStubParameters[0].split`@`[0]} \n   │✑  𝚂𝙴 𝙵𝚄𝙴\n   │✑ 𝙰𝙳𝙸𝙾𝚂  └───────────────┈ ⳹`
await conn.sendAi(m.chat, botname, textbot, kick, img, img, canal, estilo)
}}
