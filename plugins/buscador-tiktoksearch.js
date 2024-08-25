import axios from 'axios';
const { proto, generateWAMessageFromContent, generateWAMessageContent } = (await import("@whiskeysockets/baileys")).default;

let handler = async (message, { conn, text }) => {
if (!text) return conn.reply(message.chat, '🍟 *¿Que quieres buscar en tiktok?*', message, rcanal)
try {
await m.react(rwait)
let response = await tiktokSearch(text);
if (!response.status) throw new Error(response.resultado);
let searchResults = response.resultado;
shuffleArray(searchResults);
let selectedResults = searchResults.slice(0, 7);
let videoMessages = await Promise.all(selectedResults.map(result => createVideoMessage(result.videoUrl, conn)));
let results = videoMessages.map((videoMessage, index) => ({
body: proto.Message.InteractiveMessage.Body.fromObject({ text: '' }),
footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: `${global.dev}` }),
header: proto.Message.InteractiveMessage.Header.fromObject({
title: selectedResults[index].description, hasMediaAttachment: true, videoMessage: videoMessage
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({ buttons: [] })}));
const responseMessage = generateWAMessageFromContent(message.chat, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
                        deviceListMetadataVersion: 2
},
interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.create({ text: `🔎 *Tiktok - Busquedas*\n\n🚩 *Texto buscado:* ${text}\n\n📈 *Resultados obtenidos:*` }),
footer: proto.Message.InteractiveMessage.Footer.create({ text: '' }),
header: proto.Message.InteractiveMessage.Header.create({ hasMediaAttachment: false }),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards: results })
})}}}, { quoted: message });
await conn.relayMessage(message.chat, responseMessage.message, { messageId: responseMessage.key.id });
catch {
await m.react(error)
await conn.sendMessage(message.chat, { text: error.toString() }, { quoted: message });
};
};
handler.help = ['tiktoksearch <txt>'];
handler.estrellas = 1;
handler.register = true;
handler.tags = ['buscador'];
handler.command = ['tiktoksearch', 'tiktoks'];
export default handler;