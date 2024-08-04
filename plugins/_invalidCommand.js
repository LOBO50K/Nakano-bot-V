export async function before(z) {
  if (!z.text || !global.prefix.test(z.text)) return;

  const prefix = global.prefix.exec(z.text)[0];
  const command = z.text.slice(prefix.length).trim().split(' ')[0].toLowerCase();

  const isValidCommand = (command, plugins) => {
    for (const plugin of Object.values(plugins)) {
      if (plugin.command && (Array.isArray(plugin.command) ? plugin.command : [plugin.command]).includes(command)) {
        return true;
      }
    }
    return false;
  };

  if (isValidCommand(command, global.plugins)) {
    const chatData = global.db.data.chats[z.chat];
    const userData = global.db.data.users[z.sender];

    if (chatData.isBanned) return;

    if (!userData.commands) userData.commands = 0;
    userData.commands += 0;

    await conn.sendPresenceUpdate('composing', z.chat);
  } else {
    const invalidCommand = z.text.trim().split(' ')[0];
    await z.reply(`🌟 El comando *${invalidCommand}* no es válido.\n> Usa *#menu* para ver los comandos disponibles.`);
    await z.react(error);
  }
}