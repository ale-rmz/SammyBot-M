import moment from 'moment-timezone';
import fetch from 'node-fetch';
const handler = async (m, { conn, args }) => {
   const res = await fetch('https://github.com/Karim-off/DylanBot1');
   const json = await res.json();
   let txt = ` 🧸 𝑫𝒀𝑳𝑨𝑵 𝑩𝑶𝑻 🧸
  
𝘽𝙤𝙩 𝙙𝙚 𝙪𝙨𝙤 𝙚𝙭𝙘𝙡𝙪𝙨𝙞𝙫𝙤 𝙣𝙤 𝙙𝙞𝙨𝙥𝙤𝙣𝙞𝙗𝙡𝙚 
𝙥𝙖𝙧𝙖 𝙪𝙨𝙤 𝙥𝙪𝙗𝙡𝙞𝙘𝙤 𝙢𝙚𝙣𝙨𝙖𝙟𝙚 📩 𝙙𝙚𝙡 𝙘𝙧𝙚𝙖𝙙𝙤𝙧
    
    🧸 𝐓𝐢𝐞𝐧𝐞𝐬 𝐝𝐮𝐝𝐚𝐬 ? 𝐜𝐨𝐧𝐭𝐚𝐜𝐭𝐚 𝐚𝐥 𝐜𝐫𝐞𝐚𝐝𝐨𝐫 𝐮𝐬𝐚 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 #𝙾𝚆𝙽𝙴𝚁︎ 🧸  `;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen6, "mediaUrl": global.md, "sourceUrl": global.md}}}, {quoted: m});
};
handler.help = ['scbot'];
handler.tags = ['info'];
handler.command = /^(instalarbot|descargarbot)$/i;
export default handler;
