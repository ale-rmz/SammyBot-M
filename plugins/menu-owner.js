import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const url = global.md
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `╭━━━━━━━━━━━━━━━━━━━━━╮
│╭─────────────────
││⛈️𝑯𝒐𝒍𝒂: @${m.sender.split`@`[0]}
││⛈️𝑶𝒘𝒏𝒆𝒓 𝒅𝒆𝒍 𝑩𝒐𝒕:
││⛈️ wa.me/59168683798
││⛈️𝑩𝒐𝒕 𝒐𝒇𝒇: 
││⛈️ wa.me/59895294138
││⛈️𝑽𝒆𝒓𝒔𝒊𝒐𝒏: 𝟹.𝟸.𝟶
││⛈️𝑭𝒆𝒄𝒉𝒂: ${date}
│╰─────────────────
╰━━━━━━━━━━━━━━━━━━━━━╯

╭━━━━━━━━━━━━━━━━━━━━━╮
│╭─────────────────
││「 𝐶𝑟𝑒𝑎𝑑𝑜𝑟𝑒𝑠 - 𝑆𝑡𝑎𝑓𝑓 」
│├━━━━━━━━━━━━━━━━╯
││🪐𝚏𝚞𝚗𝚌𝚒𝚘𝚗
││🪐𝐬𝐞𝐭𝐩𝐫𝐞𝐟𝐢𝐱 𝚙𝚛𝚎𝚏𝚒𝚓𝚘
││🪐𝐚𝐥𝐭𝐞𝐫𝐚𝐫 𝚗𝚞𝚖𝚎𝚛𝚘
││🪐𝐫𝐞𝐬𝐞𝐭𝐩𝐫𝐞𝐟𝐱
││🪐𝘁𝗲𝗻𝗲𝗿𝗽𝗼𝗱𝗲𝗿
││🪐𝐜𝐡𝐞𝐭𝐚𝐫
││🪐𝐬𝐚𝐥𝐢𝐫(𝐨𝐮𝐭 𝐛𝐨𝐭)
││🪐𝐜𝐚𝐣𝐚𝐟𝐮𝐞𝐫𝐭𝐞
││🪐𝐛𝐥𝐨𝐜𝐤𝐥𝐢𝐬𝐭
││🪐𝐛𝐥𝐨𝐜𝐤 @𝚝𝚊𝚐 / 𝚗𝚞𝚖𝚎𝚛𝚘
││🪐𝐮𝐧𝐛𝐥𝐨𝐜𝐤 @𝚝𝚊𝚐 / 𝚗𝚞𝚖𝚎𝚛𝚘
│╰─────────────────
╰━━━━━━━━━━━━━━━━━━━━━╯ 


╭━━━━━━━━━━━━━━━━━━━━━╮
│╭─────────────────
││「 𝐹𝑢𝑛𝑐𝑖𝑜𝑛𝑒𝑠 𝑆𝑡𝑎𝑓𝑓 - 𝑂𝑤𝑛𝑒𝑟𝑠 」
│├━━━━━━━━━━━━━━━━╯
││🟢𝗧𝗿𝘂𝗲 𝐰𝐞𝐥𝐜𝐨𝐦𝐞
││🔴𝗙𝗮𝗹𝘀𝗲 𝐰𝐞𝐥𝐜𝐨𝐦𝐞
││🟢𝗧𝗿𝘂𝗲 𝐦𝐨𝐝𝐨𝐡𝐨𝐫𝐧𝐲
││🔴𝗙𝗮𝗹𝘀𝗲 𝐦𝐨𝐝𝐨𝐡𝐨𝐫𝐧𝐲
││🟢𝗧𝗿𝘂𝗲 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤
││🔴𝗙𝗮𝗹𝘀𝗲 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤
││🟢𝗧𝗿𝘂𝗲 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤𝟐
││🔴𝗙𝗮𝗹𝘀𝗲 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤𝟐
││🟢𝗧𝗿𝘂𝗲 𝐝𝐞𝐭𝐞𝐜𝐭
││🔴𝗙𝗮𝗹𝘀𝗲 𝐝𝐞𝐭𝐞𝐜𝐭
││🟢𝗧𝗿𝘂𝗲 𝐚𝐮𝐝𝐢𝐨𝐚
││🔴𝗙𝗮𝗹𝘀𝗲 𝐚𝐮𝐝𝐢𝐨𝐬
││🟢𝗧𝗿𝘂𝗲 𝐚𝐮𝐭𝐨𝐬𝐭𝐢𝐜𝐤𝐞𝐫
││🔴𝗙𝗮𝗹𝘀𝗲 𝐚𝐮𝐭𝐨𝐬𝐭𝐢𝐜𝐤𝐞𝐫
││🟢𝗧𝗿𝘂𝗲 𝐚𝐧𝐭𝐢𝐯𝐢𝐞𝐰𝐨𝐧𝐜𝐞
││🔴𝗙𝗮𝗹𝘀𝗲 𝐚𝐧𝐭𝐢𝐯𝐢𝐞𝐰𝐨𝐧𝐜𝐞
││🟢𝗧𝗿𝘂𝗲 𝐚𝐧𝐭𝐢𝐭𝐨𝐱𝐢𝐜
││🔴𝗙𝗮𝗹𝘀𝗲 𝐚𝐧𝐭𝐢𝐭𝐨𝐱𝐢𝐜
││🟢𝗧𝗿𝘂𝗲 𝐚𝐧𝐭𝐢𝐭𝐫𝐚𝐛𝐚
││🔴𝗙𝗮𝗹𝘀𝗲 𝐚𝐧𝐭𝐢𝐭𝐫𝐚𝐛𝐚
││🟢𝗧𝗿𝘂𝗲 𝐚𝐧𝐭𝐢𝐚𝐫𝐚𝐛𝐞𝐬
││🔴𝗙𝗮𝗹𝘀𝗲 𝐚𝐧𝐭𝐢𝐚𝐫𝐚𝐛𝐞𝐬
││🟢𝗧𝗿𝘂𝗲 𝐦𝐨𝐝𝐨𝐚𝐝𝐦𝐢𝐧
││🔴𝗙𝗮𝗹𝘀𝗲 𝐦𝐨𝐝𝐨𝐚𝐝𝐦𝐢𝐧
││🟢𝗧𝗿𝘂𝗲 𝐚𝐧𝐭𝐢𝐝𝐞𝐥𝐞𝐭𝐞
││🔴𝗙𝗮𝗹𝘀𝗲 𝐚𝐧𝐭𝐢𝐝𝐞𝐥𝐞𝐭𝐞
│╰─────────────────
╰━━━━━━━━━━━━━━━━━━━━━╯


╭━━━━━━━━━━━━━━━━━━━━━╮
│╭─────────────────
││「 𝑂𝑤𝑛𝑒𝑟 - 𝑆𝑡𝑎𝑓𝑓 - 𝐺𝑟𝑢𝑝𝑜𝑠 」
│├━━━━━━━━━━━━━━━━╯
││📕 𝐦𝐬𝐠 𝚝𝚎𝚡𝚝𝚘
││📕 𝐫𝐞𝐮𝐧𝐢𝐨𝐧(𝐥𝐥𝐚𝐦𝐚𝐝𝐚 𝐨𝐰𝐧𝐞𝐫𝐬)
││📕 𝗽𝗿𝗼𝗵𝗶𝗯𝗶𝗿𝗰𝗵𝗮𝘁
││📕 𝗱𝗲𝘀𝗽𝗿𝗼𝗵𝗶𝗯𝗶𝗿𝗰𝗵𝗮𝘁
││📕 𝗱𝗮𝘁𝗮0 @𝚝𝚊𝚐
││📕 𝗽𝗿𝗼𝗵𝗶𝗯𝗶𝗿𝘂𝘀𝗲𝗿 @𝚝𝚊𝚐
││📕 𝗱𝗲𝘀𝗽𝗿𝗼𝗵𝗶𝗯𝗶𝗿𝘂𝘀𝗲𝗿 @𝚝𝚊𝚐
││📕 𝐝𝐚𝐫𝐝𝐢𝐚𝐦𝐚𝐧𝐭𝐞𝐬 @𝚝𝚊𝚐 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍
││📕 𝐚𝐧̃𝐚𝐝𝐢𝐫𝐱𝐩 @𝚝𝚊𝚐 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍
││📕 𝐛𝐜 𝚝𝚎𝚡𝚝𝚘
││📕 𝐛𝐜𝐜𝐡𝐚𝐭𝐬 𝚝𝚎𝚡𝚝𝚘
││📕 𝐛𝐜𝐠𝐜 𝚝𝚎𝚡𝚝𝚘
││📕 𝐛𝐜𝐠𝐜𝟐 𝚊𝚞𝚍𝚒𝚘
││📕 𝐛𝐜𝐠𝐜𝟐 𝚟𝚒𝚍𝚎𝚘
││📕 𝐛𝐜𝐠𝐜𝟐 𝚒𝚖𝚊𝚐𝚎𝚗
││📕 𝐛𝐜𝐛𝐨𝐭 𝚝𝚎𝚡𝚝𝚘
││📕 𝐜𝐥𝐞𝐚𝐫𝐭𝐩𝐩
││📕 𝐝𝐞𝐥𝐥𝐨𝐛𝐨/𝐥𝐨𝐛𝐨𝐝𝐞𝐥
││📕 𝐫𝐞𝐬𝐭𝐚𝐫𝐭
││📕 𝐮𝐩𝐝𝐚𝐭𝐞
││📕 𝐛𝐚𝐧𝐥𝐢𝐬𝐭
││📕 𝐚𝐝𝐝𝐩𝐫𝐞𝐦 @𝚝𝚊𝚐𝚝𝚒𝚎𝚖𝚙𝚘
││📕 𝐚𝐝𝐝𝐩𝐫𝐞𝐦𝟐 @𝚝𝚊𝚐 𝚝𝚒𝚎𝚖𝚙𝚘
││📕 𝐚𝐝𝐝𝐩𝐫𝐞𝐦𝟑 @𝚝𝚊𝚐 𝚝𝚒𝚎𝚖𝚙𝚘
││📕 𝐚𝐝𝐝𝐩𝐫𝐞𝐦𝟒 @𝚝𝚊𝚐 𝚝𝚒𝚎𝚖𝚙𝚘
││📕 𝐝𝐞𝐥𝐩𝐫𝐞𝐦 @𝚝𝚊𝚐
││📕 𝐥𝐢𝐬𝐭𝐜𝐦𝐝
││📕 𝐬𝐞𝐭𝐩𝐩𝐛𝐨𝐭 𝚛𝚎𝚜𝚙𝚘𝚗𝚍𝚎𝚛 𝚊 𝚒𝚖𝚊𝚐𝚎𝚗
││📕 𝐚𝐝𝐝𝐜𝐦𝐝 𝚝𝚎𝚡𝚝𝚘 𝚛𝚎𝚜𝚙𝚘𝚗𝚍𝚎𝚛 𝚊 𝚜/𝚒𝚖𝚊𝚐𝚎𝚗
││📕 𝐝𝐞𝐥𝐜𝐦𝐝 𝚛𝚎𝚜𝚙𝚘𝚗𝚍𝚎𝚛 𝚊 𝚜/𝚒𝚖𝚐 𝚌𝚘𝚗 𝚌𝚘𝚖𝚊𝚗𝚍𝚘
││📕 𝐬𝐚𝐯𝐞𝐢𝐦𝐚𝐠𝐞
││📕 𝐯𝐢𝐞𝐰𝐢𝐦𝐚𝐠𝐞
│╰─────────────────
╰━━━━━━━━━━━━━━━━━━━━━╯`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '⚠️ 𝐸𝑟𝑟𝑜𝑟 𝐴𝑙 𝐸𝑛𝑣𝑖𝑎𝑟 𝐸𝑙 𝑀𝑒𝑛𝑢 𝑃𝑜𝑟 𝐹𝑎𝑣𝑜𝑟 𝐼𝑛𝑡𝑒𝑛𝑡𝑒 𝑀𝑎𝑠 𝑇𝑎𝑟𝑑𝑒. 𝑆𝑖 𝑆𝑖𝑔𝑢𝑒 𝐴𝑠𝑖 𝐶𝑜𝑛𝑡𝑎𝑐𝑡𝑎 𝐴𝑙 𝑆𝑡𝑎𝑓𝑓', m);
  }
};
handler.command = /^(wtodo|ownermenu|wstaff)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
