// By: @DanixlJs

/*export async function before(m) {
  if (!m.text || !global.prefix.test(m.text)) {
    return;
  }

  const usedPrefix = global.prefix.exec(m.text)[0];
  const command = m.text.slice(usedPrefix.length).trim().split(' ')[0].toLowerCase();

  const validCommand = (command, plugins) => {
    for (let plugin of Object.values(plugins)) {
      if (plugin.command && (Array.isArray(plugin.command) ? plugin.command : [plugin.command]).includes(command)) {
        return true;
      }
    }
    return false;
  };

  if (validCommand(command, global.plugins)) {
    let chat = global.db.data.chats[m.chat];
    let user = global.db.data.users[m.sender];
    if (chat.isBanned) return;
    if (!user.commands) {
      user.commands = 0;
    }
    user.commands += 1;
    await conn.sendPresenceUpdate('composing', m.chat);
  } else {
   const comando = m.text.trim().split(' ')[0];
   await m.reply(`⚡︎ El comando "${comando}" no es válido.\nUsa "!menu" para ver los comandos disponibles.`);
  }
}*/

import db from '../lib/database.js';
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i;

let handler = async (m, { conn, text }) => {
  if (!text) {
    return m.reply('> _📝 Ingresa el link del grupo para rentar el bot._', m, rcanal);
  }

  let userRents = global.db.data.userRents[m.sender];
  if (!userRents || userRents.tokens <= 0) {
    return m.reply('❎ No tienes tokens disponibles para rentar el bot. Compra más tokens con /rentar.', m, rcanal);
  }

  let [_, code] = text.match(linkRegex) || [];
  if (!code) {
    return m.reply('🚩 Enlace inválido.', m, rcanal);
  }

  let groupMetadata;
  try {
    groupMetadata = await conn.groupAcceptInvite(code);
  } catch (e) {
    return m.reply('❌ No pude unirme al grupo. Verifica el enlace.', m, rcanal);
  }

  let groupId = groupMetadata.id || groupMetadata;

  if (!groupId.endsWith('@g.us')) {
    return m.reply('❌ No se pudo identificar el grupo.', m, rcanal);
  }

  global.db.data.groupRents = global.db.data.groupRents || {};

  global.db.data.groupRents[groupId] = {
    user: m.sender,
    tokenCount: userRents.tokens,
    startTime: Date.now(),
    duration: userRents.tokens * 24 * 60 * 60 * 1000
  };

  userRents.tokens = 0;
  userRents.groups.push(groupId);

  conn.reply(m.chat, `> _📝 Me uní correctamente al grupo_ *${groupId}* por ${global.db.data.groupRents[groupId].tokenCount} día(s).`);

  let chats = global.db.data.chats[groupId] || {};
  chats.expired = global.db.data.groupRents[groupId].startTime + global.db.data.groupRents[groupId].duration;
  global.db.data.chats[groupId] = chats;

  let pp = 'https://telegra.ph/file/32e696946433c03588726.mp4';
  await conn.sendMessage(groupId, { video: { url: pp }, gifPlayback: true, caption: '> ¡Ya llegué! El bot estará disponible por el tiempo acordado.', mentions: [m.sender] });
};

handler.tags = ['grupos']
handler.help = ['rentar2 *<link>*']
handler.command = ['rentar2']

export default handler
