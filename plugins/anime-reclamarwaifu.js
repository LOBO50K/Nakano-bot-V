var handler = async (m, { text,  usedPrefix, command }) => {

// Clase Waifu
class Waifu {
constructor(nombre, precio) {
this.nombre = nombre
this.precio = precio 
}}
// Clase Tienda
class Tienda {
constructor() {
this.waifus = []}
agregarWaifu(waifu) {
this.waifus.push(waifu)}
comprarWaifu(nombre, dinero) {
const waifu = this.waifus.find((w) => w.nombre === nombre);
if (waifu) {
if (dinero >= waifu.precio) {
conn.reply(m.chat, `😊 Waifu: ${waifu.nombre}\n🌟 Precio: ${waifu.precio} monedas.\n💥 Reclamada Por: ${nombre}`, m, rcanal);
return waifu;
} else {
conn.reply(m.chat, `😊 No tienes suficiente dinero para comprar a ${waifu.nombre}.`, m, rcanal)}
} else {
conn.reply(m.chat, `✨️ No se encuentra a ${nombre} en la tienda.`, m, fake)}}}
// Crear tienda y agregar waifus
const tienda = new Tienda()
tienda.agregarWaifu(new Waifu("Mikasa", 100))
tienda.agregarWaifu(new Waifu("Asuna", 200))
tienda.agregarWaifu(new Waifu("Rias", 300))
// Comprar waifu
const dinero = 250;
// const waifuComprada = tienda.comprarWaifu("", dinero)}

handler.command = ['c', 'reclamar']
handler.help = ['c']
handler.tags = ['anime']
handler.premium = false
export default handler