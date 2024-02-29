import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
    const pp = imagen2;
    // let vn = './media/menu.mp3'
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
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `┌───────────────────┐
│╭───────────────
│├ *🧸𝗛𝗼𝗹𝗮⚡* @${m.sender.split`@`[0]}
│├ *🧸𝗘𝗻 𝗴𝗿𝘂𝗽𝗼𝘀: 𝙾𝚆𝙽𝙴𝚁*
│├ *🧸𝘾𝙧𝙚𝙖𝙙𝙤𝙧:𝙺𝙰𝚁𝙸𝙼*
│├ *🧸𝗡𝘂𝗺𝗲𝗿𝗼:+591 68683798*
│├ *🧸𝙃𝙚𝙧𝙢𝙤𝙨𝙤 𝗱𝗶𝗮 𝗽𝗮𝗿𝗮 𝘁𝗶*
│╰───────────────
└───────────────────┘

┌───────────────────┐
│╭───────────────
│├ *🕹️𝙉𝙞𝙫𝙚𝙡: ${level}*
│├ *✨𝙀𝙭𝙥𝙚𝙧𝙞𝙚𝙣𝙘𝙞𝙖: ${exp}*
│├ *🏆𝙍𝙖𝙣𝙜𝙤: ${role}*
│├ *💎𝘿𝙞𝙖𝙢𝙖𝙣𝙩𝙚𝙨: ${limit}*
│├ *🧸𝘿𝙮𝙡𝙖𝙣𝘾𝙤𝙞𝙣𝙨: ${money}*
│├ *🌀𝙏𝙤𝙠𝙚𝙣𝙨: ${joincount}*
│╰───────────────
└───────────────────┘

╭──────────────────╮
│⏤͟͟͞𝙁𝙍𝙀𝙀 𝙁𝙄𝙍𝙀
├──────────────────╯
│➼🗺️ 𝐁𝐞𝐫𝐦𝐮𝐝𝐚 
│➼🗺️ 𝐊𝐚𝐥𝐚𝐡𝐚𝐫𝐢 
│➼🗺️ 𝐀𝐥𝐩𝐞𝐬 
│➼🗺️ 𝐏𝐮𝐫𝐠𝐚𝐭𝐨𝐫𝐢𝐨 
│➼🗺️ 𝐍𝐞𝐱𝐭𝐞𝐫𝐫𝐚
│➼🗺️ 𝐀𝐠𝐞𝐧𝐝𝐚𝐬𝐞𝐦𝐚𝐧𝐚𝐥
╰──────────────────╯
╭──────────────────╮
│⏤͟͟͞𝙁𝙍𝙀𝙀 𝙁𝙄𝙍𝙀
├──────────────────╯
│➼🫧 𝐒𝐩𝐚𝐦𝟐 
│➼🫧 𝐃𝐫𝐢𝐯𝐞𝐬𝐝𝐳𝐧 
│➼🫧 𝐀𝐩𝐤𝐞𝐝𝐢𝐭𝐬
╰──────────────────╯
 
╭──────────────────╮
│⏤͟͟͞𝐋𝐈𝐒𝐓𝐀𝐒 𝐕𝐒 𝐅𝐄𝐌
├──────────────────╯
│➼💻 𝐅𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟏𝟒
│➼💻 𝐅𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟏𝟔
│➼💻 𝐅𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟏𝟖
│➼💻 𝐅𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟐𝟎
│➼💻 𝐅𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟐𝟐
│➼💻 𝐅𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟎𝟎
│➼💻 𝐅𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝟏𝟒
│➼💻 𝐅𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝟏𝟔
│➼💻 𝐅𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝟏𝟖
│➼💻 𝐅𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝟐𝟎
│➼💻 𝐅𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝟐𝟐
│➼💻 𝐅𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝟎𝟎
│➼💻 𝐅𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝐯𝐬
│➼💻 𝐅𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝐯𝐬
│➼💻 𝐅𝐞𝐦𝟖𝐯𝐬𝟖
│➼💻 𝐅𝐞𝐦𝟏𝟐𝐯𝐬𝟏𝟐
│➼💻 𝐅𝐞𝐦𝟏𝟔𝐯𝐬𝟏𝟔
╰──────────────────╯

╭──────────────────╮
│⏤͟͟͞𝐋𝐈𝐒𝐓𝐀𝐒 𝐕𝐒 𝐌𝐀𝐒𝐂
├──────────────────╯
│➼💻 𝐌𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟏𝟒
│➼💻 𝐌𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟏𝟔
│➼💻 𝐌𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟏𝟖
│➼💻 𝐌𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟐𝟎
│➼💻 𝐌𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟐𝟐
│➼💻 𝐌𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟎𝟎
│➼💻 𝐌𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝟏𝟒
│➼💻 𝐌𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝟏𝟔
│➼💻 𝐌𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝟏𝟖
│➼💻 𝐌𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝟐𝟎
│➼💻 𝐌𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝟐𝟐
│➼💻 𝐌𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝟎𝟎
│➼💻 𝐌𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝐯𝐬
│➼💻 𝐌𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝐯𝐬
│➼💻 𝐌𝐚𝐬𝐜𝟖𝐯𝐬𝟖
│➼💻 𝐌𝐚𝐬𝐜𝟏𝟐𝐯𝐬𝟏𝟐
│➼💻 𝐌𝐚𝐬𝐜𝟏𝟔𝐯𝐬𝟏𝟔
╰──────────────────╯


   *╔══ ≪ ⚠️ *FREE FIRE* ⚠️ ≫ ══╗*
    *║*
    *║* ≪ PUEDEN USAR LOS ADMINS ≫
    *║*
    *║* ≪ REGLAS , LISTA , FICHA ≫
    *║*
    *║* 💻➺ _${usedPrefix}Fem4_
    *║* 💻➺ _${usedPrefix}Fem6_
    *║* 💻➺ _${usedPrefix}FemInterna4_
    *║* 💻➺ _${usedPrefix}FemInterna6_
    *║* 💻➺ _${usedPrefix}Masc4_
    *║* 💻➺ _${usedPrefix}Masc6_
    *║* 💻➺ _${usedPrefix}MascInterna4_
    *║* 💻➺ _${usedPrefix}MascInterna6_
    *║* 💻➺ _${usedPrefix}Mixto4_
    *║* 💻➺ _${usedPrefix}Mixto6_
    *║* 💻➺ _${usedPrefix}MixtoInterna4_
    *║* 💻➺ _${usedPrefix}MixtoInterna6_
    *║* 💻➺ _${usedPrefix}lista4_
    *║* 💻➺ _${usedPrefix}apos_
    *║* 💻➺ _${usedPrefix}mapa_
    *║* 💻➺ _${usedPrefix}Ficha / Formulario Reclutamiento_
    *║* 💻➺ _${usedPrefix}Nexterra_
    *║* 💻➺ _${usedPrefix}Bermuda_
    *║* 💻➺ _${usedPrefix}Kalahary_
    *║* 💻➺ _${usedPrefix}Alpes_
    *║* 💻➺ _${usedPrefix}AgendaSemanal_
    *╚══ ≪ •❈• ≫ ══╝*

    ╭━〔 ⚔️ *BUSCAR VS PLANTILLAS* 🔱 〕
    *┃➤ 🌀 ${usedPrefix}buscarvsmasc*
    *┃➤ ⚔️ ${usedPrefix}bsmsac*
    *┃➤ ⚓ ${usedPrefix}buscarvsfem*
    *┃➤ ✨ ${usedPrefix}bsfem*
    *┃➤ 📍 ${usedPrefix}buscarvsmixto*
    *┃➤ 👁️‍🗨️ ${usedPrefix}bsmixto*
     ╰━━━━━━━━━━━━

     *╔══ ≪ LINKS DE COMUS/APK Y DRIVES DZN ≫ ══╗*
    *║* 🎐_${usedPrefix}SpamApk / WhatsApp_
    *║* 🎐_${usedPrefix}SpamComu / Comunidades_
    *║* 🎐 _${usedPrefix}Spam2_
    *║* 🎐 _${usedPrefix}rcursosdzn_
    *║* 🎐 _${usedPrefix}drivesdzn_
    *║* 🎐 _${usedPrefix}dzn_
    *║* 🎐 _${usedPrefix}ApkEdits_
    *║* 🎐 _${usedPrefix}DriveEdits_
    *╚══ ≪ •❈• ≫ ══╝*
    
    ╭━〔 ⚠️ *MAPAS* ⚠️ 〕
    *┃➤ 🗺️ ${usedPrefix}bermuda*
    *┃➤ 🗺️ ${usedPrefix}kalahari*
    *┃➤ 🗺️ ${usedPrefix}alpes*
    *┃➤ 🗺️ ${usedPrefix}purgatorio*
    *┃➤ 🗺️ ${usedPrefix}nexterra*
    *┃➤ 📋 ${usedPrefix}agendasemanal*
     ╰━━━━━━━━━━━━`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.command = /^(Menuff|menuff|comandosff)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}