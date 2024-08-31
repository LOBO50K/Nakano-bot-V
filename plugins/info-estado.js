let handler = async (m, { conn, isRowner}) => {
let _muptime
let totalreg = Object.keys(global.db.data.users).length
let totalchats = Object.keys(global.db.data.chats).length
let pp = imagen1
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) 
const used = process.memoryUsage()
let yaemori = `╭─⬣「 *𝑬𝒔𝒕𝒂𝒅𝒐 𝒅𝒆 𝑵𝒂𝒌𝒂𝒏𝒐 𝑩𝒐𝒕* 」⬣\n`
yaemori += `│ 🜲 *𝑪𝒓𝒆𝒂𝒅𝒐𝒓 ∙* 𝑳𝒐𝒃𝒐\n`
yaemori += `│ 🜅 *𝑮𝒓𝒖𝒑𝒐𝒔 𝒖𝒏𝒊𝒅𝒐𝒔 ∙* ${groupsIn.length}\n`
yaemori += `│ 🜋 *𝑪𝒉𝒂𝒕𝒔 𝒑𝒓𝒊𝒗𝒂𝒅𝒐 ∙* ${chats.length - groupsIn.length}\n`
yaemori += `│ 🜊 *𝑻𝒐𝒕𝒂𝒍 𝒅𝒆 𝒄𝒉𝒂𝒕𝒔 ∙* ${chats.length}\n`
yaemori += `│ 🝠 *𝑼𝒔𝒖𝒂𝒓𝒊𝒐𝒔 𝒓𝒆𝒈𝒊𝒔𝒕𝒓𝒂𝒅𝒐𝒔 ∙* ${totalreg}\n`
yaemori += `│ 🜾 *𝑮𝒓𝒖𝒑𝒐𝒔 𝒓𝒆𝒈𝒊𝒔𝒕𝒓𝒂𝒅𝒐𝒔 ∙* ${totalchats}\n`
yaemori += `│ 🜚 *𝑨𝒄𝒕𝒊𝒗𝒊𝒅𝒂𝒅 ∙* ${muptime}\n`
yaemori += `╰─⬣`
await conn.sendFile(m.chat, pp, 'yaemori.jpg', yaemori, fkontak, null, rcanal)
}
handler.help = ['status']
handler.tags = ['info']
handler.command = ['estado', 'status', 'estate', 'state', 'stado', 'stats']
handler.register = true
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
