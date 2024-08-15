var handler  = async (m, { conn }) => {

let texto = `🚩 *Instalación de Ai Yaemori*

⬡ Dudas: ${creador}
⬡ Tutoríal: *¡Pronto!*

*Comandos de instalación via Termux ✏️*

termux-setup-storage

apt-get update -y && apt-get upgrade -y

pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn

git clone https://github.com/OfcDiego/YaemoriBot-MD && cd YaemoriBot-MD && yarn install && npm install 

ls

npm start

_Utilice "comandos" para enviarle los comandos uno por uno 🚩_

_Utilice "cafirexos" para enviarle la instalación por el host *Cafirexos* 🚩_`

conn.reply(m.chat, texto, m, rcanal )

handler.before = async m => {

if (/^comandos$/i.test(m.text) ) {
m.reply('termux-setup-storage')
await delay(1000 * 1)
m.reply('apt-get update -y && apt-get upgrade -y')
await delay(1000 * 1)
m.reply('pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn')
await delay(1000 * 1)
m.reply('git clone https://github.com/OfcDiego/YaemoriBot-MD && cd YaemoriBot-MD && yarn install && npm install ')
await delay(1000 * 1)
m.reply('ls')
await delay(1000 * 1)
m.reply('npm start')
}

if (/^olympus$/i.test(m.text) ) {
conn.reply(m.chat, '💠 *Instalación por Olympus*\n(nosotros no tenemos tutorial pero eso les puede ayudar)\n\n• Dashboard:\nhttps://dash.olympus-host.xyz\n\n• Panel:\nhttps://panel.olympus-host.xyz', m, rcanal)
await delay(2000 * 1)
conn.sendMessage(m.chat, {image: {url: 'https://telegra.ph/file/9532b7ff1fabc02d7e199.jpg'}, caption: ''}, {quoted: fkontak})
await delay(1000 * 1)
conn.sendMessage(m.chat, {image: {url: 'https://telegra.ph/file/26d87a519e24fe3ffbf82.jpg'}, caption: ''}, {quoted: fkontak})
}
}

}
handler.help = ['instalaryaemori']
handler.tags = ['main']
handler.command = ['instalarbot', 'instalarai', 'botinstalar', 'aiinstalar', 'instalaryaemori', 'yaemoriinstalar']
export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
