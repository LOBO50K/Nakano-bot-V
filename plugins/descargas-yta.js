import fetch from 'node-fetch';

const getYoutubeId = (url) => {
  const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
  const matches = url.match(regex);
  return matches ? matches[1] : null;
};

let handler = async (m, { text, conn, args, usedPrefix, command }) => {
  if (!args[0]) return await conn.reply(m.chat, '_*[ ⚠️ ] Agrega un enlace de YouTube*_\n\n> Ejemplo:\n_.ytmp4 https://www.youtube.com_', m);

  let youtubeLink = '';

  if (args[0].includes('you')) {
    youtubeLink = args[0];
  } else {
    return await conn.reply(m.chat, '_*[ ⚠️ ] El enlace no es de YouTube*_', m);
  }

  
  const isShort = youtubeLink.includes('youtube.com/shorts/');
  const videoId = getYoutubeId(youtubeLink);

  
  const shortYoutubeUrl = isShort ? youtubeLink : `https://youtu.be/${videoId}`;

  conn.reply(m.chat, '_*[ ⏳ ] Descargando el audio...*_', m);

  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      let deliriusResponse = await fetch(`https://deliriusapi-official.vercel.app/download/ytmp3?url=${shortYoutubeUrl}`);
      let deliriusData = await deliriusResponse.json().catch(() => {
        console.log('La respuesta no es un JSON válido');
      });

      if (!deliriusData.status) throw new Error('Ocurrió un error en la API');

      let downloadUrl = deliriusData.data.download.url;
      let title = deliriusData.data.title || 'video';
      let image = deliriusData.data.image;

      await conn.sendMessage(m.chat, { audio: { url: downloadUrl }, fileName: `${title}.mp3`, mimetype: 'audio/mp4', caption: `╭━❰  *YOUTUBE*  ❱━⬣\n${title}\n╰━❰ *${wm}* ❱━⬣` }, { quoted: m });
      
      break; // Salir del loop si la descarga fue exitosa
    } catch (err) {
      console.log(`Intento ${attempt} fallido: ${err.message}`);
      if (attempt === 2) {
        await conn.reply(m.chat, `_[ ❌ ] Error al descargar el audio, vuelve a intentarlo_`, m);
      }
    }
  }
};

handler.command = ['ytmp3', 'yta'];
export default handler;
