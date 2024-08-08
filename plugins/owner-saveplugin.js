import fs from 'fs'
let handler = async (m, { text, usedPrefix, command }) => {

    if (!text) await conn.reply(m.chat, '*🚩 Ingrese el nombre del plugin*', m, rcanal)
    // if (!m.quoted.text) await conn.reply(m.chat, '*🚩 Responde al mensaje*', m, fake)
    let ruta = `plugins/${text}.js`
    await fs.writeFileSync(ruta, m.quoted.text)
    await conn.reply(m.chat, `🧃 *Guardado en ${ruta}*`, m, fake)
}
handler.help = ['saveplugin']
handler.tags = ['owner']
handler.command = ['saveplugin']
handler.owner = true

export default handler