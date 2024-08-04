/**
 * Función para validar comandos
 * @param {string} comando - El comando a validar
 * @returns {boolean} - True si el comando es válido, false en caso contrario
 */
function validarComando(comando) {
  // Lista de comandos válidos
  const comandosValidos = ['crear', 'eliminar', 'editar', 'mostrar'];

  // Verificar si el comando está en la lista de comandos válidos
  return comandosValidos.includes(comando.toLowerCase());
}

// Ejemplo de uso
const comando = 'crear';
if (validarComando(comando)) {
  m.reply(`😊 El comando "${comando}" no es válido.\nUsa *!menu* para ver los comandos disponibles.`);
} else {
  m.reply(`😊 El comando "${comando}" no es válido.\nUsa *!menu* para ver los comandos disponibles.`);
}

/*import didyoumean from 'didyoumean'
import similarity from 'similarity'

export async function before(m, { conn, match, usedPrefix, command }) {
	
if ((usedPrefix = (match[0] || '')[0])) {
let noPrefix = m.text.replace(usedPrefix, '')
let args = noPrefix.trim().split` `.slice(1)
let text = args.join` `
let help = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
if (help.includes(noPrefix)) return
let mean = didyoumean(noPrefix, help)
let sim = similarity(noPrefix, mean)
let som = sim * 100
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let caption = `😊 El comando no es válido.
> Usa *!menu* para ver los comandos disponibles.`
if (mean) conn.reply(m.chat, caption, m, { mentions: [who]})
}

}*/