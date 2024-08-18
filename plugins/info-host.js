let handler = async (m, { conn, command, usedPrefix }) => {
let txt = `🔰 *CORIN PLUS - HOST* 🔰

  • *Servers de calidad*
  • *Precios Accesibles (económicos)*
  • *Soporte Eficiente* 24/7
  • *Seguridad En Tus Proyectos*
  • *Disponible Javascript y WhatsAppBots*

  🍭 *Dashboard:* 🍭
  
  • https://dash.corinplus.com

  ⭐️ *Panel:* ⭐️
  
  • https://panel.corinplus.com

  🚩 *Contacto:* 
  • https://wa.me/message/B3KTM5XN2JMRD1`
await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `🔵 C O R I N - P L U S 🔵`,
body: `⚜️ Super Hosting 24/7 ⚜️`,
"previewType": "PHOTO",
thumbnailUrl: 'https://qu.ax/ZycD.png', 
sourceUrl: 'https://dash.corinplus.com'}}},
{ quoted: fkontak})
}
handler.tags = ['main'] 
handler.help = ['host', 'hosting'] 
handler.command = ['host', 'corin', 'corinplus', 'hosting']
export default handler