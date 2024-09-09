/*

- Agradecimiento a la comunidad de "WSApp 鈥� Developers"
 * https://chat.whatsapp.com/FaQunmlp9BmDRk6lEEc9FJ
- Agradecimiento especial a Carlos (PT) por los codigos de interactiveMessage (botones)
- Agradecimiento a Darlyn1234 por la estructura de uso en este codigo y quoted
 * https://github.com/darlyn1234
- Adaptacion de imagen en tipo lista, codigo y funcionamiento por BrunoSobrino
 * https://github.com/BrunoSobrino

*/
import fetch from 'node-fetch';
import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys';

let data;
let buff;
let mimeType;
let fileName;
let apiUrl;
let apiUrl2;
let apiUrlsz;
let device;
let dataMessage;
let enviando = false;
const handler = async (m, { command, usedPrefix, conn, text }) => {
  const datas = global;
  device = await getDevice(m.key.id);

  if (!text) throw `*[ 鈩癸笍 ] 饾悋饾悮饾悳饾悶 饾悷饾悮饾惀饾惌饾悮 饾悶饾惀 饾惌饾悽虂饾惌饾惍饾惀饾惃 饾悵饾悶饾惀 饾惎饾悽饾悵饾悶饾惃 饾悵饾悶 饾悩饾惃饾惍饾悡饾惍饾悰饾悶.*\n\n*[ 馃挕 ] Ejemplo:* _${usedPrefix + command} Good Feeling - Flo Rida_\n\n[ 馃挕 ] Ejemplo 2:* _${usedPrefix + command} https://youtu.be/JLWRZ8eWyZo?si=EmeS9fJvS_OkDk7p_`;
  if (command === 'playyt' && (device == 'desktop' || device == 'web')) throw `*[鉂梋 Los mensajes de botones aun no estan disponibles en WhatsApp web, acceda a su celular para poder ver y usar los mensajes con botones.*`;
  if (enviando) return;
  enviando = true;

  try {
    apiUrlsz = [
      `https://api.cafirexos.com/api/ytplay?text=${text}`,
      `https://api-brunosobrino.onrender.com/api/ytplay?text=${text}&apikey=BrunoSobrino`,
      `https://api-brunosobrino-dcaf9040.koyeb.app/api/ytplay?text=${text}`
    ];
    const linkyt = await isValidYouTubeLink(text);
    if (linkyt) apiUrlsz = [
        `https://api.cafirexos.com/api/ytinfo?url=${text}`,
        `https://api-brunosobrino-koiy.onrender.com/api/ytinfo?url=${text}&apikey=BrunoSobrino`,
        `https://api-brunosobrino-dcaf9040.koyeb.app/api/ytinfo?url=${text}`
    ];
    let success = false;
    for (const url of apiUrlsz) {
      try {
        const res = await fetch(url);
        data = await res.json();
        if (data.resultado && data.resultado.url) {
          success = true;
          break;
        }
      } catch {}
    }

    if (!success) {
      enviando = false;
      throw `*[ 鈩癸笍 ] O潭c潭u潭r潭r潭i潭o虂 潭u潭n 潭e潭r潭r潭o潭r. 饾悘饾惃饾惈 饾悷饾悮饾惎饾惃饾惈, 饾悽饾惂饾惌饾悶虂饾惂饾惌饾悮饾惀饾惃 饾悵饾悶 饾惂饾惍饾悶饾惎饾惃 饾惁饾悮虂饾惉 饾惌饾悮饾惈饾悵饾悶.*`;
    }

    const dataMessage = `_*< DESCARGAS - PLAY V2 />*_\n\n鈻� *潭T潭i虂潭t潭u潭l潭o:* ${data.resultado.title}\n鈻� *饾悘饾惍饾悰饾惀饾悽饾悳饾悮饾悵饾惃:* ${data.resultado.publicDate}\n鈻� *饾悅饾悮饾惂饾悮饾惀:* ${data.resultado.channel}\n鈻� *饾悤饾悽虂饾悵饾悶饾惃 饾悢饾悜饾悑:* ${data.resultado.url}`.trim();  
    if (!text.includes('SN@') && command !== 'playyt') await conn.sendMessage(m.chat, { text: dataMessage }, { quoted: m });      
      
    if (command === 'playyt') {
      var messa = await prepareWAMessageMedia({ image: {url: data.resultado.image}}, { upload: conn.waUploadToServer });
      let msg = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
              message: {
                  interactiveMessage: {
                      body: { text: dataMessage },
                      footer: { text: `${global.wm}`.trim() },
                      header: {
                          hasMediaAttachment: true,
                          imageMessage: messa.imageMessage,
                      },
                      nativeFlowMessage: {
                          buttons: [
                              {
                                  name: 'quick_reply',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'AUDIO',
                                      id: `${usedPrefix}play.1 ${data.resultado.url} SN@`
                                  })
                              },
                              {
                                  name: 'quick_reply',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'VIDEO',
                                      id: `${usedPrefix}play.2 ${data.resultado.url} SN@`
                                  })
                              },   
                          ],
                          messageParamsJson: "",
                      },
                  },
              },
          }
      }, { userJid: conn.user.jid, quoted: m});
      await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id});
      enviando = false;    
      return;
    }    

    try {
      if (command === 'play.1') {
        let apiUrls2 = [
          `https://api.cafirexos.com/api/v1/ytmp3?url=${data.resultado.url}`,
          `https://api.cafirexos.com/api/v2/ytmp3?url=${data.resultado.url}`,
          `https://api-brunosobrino.onrender.com/api/v1/ytmp3?url=${data.resultado.url}&apikey=BrunoSobrino`,
          `https://api-brunosobrino.onrender.com/api/v2/ytmp3?url=${data.resultado.url}&apikey=BrunoSobrino`,
          `https://api-brunosobrino-dcaf9040.koyeb.app/api/v1/ytmp3?url=${data.resultado.url}`,
          `https://api-brunosobrino-dcaf9040.koyeb.app/api/v2/ytmp3?url=${data.resultado.url}`,
        ];

        let success2 = false;
        for (const urll of apiUrls2) {
          try {
            apiUrl2 = urll;
            mimeType = 'audio/mpeg';
            fileName = 'error.mp3';
            buff = await conn.getFile(apiUrl2);
            success2 = true;
            break;
          } catch {}
        }

        if (!success2) {
          enviando = false;
          throw `[ 鈩癸笍 ] O潭c潭u潭r潭r潭i潭o虂 潭u潭n 潭e潭r潭r潭o潭r. 饾悘饾惃饾惈 饾悷饾悮饾惎饾惃饾惈, 饾悽饾惂饾惌饾悶虂饾惂饾惌饾悮饾惀饾惃 饾悵饾悶 饾惂饾惍饾悶饾惎饾惃 饾惁饾悮虂饾惉 饾惌饾悮饾惈饾悵饾悶.*`;
        }
      } else if (command === 'play.2') {
        let apiUrls22 = [
          `https://api.cafirexos.com/api/v1/ytmp4?url=${data.resultado.url}`,
          `https://api.cafirexos.com/api/v2/ytmp4?url=${data.resultado.url}`,            
          `https://api-brunosobrino.onrender.com/api/v1/ytmp4?url=${data.resultado.url}&apikey=BrunoSobrino`,
          `https://api-brunosobrino.onrender.com/api/v2/ytmp4?url=${data.resultado.url}&apikey=BrunoSobrino`,
          `https://api-brunosobrino-dcaf9040.koyeb.app/api/v1/ytmp4?url=${data.resultado.url}`,
          `https://api-brunosobrino-dcaf9040.koyeb.app/api/v2/ytmp4?url=${data.resultado.url}`,
        ];

        let success2 = false;
        for (const urlll of apiUrls22) {
          try {
            apiUrl2 = urlll;
            mimeType = 'video/mp4';
            fileName = 'error.mp4';
            buff = await conn.getFile(apiUrl2);
            success2 = true;
            break;
          } catch (e) {
             console.log(e.message) 
          }
        }

        if (!success2) {
          enviando = false;
          throw `[ 鈩癸笍 ] O潭c潭u潭r潭r潭i潭o虂 潭u潭n 潭e潭r潭r潭o潭r. 饾悘饾惃饾惈 饾悷饾悮饾惎饾惃饾惈, 饾悽饾惂饾惌饾悶虂饾惂饾惌饾悮饾惀饾惃 饾悵饾悶 饾惂饾惍饾悶饾惎饾惃 饾惁饾悮虂饾惉 饾惌饾悮饾惈饾悵饾悶.*`;
        }
      }
    } catch (ee) {
      console.log(ee.message)  
      enviando = false;
      throw `[ 鈩癸笍 ] O潭c潭u潭r潭r潭i潭o虂 潭u潭n 潭e潭r潭r潭o潭r. 饾悘饾惃饾惈 饾悷饾悮饾惎饾惃饾惈, 饾悽饾惂饾惌饾悶虂饾惂饾惌饾悮饾惀饾惃 饾悵饾悶 饾惂饾惍饾悶饾惎饾惃 饾惁饾悮虂饾惉 饾惌饾悮饾惈饾悵饾悶.*`;
    }

    if (buff) {
      await conn.sendMessage(m.chat, {[mimeType.startsWith('audio') ? 'audio' : 'video']: buff.data, mimetype: mimeType, fileName: fileName}, {quoted: m});
      enviando = false;
    } else {
      enviando = false;
      throw `[ 鈩癸笍 ] O潭c潭u潭r潭r潭i潭o虂 潭u潭n 潭e潭r潭r潭o潭r. 饾悘饾惃饾惈 饾悷饾悮饾惎饾惃饾惈, 饾悽饾惂饾惌饾悶虂饾惂饾惌饾悮饾惀饾惃 饾悵饾悶 饾惂饾惍饾悶饾惎饾惃 饾惁饾悮虂饾惉 饾惌饾悮饾惈饾悵饾悶.*`;
    }
  } catch (error) {
    console.log(error);  
    enviando = false;
    throw '[ 鈩癸笍 ] O潭c潭u潭r潭r潭i潭o虂 潭u潭n 潭e潭r潭r潭o潭r. 饾悘饾惃饾惈 饾悷饾悮饾惎饾惃饾惈, 饾悽饾惂饾惌饾悶虂饾惂饾惌饾悮饾惀饾惃 饾悵饾悶 饾惂饾惍饾悶饾惎饾惃 饾惁饾悮虂饾惉 饾惌饾悮饾惈饾悵饾悶.*';
  }
};

handler.command = ['play.1','play.2','playyt']
handler.register = true;
handler.group = true;
export default handler;

async function isValidYouTubeLink(link) {
    const validPatterns = [/youtube\.com\/watch\?v=/i, /youtube\.com\/shorts\//i, /youtu\.be\//i, /youtube\.com\/embed\//i, /youtube\.com\/v\//i, /youtube\.com\/attribution_link\?a=/i, /yt\.be\//i, /googlevideo\.com\//i, /youtube\.com\.br\//i, /youtube-nocookie\.com\//i, /youtubeeducation\.com\//i, /m\.youtube\.com\//i, /youtubei\.googleapis\.com\//i];
    return validPatterns.some(pattern => pattern.test(link));
}
