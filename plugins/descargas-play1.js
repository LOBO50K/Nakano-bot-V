import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
const handler = async (m, {conn, command, args, text, usedPrefix}) => {
if (!text) throw `_𝐄𝐬𝐜𝐫𝐢𝐛𝐞 𝐮𝐧𝐚 𝐩𝐞𝐭𝐢𝐜𝐢𝐨́𝐧 𝐥𝐮𝐞𝐠𝐨 𝐝𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐞𝐣𝐞𝐦𝐩𝐥𝐨:_ \n*${usedPrefix + command} Billie Eilish - Bellyache*`
try { 
const yt_play = await search(args.join(' '))
const texto1 = `
╭ׅׄ̇─͓̗̗─ׅ̻ׄ╮۪̇߭⊹߭̇︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇߭︹ׅ۪ׄ̇߭̇⊹
┟─⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪𝑫𝑬𝑺𝑪𝑨𝑹𝑮𝑨𝑺 𝒀𝑻໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪╮
╭┄─⚜️⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪𝑫𝑹𝑨𝑲𝑶-𝑩𝑶𝑻໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪╯
│
├ 🔱. _*𝑻𝑰𝑻𝑼𝑳𝑨𝑫𝑶
├» ${yt_play[0].title}
├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┄
├ 🔱. _*𝑷𝑼𝑩𝑳𝑰𝑪𝑨𝑫𝑶*_
├» ${yt_play[0].ago}
├╌╌╌╌╌╌╌╌╌╌╌╌╌╌┈
├ 🔱. _*𝑫𝑼𝑹𝑨𝑪𝑰𝑶𝑵*_
├» ${secondString(yt_play[0].duration.seconds)}
├╌╌╌╌╌╌╌╌╌╌╌╌┄
├ 🔱. _*𝑽𝑰𝑺𝑰𝑻𝑨𝑺*_
├» ${MilesNumber(yt_play[0].views)}
├╌╌╌╌╌╌╌╌╌╌┄
├ 🔱. _*𝑨𝑼𝑻𝑶𝑹(𝒂)*_
├» ${yt_play[0].author.name}
├╌╌╌╌╌╌╌╌┈
├ 🔱. _*𝑬𝑵𝑳𝑨𝑪𝑬*_
├» ${yt_play[0].url}
╰ׁ̻۫─۪۬─۟─۪─۫─۪۬─۟─۪─۟─۪۬─۟─۪─۟─۪۬─۟─۪─۟┄۪۬┄۟┄۪┈۟┈۪`.trim()

await conn.sendButton(m.chat, wm, texto1, yt_play[0].thumbnail, [['𝑴𝒆𝒏𝒖 ✅', `${usedPrefix}menu`],['✨ 𝑨𝑼𝑫𝑰𝑶 𝒀𝑻',`${usedPrefix}play5 ${yt_play[0].url}`],['✨ 𝑽𝑰𝑫𝑬𝑶 𝒀𝑻',`${usedPrefix}play6 ${yt_play[0].url}`]], null, null, fgif2)
} catch (e) {
await conn.reply(m.chat, `*[ ! ] ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴇɴ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ғᴀᴠᴏʀ ɪɴᴛᴇɴᴛᴀ ᴍᴀs ᴛᴀʀᴅᴇ..*`, fkontak, m, rcanal)
console.log(`❗❗ᴇʀʀᴏʀ ${usedPrefix + command} ❗❗`)
console.log(e)
handler.limit = 0
}}
handler.command = ['play', 'play2', 'play3', 'play4']
//handler.limit = 3
handler.register = true 
handler.group = true
export default handler;

async function search(query, options = {}) {
const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
return search.videos;
}

function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = '$1.';
const arr = number.toString().split('.');
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
seconds = Number(seconds);
const d = Math.floor(seconds / (3600 * 24));
const h = Math.floor((seconds % (3600 * 24)) / 3600);
const m = Math.floor((seconds % 3600) / 60);
const s = Math.floor(seconds % 60);
const dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : '';
const hDisplay = h > 0 ? h + (h == 1 ? ' hora, ' : ' horas, ') : '';
const mDisplay = m > 0 ? m + (m == 1 ? ' minuto, ' : ' minutos, ') : '';
const sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : '';
return dDisplay + hDisplay + mDisplay + sDisplay;
}
