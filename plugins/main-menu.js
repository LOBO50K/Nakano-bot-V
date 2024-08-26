import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'

let tags = {
  'main': '𝕴𝖓𝖋𝖔',
  'buscador': '𝕭𝖚𝖘𝖖𝖚𝖊𝖉𝖆𝖘',
  'fun': '𝔍𝖚𝖊𝖌𝖔𝖘',
  'serbot': '𝕾𝖚𝖇-𝕭𝖔𝖙𝖘',
  'rpg': '𝕽𝕻𝕲',
  'rg': '𝕽𝖊𝖌𝖎𝖘𝖙𝖗𝖔',
  'xp': '𝕰𝖝𝖕𝖊𝖗𝖎𝖊𝖓𝖈𝖎𝖆',
  'sticker': '𝕾𝖙𝖎𝖈𝖐𝖊𝖗𝖘',
  'anime': '𝕬𝖓𝖎𝖒𝖊',
  'database': '𝕯𝖆𝖙𝖆𝖇𝖆𝖘𝖊',
  'fix': '𝕱𝖎𝖝𝖒𝖘𝖌𝖊𝖘𝖕𝖊𝖗𝖆',
  'grupo': '𝕲𝖗𝖚𝖕𝖔𝖘',
  'nable': '𝕺𝖓⋰𝕺𝖋𝖋', 
  'descargas': '𝕯𝖊𝖘𝖈𝖆𝖗𝖌𝖆𝖘',
  'tools': '𝕳𝖊𝖗𝖗𝖆𝖒𝖎𝖊𝖓𝖙𝖆𝖘',
  'info': '𝕴𝖓𝖋𝖔𝖗𝖒𝖆𝖈𝖎𝖔𝖓',
  'nsfw': '𝕹𝕾𝕱𝖂', 
  'owner': '𝕮𝖗𝖊𝖆𝖉𝖔𝖗⋰𝕺𝖜𝖓𝖊𝖗', 
  'audio': '𝕬𝖚𝖉𝖎𝖔𝖘', 
  'ai': '𝕬𝕴',
  'transformador': '𝕮𝖔𝖒𝖇𝖊𝖗𝖙𝖎𝖉𝖔𝖗𝖊𝖘',
}

const defaultMenu = {
  before: `*─ׄ─ׅ─⭒─ׄ─ׄ─⭒─ׅ─ׄ─⭒─ׄ─ׄ─⭒─ׄ─ׄ─*

“ 𝙷𝙾𝙻𝙰  *%name* 𝚂𝙾𝙼𝙾𝚂 *𝙻𝙰𝚂 𝙷𝙴𝚁𝙼𝙰𝙽𝙰𝚂 𝙽𝙰𝙺𝙰𝙽𝙾* 𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙾/𝙰, 𝙰 𝙽𝚄𝙴𝚂𝚃𝚁𝙾 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻, %greeting ”

┏━「💝⸽⃕ *𝕴𝖓𝖋𝖔𝖗𝖒𝖆𝖈𝖎𝖔𝖓* 💘✰」━⊜
┃⋄ ❣️ *𝕭𝖔𝖙:* 𝙽𝙰𝙺𝙰𝙽𝙾-𝙱𝙾𝚃  
┃⋄ 💖 *𝕸𝖔𝖉𝖔* 𝙿𝚄𝙱𝙻𝙸𝙲𝙾
┃⋄ 💟 *𝕭𝖆𝖎𝖑𝖊𝖞𝖘:* 𝙼𝚄𝙻𝚃𝙸 𝙳𝙴𝚅𝙸𝙲𝙴
┃⋄ ⌛️ *𝕿𝖎𝖊𝖒𝖕𝖔 𝖆𝖈𝖙𝖎𝖛𝖆:* %muptime
┃⋄ 🫂 *𝖀𝖘𝖚𝖆𝖗𝖎𝖔𝖘:* %totalreg
┗━━◘
%readmore
┏━「💟⸽⃕ *𝖀𝖘𝖚𝖆𝖗𝖎𝖔*💕✰」━⊜
┃⋄ 💖 *𝕮𝖑𝖎𝖊𝖓𝖙𝖊:* %name
┃⋄ 💌 *𝕰𝖃𝕻:* %exp
┃⋄ 🌟 *𝕰𝖘𝖙𝖗𝖊𝖑𝖑𝖆𝖘:* %estrellas
┃⋄ 💕 *𝕹𝖎𝖛𝖊𝖑:* %level
┃⋄ 💝 *𝕽𝖆𝖓𝖌𝖔:* %role
┗━━◘
%readmore
*─ׄ─ׄ─⭒─ׄ─ׅ─ׄ⭒─ׄ─ׄ─⭒─ׄ─ׄ─⭒─ׄ─ׅ─*

\t*𝕷 𝕴 𝕾 𝕿 𝕬  ⋰  𝕯 𝕰  ⋰  𝕮 𝕺 𝕸 𝕬 𝕹 𝕯 𝕺 𝕾* 
`.trimStart(),
    header: '*┏━⊜༒💕「 %category 」💞༒*',
  body: '*┃›* %cmd',
  footer: '*✰💖┗━⬣💝✰*\n',
  after: `> ${dev}`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, estrellas, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'es'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        estrellas: plugin.estrellas,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == conn.user.jid ? '' : `Powered by https://wa.me/${conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%isdiamond/g, menu.diamond ? '(ⓓ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
taguser: '@' + m.sender.split("@s.whatsapp.net")[0],
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
botofc: (conn.user.jid == global.conn.user.jid ? '🚩 𝙴𝚂𝚃𝙴 𝙴𝚂 𝙴𝙻 𝙱𝙾𝚃 𝙾𝙵𝙲' : `🚩 𝚂𝚄𝙱-𝙱𝙾𝚃 𝙳𝙴: Wa.me/${global.conn.user.jid.split`@`[0]}`), 
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
greeting, level, estrellas, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

await m.react('⭐️') 

conn.sendMessage(m.chat, {text: text.trim(), mentions: [...text.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: { mentionedJid: [...text.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": packname, body: dev, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen1, "mediaUrl": global.channel, "sourceUrl": global.channel}}}, {quoted: m})

  } catch (e) {
    conn.reply(m.chat, '❌️ Lo sentimos, el menú tiene un error', m, rcanal, )
    throw e
  }
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'help', 'menú', 'menuall', 'allmenú', 'allmenu', 'menucompleto'] 
handler.register = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

  var ase = new Date();
  var hour = ase.getHours();
switch(hour){
  case 0: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 1: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 💤'; break;
  case 2: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🦉'; break;
  case 3: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 4: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 5: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 6: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌄'; break;
  case 7: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 8: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 9: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 10: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌞'; break;
  case 11: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌨'; break;
  case 12: hour = 'Bᴜᴇɴᴏs Dɪᴀs ❄'; break;
  case 13: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌤'; break;
  case 14: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌇'; break;
  case 15: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🥀'; break;
  case 16: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌹'; break;
  case 17: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌆'; break;
  case 18: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 19: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 20: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌌'; break;
  case 21: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 22: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 23: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
}
  var greeting = hour;
