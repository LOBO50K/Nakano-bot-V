import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
   ['573218138672', 'Owner 🍭', true],
   ['573012482597', 'Dev Diego 👑', true],
   ['50558124470'],
   ['573218138672'],
   ['5351524614'],
   ['573027866596']
]

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = []
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = '⪛✰ 𝐀𝐢 𝐘𝐚𝐞𝐦𝐨𝐫𝐢 - 𝐌𝐃 ✰⪜'
global.botname = '𝗔𝗶 𝗬𝗮𝗲𝗺𝗼𝗿𝗶 - 𝗠𝗗 🍭'
global.wm = '𝗬𝗮𝗲𝗺𝗼𝗿𝗶 𝗕𝗼𝘁 - 𝗠𝗗 ⭐️'
global.author = '𝖮𝖿𝖼.𝖣𝗂𝖾𝗀𝗈 👑'
global.dev = '🚩 Powered By あ S_ᴅɪᴇɢᴏ あ'
global.textbot = '𝗔𝗶 𝗬𝗮𝗲𝗺𝗼𝗿𝗶 : 𝗢𝗳𝗰𝗗𝗶𝗲𝗴𝗼 🚩'
global.vs = '2.0.5'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.imagen1 = fs.readFileSync('./Menu.jpg')
global.imagen2 = fs.readFileSync('./Menu2.jpg')
global.imagen3 = fs.readFileSync('./Menu3.jpg')
global.welcome = fs.readFileSync('./media/welcome.jpg')
global.adios = fs.readFileSync('./media/adios.jpg')
global.catalogo = fs.readFileSync('./storage/img/catalogo.jpg')
global.miniurl = fs.readFileSync('./storage/img/miniurl.jpg')

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.grupo = 'https://chat.whatsapp.com/BeukLUNoHtNJDKmMDTfQnd' //grupo oficial de yaemoribot
global.grupo2 = 'https://chat.whatsapp.com/EVc2XJuZwjnKKdWUsRYmms' //grupo oficial2 de yaemoribot
global.grupo3 = 'https://chat.whatsapp.com/Ksd32KH9zFoDmO1PJt44M7' //grupo de colaboración gatabot
global.canal = 'https://whatsapp.com/channel/0029VaQD7LAJP216tu9liI2A' //cana oficial
global.channel = 'https://whatsapp.com/channel/0029VaQD7LAJP216tu9liI2A' //canal oficial
global.md = 'https://github.com/Dev-Diego/YaemoriBot-MD' //github oficial 
global.yt = 'https://www.youtube.com/@OfcDiego' //youtube
global.correo = 'theyaemoribot@gmail.com' //tiktok

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '🍭 𝗦𝘂𝗽𝗲𝗿 𝗔𝗶 𝗬𝗮𝗲𝗺𝗼𝗿𝗶 🍟', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment        

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})