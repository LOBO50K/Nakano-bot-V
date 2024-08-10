let handler = async (m, { conn, command, usedPrefix }) => {
let cafirexostxt = `🚩 C A F I R E X O S 

🔵 \`\`\`Información del Host\`\`\`

💻 *Página*
https://www.cafirexos.com

✨ *Dashboard*
https://dashboard.cafirexos.com

🍁 *Aréa de clientes*
https://clientes.cafirexos.com

⚙️ *Panel*
https://panel.cafirexos.com

📢 *Canal de WhatsApp*
https://whatsapp.com/channel/0029VaFVSkRCMY0KFmCMDX2q

💥 *Grupo de WhatsApp*
https://chat.whatsapp.com/FBtyc8Q5w2iJXVl5zGJdFJ

📧 *Correo*
contacto@cafirexos.com

🧑‍💻 *Contacto (Diego Flores)*
https://wa.me/50497150165`

let txt = `🚩 *O L Y M P U S - H O S T* 

*¿Quieres un Host de calidad y con bajos precios?*
Pues te presento a *OlympusHost*, un hosting de calidad con servidores dedicados y precios por debajo de 1USD, estos servidores están destinados a ofrecerte un Uptime 24/7 para que puedas alojar tus proyectos y qué estos funcionen de manera eficaz.

🟢 \`\`\`Información del Host\`\`\`

🔮 *Dashboard:* 
• https://kingsvhost.asifofc.xyz

🧃 *Panel:*
• https://host.asifofc.xyz

💥 *Canal:*
• https://whatsapp.com/channel/0029ValCkNT2ER6gHWFRQ71J

⚜️ *Contacto (Mateo)*
https://wa.me/593979133620

> *Únete a está comunidad y disfruta de un servicio de calidad :D*` 

if (command == 'cafirexos') {
await conn.sendFile(m.chat, 'https://grxcwmcwbxwj.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grxcwmcwbxwj/b/cafirexos/o/logos%2Flogo.png', 'fantasy.jpg', cafirexostxt.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🔵 C A F I R E X O S 🔵`,
body: `✅ Hosting de Calidad`,
mediaType: 1,
sourceUrl: 'https://www.cafirexos.com',
thumbnailUrl: 'https://grxcwmcwbxwj.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grxcwmcwbxwj/b/cafirexos/o/logos%2Flogo_2.png'
}}
}, { mentions: m.sender })
}

if (command == 'olympus' || command == 'olympushost') {
 await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `🔵 *O L Y M P U S - H O S T* 🔵`,
body: `✅ Hosting de Calidad`,
"previewType": "PHOTO",
thumbnailUrl: 'https://qu.ax/waCu.jpg', 
sourceUrl: 'https://host.asifofc.xyz'}}},
{ quoted: fkontak})
}}

handler.help = ['cafirexos', 'olympus']
handler.tags = ['main']
handler.command = ['cafirexos', 'olympus', 'olympushost']
export default handler