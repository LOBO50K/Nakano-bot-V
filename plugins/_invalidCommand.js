export async function before(z) {
  if (!z.text || !global.prefix.test(z.text)) {
    return;
  }
  const a = global.prefix.exec(z.text)[0];
  const b = z.text.slice(a.length).trim().split(' ')[0].toLowerCase();
  const c = (d, e) => {
    for (let f of Object.values(e)) {
      if (f.command && (Array.isArray(f.command) ? f.command : [f.command]).includes(d)) {
        return true;
      }
    }
    return false;
  };
  if (c(b, global.plugins)) {
    let g = global.db.data.chats[z.chat];
    let h = global.db.data.users[z.sender];
    if (g.isBanned) {
      return;
    }
    if (!h.commands) {
      h.commands = 0;
    }
    h.commands += 1;
    await conn.sendPresenceUpdate('composing', z.chat);
  } else {
    const comando = z.text.trim().split(' ')[0];
    await z.reply(`🚩 El comando *${comando}* no es válido.\nUsa */menu* para ver los comandos disponibles.`);
    await z.react(error);
  }
}