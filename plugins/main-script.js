let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `*https://github.com/OfcDiego*`
let buttonMessage= {
'document': { url: `https://github.com/OfcDiego` },
'mimetype': `application/${document}`,
'fileName': packname,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': script,
'mediaType': 2,
'previewType': 'pdf',
'title': ``,
'body': author,
'thumbnail': imagen1,
'sourceUrl': `${yt}` }},
'caption': texto1,
'footer': '\nAmo mucho a mi bebé Saray⚘',
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'Menú 📒'}, type: 1}, 
{buttonId: `${usedPrefix}infobot`, buttonText: {displayText: 'Info 📌'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.tags =['main']
handler.help = ['script']
handler.command = ['sc', 'script']
handler.register = true
export default handler