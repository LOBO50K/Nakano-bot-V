export async function before(m) {
  if (!m.text || !global.prefix.test(m.text)) return;

  const prefix = global.prefix.exec(m.text)[0];
  const command = m.text.slice(prefix.length).trim().split(' ')[0].toLowerCase();

  const isValidCommand = (command, plugins) => {
    for (const plugin of Object.values(plugins)) {
      if (plugin.command && (Array.isArray(plugin.command) ? plugin.command : [plugin.command]).includes(command)) {
        return true;
      }
    }
    return false;
  };

  if (isValidCommand(command, global.plugins)) {
    const chatData = global.db.data.chats[m.chat];
    const userData = global.db.data.users[m.sender];

    if (chatData.isBanned) return;

    if (!userData.commands) userData.commands = 0;
    userData.commands += 0;

    await conn.sendPresenceUpdate('composing', m.chat);
  } else {
    const invalidCommand = m.text.trim().split(' ')[0];
    await m.reply(`🌟 El comando *${invalidCommand}* no es válido.\n> Usa *#menu* para ver los comandos disponibles.`);
    await m.react(error);
  }
}