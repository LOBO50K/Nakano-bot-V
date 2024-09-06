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
   ['5493405480284', '𝑪𝒓𝒆𝒂𝒅𝒐𝒓 💞', true],
   ['5493405438423', '𝑵𝒂𝒌𝒂𝒏𝒐 𝑴𝑫', true],
   ['5493405480284'],
   ['5493405480284'],
   ['5493405480284'],
   ['5493405480284']
]

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = []
global.prems = []
// Cambiar a false para usar el Bot desde el mismo numero del Bot.
global.isBaileysFail = false

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = '༒✰𝕹𝖆𝖐𝖆𝖓𝖔-𝕭𝖔𝖙✰༒'
global.botname = '𝕹𝖆𝖐𝖆𝖓𝖔-𝕭𝖔𝖙 ♥︎'
global.wm = '𝕹𝖆𝖐𝖆𝖓𝖔 𝕭𝖔𝖙 - 𝕸𝕯 ⭐️'
global.author = '𝙾𝙵𝙲 - 𝙻𝙾𝙱𝙾 👑'
global.dev = '© Powered By Nakano-Bot'
global.textbot = '𝕹𝖆𝖐𝖆𝖓𝖔-𝕭𝖔𝖙 : 𝕺𝕱𝕮 𝕷𝕺𝕭𝕺'
global.vs = '2.0.6'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.imagen1 = fs.readFileSync('./Menu.jpg')
global.imagen2 = fs.readFileSync('./Menu2.jpg')
global.imagen3 = fs.readFileSync('./Menu3.jpg')
global.welcome = fs.readFileSync('./media/welcome.jpg')
global.adios = fs.readFileSync('./media/adios.jpg')
global.catalogo = fs.readFileSync('./storage/img/catalogo.jpg')
global.miniurl = fs.readFileSync('./storage/img/miniurl.jpg')

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.grupo = 'https://chat.whatsapp.com/DToXV6TAU8xFH1vBFT9lrq' //YaemoriBot
global.grupo2 = 'https://chat.whatsapp.com/DToXV6TAU8xFH1vBFT9lrq' //YaemoriBot2
global.grupo3 = 'https://chat.whatsapp.com/DToXV6TAU8xFH1vBFT9lrq' //team oficial
global.grupo4 = 'https://chat.whatsapp.com/DToXV6TAU8xFH1vBFT9lrq' //GataBot & YaemoriBot
global.channel = 'https://whatsapp.com/channel/0029VaXDEwlC1FuFm82otA0K'
global.channel2 = 'https://whatsapp.com/channel/0029VaXDEwlC1FuFm82otA0K'
global.md = 'https://github.com/LOBO50K/Nakano-bot-V.git' 
global.yt = 'https://www.youtube.com/@OfcDiego'
global.tiktok = 'https://tiktok.com/@theyaemoribot'
global.correo = 'playperfect344@gmail.com

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '💞 𝙽𝙰𝙺𝙰𝙽𝙾-𝙱𝙾𝚃 𝙼𝙳💖', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

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
