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
    const str = `┏━━━• 💌 𝗦𝗮𝗺𝗺𝘆 𝗕𝗼𝘁 💌 •━━━┓
│┌──────────────────┐
││•🧸 ¡𝗛𝗲𝗹𝗹𝗼! @${m.sender.split`@`[0]}
│└──────────────────┘
││•🪐 *_PAIS:_* ${nombreLugar}
││•🪐 *_CREADOR/A_*  wa.me/+543585753625
││•🪐 *_VERSIÓN DEL BOT:_* *1.0.0*
││•🪐 *_FECHA:_* ${date}                                             
┗━━━━━━━━•◦ 🧸 •◦━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━━━┓
│•  𝗖𝗿𝗲𝗮𝗱𝗼𝗿 / 𝗢𝘄𝗻𝗲𝗿 🫶
┗━━━━━━━━━━━━━━━━━━━━┛
 │•𝙁𝙪𝙣𝙘𝙞𝙤́𝙣
 │•📒𝙎𝙚𝙩𝙥𝙧𝙚𝙛𝙞𝙭 𝘱𝘳𝘦𝘧𝘪𝘫𝘰
 │•📒𝘼𝙡𝙩𝙚𝙧𝙖𝙧 𝘯𝘶𝘮𝘦𝘳𝘰
 │•📒𝙍𝙚𝙨𝙚𝙩𝙥𝙧𝙚𝙛𝙞𝙭
 │•📒𝙏𝙚𝙣𝙚𝙧𝙥𝙤𝙙𝙚𝙧
 │•📒𝘾𝙝𝙚𝙩𝙖𝙧
 │•📒𝙎𝙖𝙡𝙞𝙧 (𝘖𝘶𝘵𝘉𝘰𝘵)
 │•📒𝘾𝙖𝙟𝙖𝙛𝙪𝙚𝙧𝙩𝙚
 │•📒𝘽𝙡𝙤𝙘𝙠𝙡𝙞𝙨𝙩 
 │•📒𝘽𝙡𝙤𝙘𝙠 @𝘛𝘢𝘨 / 𝘯𝘶́𝘮𝘦𝘳𝘰
 │•📒𝙐𝙣𝙗𝙡𝙤𝙘𝙠 @𝘛𝘢𝘨 / 𝘯𝘶́𝘮𝘦𝘳𝘰
 │•📒𝙈𝙨𝙜 𝘵𝘦𝘹𝘵𝘰
 │•📒𝙍𝙚𝙪𝙣𝙞𝙤́𝙣 (𝘭𝘭𝘢𝘮𝘢𝘥𝘢 𝘰𝘸𝘯𝘦𝘳𝘴)
 │•📒𝙋𝙧𝙤𝙝𝙞𝙗𝙞𝙧𝙘𝙝𝙖𝙩
 │•📒𝘿𝙚𝙨𝙥𝙧𝙤𝙝𝙞𝙗𝙞𝙧𝙘𝙝𝙖𝙩
 │•📒𝘿𝙖𝙩𝙖0 @𝘵𝘢𝘨
 │•📒𝙋𝙧𝙤𝙝𝙞𝙗𝙞𝙧𝙪𝙨𝙚𝙧 @𝘵𝘢𝘨
 │•📒𝘿𝙚𝙨𝙥𝙧𝙤𝙝𝙞𝙗𝙞𝙧𝙪𝙨𝙚𝙧 @𝘵𝘢𝘨
 │•📒𝘿𝙖𝙧𝙙𝙞𝙖𝙢𝙖𝙣𝙩𝙚𝙨 @𝘵𝘢𝘨 / 𝘤𝘢𝘯𝘵𝘪𝘥𝘢𝘥
 │•📒𝘼𝙣̃𝙖𝙙𝙞𝙧𝙭𝙥 @𝘵𝘢𝘨 / 𝘤𝘢𝘯𝘵𝘪𝘥𝘢𝘥
 │•📒𝘽𝙘 𝘵𝘦𝘹𝘵𝘰
 │•📒𝘽𝙘𝙘𝙝𝙖𝙩𝙨 𝘵𝘦𝘹𝘵𝘰
 │•📒𝘽𝙘𝙜𝙘 𝘵𝘦𝘹𝘵𝘰 
 │•📒𝘽𝙘𝙜𝙘2 𝘢𝘶𝘥𝘪𝘰
 │•📒𝘽𝙘𝙜𝙘2 𝘷𝘪𝘥𝘦𝘰
 │•📒𝘽𝙘𝙜𝙘2 𝘪𝘮𝘢𝘨𝘦𝘯
 │•📒𝘽𝙘𝙗𝙤𝙩 𝘵𝘦𝘹𝘵𝘰
 │•📒𝘾𝙡𝙚𝙖𝙧𝙩𝙥𝙥 
 │•📒𝘿𝙚𝙡𝙡𝙤𝙗𝙤/𝙡𝙤𝙗𝙤𝙙𝙚𝙡
 │•📒𝙍𝙚𝙨𝙩𝙖𝙧𝙩
 │•📒𝙐𝙥𝙙𝙖𝙩𝙚
 │•📒𝘽𝙖𝙣𝙡𝙞𝙨𝙩
 │•📒𝘼𝙙𝙙𝙥𝙧𝙚𝙢 @𝘵𝘢𝘨 / 𝘵𝘪𝘦𝘮𝘱𝘰
 │•📒𝘼𝙙𝙙𝙥𝙧𝙚𝙢2 @𝘵𝘢𝘨 / 𝘵𝘪𝘦𝘮𝘱𝘰
 │•📒𝘼𝙙𝙙𝙥𝙧𝙚𝙢3 @𝘵𝘢𝘨 / 𝘵𝘪𝘦𝘮𝘱𝘰
 │•📒𝘼𝙙𝙙𝙥𝙧𝙚𝙢4 @𝘵𝘢𝘨 / 𝘵𝘪𝘦𝘮𝘱𝘰 
 │•📒𝘿𝙚𝙡𝙥𝙧𝙚𝙢 @𝘵𝘢𝘨
 │•📒𝙇𝙞𝙨𝙩𝙘𝙢𝙙 
 │•📒𝙎𝙚𝙩𝙥𝙥𝙗𝙤𝙩 𝘙𝘦𝘴𝘱𝘰𝘯𝘥𝘦𝘳 𝘢 𝘪𝘮𝘢𝘨𝘦𝘯
 │•📒𝘼𝙙𝙙𝙘𝙢𝙙 𝘛𝘦𝘹𝘵𝘰 𝘳𝘴𝘱𝘯𝘥𝘳 𝘢 𝘴/𝘪𝘮𝘢𝘨𝘦𝘯
 │•📒𝘿𝙚𝙡𝙘𝙢𝙙 𝘙𝘴𝘱𝘯𝘥𝘳 𝘢 𝘴/𝘪𝘮𝘨 𝘤𝘰𝘯 𝘤𝘰𝘯 𝘤𝘰𝘮𝘢𝘯𝘥𝘰
 │•📒𝙎𝙖𝙫𝙚𝙞𝙢𝙖𝙜𝙚
 │•📒𝙑𝙞𝙚𝙬𝙞𝙢𝙖𝙜𝙚
┗━━━━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━━━━┓ │• 𝗘𝗡𝗔𝗕𝗟𝗘✅️/𝗗𝗜𝗦𝗔𝗕𝗟𝗘❌️
┗━━━━━━━━━━━━━━━━━━━━┛
 │•🟢𝙏𝙧𝙪𝙚 𝘸𝘦𝘭𝘤𝘰𝘮𝘦
 │•🔴𝙁𝙖𝙡𝙨𝙚 𝘸𝘦𝘭𝘤𝘰𝘮𝘦
 │•🟢𝙏𝙧𝙪𝙚 𝘮𝘰𝘥𝘰𝘩𝘰𝘳𝘯𝘺
 │•🔴𝙁𝙖𝙡𝙨𝙚 𝘮𝘰𝘥𝘰𝘩𝘰𝘳𝘯𝘺
 │•🟢𝙏𝙧𝙪𝙚 𝘢𝘯𝘵𝘪𝘭𝘪𝘯𝘬
 │•🔴𝙁𝙖𝙡𝙨𝙚 𝘢𝘯𝘵𝘪𝘭𝘪𝘯𝘬
 │•🟢𝙏𝙧𝙪𝙚 𝘢𝘯𝘵𝘪𝘭𝘪𝘯𝘬2
 │•🔴𝙁𝙖𝙡𝙨𝙚 𝘢𝘯𝘵𝘪𝘭𝘪𝘯𝘬2
 │•🟢𝙏𝙧𝙪𝙚 𝘥𝘦𝘵𝘦𝘤𝘵
 │•🔴𝙁𝙖𝙡𝙨𝙚 𝘥𝘦𝘵𝘦𝘤𝘵
 │•🟢𝙏𝙧𝙪𝙚 𝘢𝘶𝘥𝘪𝘰𝘴
 │•🔴𝙁𝙖𝙡𝙨𝙚 𝘢𝘶𝘥𝘪𝘰𝘴
 │•🟢𝙏𝙧𝙪𝙚 𝘢𝘶𝘵𝘰𝘴𝘵𝘪𝘤𝘬𝘦𝘳𝘴
 │•🔴𝙁𝙖𝙡𝙨𝙚 𝘢𝘶𝘵𝘰𝘴𝘵𝘪𝘤𝘬𝘦𝘳𝘴
 │•🟢𝙏𝙧𝙪𝙚 𝘢𝘯𝘵𝘪𝘷𝘪𝘦𝘸𝘰𝘯𝘤𝘦
 │•🔴𝙁𝙖𝙡𝙨𝙚 𝘢𝘯𝘵𝘪𝘷𝘪𝘦𝘸𝘰𝘯𝘤𝘦
 │•🟢𝙏𝙧𝙪𝙚 𝘢𝘯𝘵𝘪𝘵𝘰𝘹𝘪𝘤
 │•🔴𝙁𝙖𝙡𝙨𝙚 𝘢𝘯𝘵𝘪𝘵𝘰𝘹𝘪𝘤
 │•🟢𝙏𝙧𝙪𝙚 𝘢𝘯𝘵𝘪𝘵𝘳𝘢𝘣𝘢
 │•🔴𝙁𝙖𝙡𝙨𝙚 𝘢𝘯𝘵𝘪𝘵𝘳𝘢𝘣𝘢
 │•🟢𝙏𝙧𝙪𝙚 𝘢𝘯𝘵𝘪𝘢𝘳𝘢𝘣𝘦𝘴
 │•🔴𝙁𝙖𝙡𝙨𝙚 𝘢𝘯𝘵𝘪𝘢𝘳𝘢𝘣𝘦𝘴
 │•🟢𝙏𝙧𝙪𝙚 𝘮𝘰𝘥𝘰𝘢𝘥𝘮𝘪𝘯
 │•🔴𝙁𝙖𝙡𝙨𝙚 𝘮𝘰𝘥𝘰𝘢𝘥𝘮𝘪𝘯
 │•🟢𝙏𝙧𝙪𝙚 𝘢𝘯𝘵𝘪𝘥𝘦𝘭𝘦𝘵𝘦
 │•🔴𝙁𝙖𝙡𝙨𝙚 𝘢𝘯𝘵𝘪𝘥𝘦𝘭𝘦𝘵𝘦
┗━━━━━━━━━━━━━━━━━━━━`.trim();
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
