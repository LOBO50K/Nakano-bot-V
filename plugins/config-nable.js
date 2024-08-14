let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
  case 'welcome':
    case 'bv':
    case 'bienvenida':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break

  case 'antiPrivate':
    case 'antiprivado':
    case 'antipriv':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.antiPrivate = isEnable
      break

  case 'audios':
    case 'audiosbot':
    case 'botaudios':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.audios = isEnable
      break

  case 'jadibotmd':
    case 'serbot':
    case 'subbots':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.jadibotmd = isEnable
      break

  case 'detect':
    case 'configuraciones':
    case 'avisodegp':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.detect = isEnable
      break

    case 'document':
    case 'documento':
    isUser = true
    user.useDocument = isEnable
    break

    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break

      case 'nsfw':
      case 'modohorny':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
            throw false
           }}
    chat.nsfw = isEnable          
    break
    default:
      if (!/[01]/.test(command)) return conn.reply(m.chat, `
*🍟 Ingresa una opción para habilitar o deshabilitar*

*Tipo:* welcome 
*Descripción:* Envia un mensaje de bienvenida al usuario que es nuevo
*Ejemplo:* ${usedPrefix + command} welcome

*Tipo:* antiprivado
*Descripción:* No permite que el bot le escriban al privado
*Ejemplo:* ${usedPrefix + command} antiprivado

*Tipo:* detect 
*Descripción:* Informacion de cualquira configuración del grupo
*Ejemplo:* ${usedPrefix + command} detect

*Tipo:* nsfw 
*Descripción:* Permitir que los usuarios usen comandos +18
*Ejemplo:* ${usedPrefix + command} nsfw

*Tipo:* antilink 
*Descripción:* Elimina al usuario que envie un link de algun grupo
*Ejemplo:* ${usedPrefix + command} antilink

*Tipo:* document 
*Descripción:* Funcion Descarga En Documentos para el Usuario
*Ejemplo:* ${usedPrefix + command} document`, m, rcanal)
      throw false
  }
  conn.reply(m.chat, `🚩 La función *${type}* se *${isEnable ? 'activó' : 'desactivó'}* ${isAll ? 'para Yaemori' : isUser ? '' : 'para este chat'}`, m, rcanal)
}

handler.help = ['enable', 'disable']
handler.tags = ['nable', 'owner']
handler.command = ['enable', 'disable', 'on', 'off', '1', '0']

export default handler