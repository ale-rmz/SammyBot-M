import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `┌───────────────────┐
│╭───────────────
│├🧸𝐇𝐨𝐥𝐚⚡ @${m.sender.split`@`[0]}
│├🧸𝐃𝐮𝐞𝐧̃𝐨 𝐃𝐞𝐥 𝐁𝐨𝐭
│├🧸 wa.me/59168683798
│├🧸𝐁𝐨𝐭 𝐎𝐟𝐢𝐜𝐢𝐚𝐥
│├🧸 wa.me/5493584119436
│├🧸𝐕𝐞𝐫𝐬𝐢𝐨𝐧: *3.1.0*
│├🧸𝐅𝐞𝐜𝐡𝐚: ${date}
│├🧸𝐓𝐢𝐞𝐦𝐩𝐨 𝐀𝐜𝐭: ${uptime}
│╰───────────────
├───────────────────
│╭───────────────
│├⚜️𝐋𝐞𝐯𝐞𝐥𝐮𝐩: ${level}*
│├🌱𝐄𝐱𝐩: ${exp}*
│├🏆𝐑𝐚𝐧𝐠𝐨: ${role}*
│├💎𝐃𝐢𝐚𝐦𝐚𝐧𝐭𝐞: ${limit}*
│├🧸𝐃𝐲𝐥𝐚𝐧𝐂𝐨𝐢𝐧𝐬: ${money}*
│├🌀𝐓𝐨𝐤𝐞𝐧𝐬: ${joincount}*
│╰───────────────
└───────────────────┘

╭──────────────────╮
│⏤͟͟͞⏤͟͟͞͞𝙎𝙊𝙇𝙐𝘾𝙄𝙊𝙉/𝙀𝙍𝙍𝙊𝙍𝙀𝙎
├──────────────────╯
│➼🗃𝐌𝐞𝐧𝐬𝐚𝐣𝐞𝐬 𝐞𝐧 𝐞𝐬𝐩𝐞𝐫𝐚
│➼🗃𝐅𝐢𝐦𝐠𝐞𝐱𝐢𝐦𝐚𝐠𝐞𝐬
│➼🗃𝐌𝐞𝐧𝐬𝐚𝐣𝐞𝐬 𝐞𝐧 𝐞𝐬𝐩𝐞𝐫𝐚 (𝚘𝚠𝚗𝚎𝚛)
│➼🗃𝐝𝐬𝐨𝐰𝐧𝐞𝐫
╰──────────────────╯

╭──────────────────╮
│⏤͟͟͞𝐋𝐈𝐒𝐓𝐀𝐒 𝐕𝐒 𝐅𝐄𝐌
├──────────────────╯
│➼⭐𝐀𝐩𝐤𝐝𝐲𝐧𝐚𝐦𝐢𝐜𝐢𝐬𝐥𝐚𝐧𝐝
│➼⭐𝐀𝐩𝐤𝐜𝐚𝐩𝐜𝐮𝐭 
│➼⭐𝐀𝐩𝐤𝐛𝐞𝐚𝐜𝐡𝐛𝐮𝐠𝐠𝐲 
│➼⭐𝐀𝐩𝐤𝐦𝐢𝐧𝐞𝐜𝐫𝐚𝐟𝐭 
│➼⭐𝐀𝐩𝐤𝐩𝐢𝐜𝐬𝐚𝐫𝐭 
│➼⭐𝐀𝐩𝐤𝐩𝐨𝐩𝐩𝐲𝐩𝐥𝐚𝐲𝐭𝐢𝐦𝐞 
│➼⭐𝐀𝐩𝐤𝐬𝐩𝐚𝐦 
│➼⭐𝐀𝐩𝐤𝐬𝐩𝐨𝐭𝐢𝐟𝐲 
│➼⭐𝐀𝐩𝐤𝐲𝐨𝐮𝐭𝐮𝐛𝐞𝐦𝐮𝐬𝐢𝐜
╰──────────────────╯

╭──────────────────╮
│⏤͟͟͞𝙁𝙍𝙀𝙀 𝙁𝙄𝙍𝙀
├──────────────────╯
│➼👨‍💻𝐁𝐮𝐬𝐜𝐚𝐫𝐯𝐬𝐟𝐞𝐦 
│➼👨‍💻𝐁𝐮𝐬𝐜𝐚𝐫𝐯𝐬𝐦𝐚𝐬𝐜 
│➼👨‍💻𝐁𝐮𝐬𝐜𝐚𝐫𝐯𝐬𝐦𝐢𝐱𝐭𝐨
│➼👨‍💻𝐅𝐨𝐫𝐦𝐮𝐥𝐚𝐫𝐢𝐨
╰──────────────────╯

╭──────────────────╮
│⏤͟͟͞𝙁𝙍𝙀𝙀 𝙁𝙄𝙍𝙀
├──────────────────╯
│➼🗺️𝐁𝐞𝐫𝐦𝐮𝐝𝐚 
│➼🗺️𝐊𝐚𝐥𝐚𝐡𝐚𝐫𝐢 
│➼🗺️𝐀𝐥𝐩𝐞𝐬 
│➼🗺️𝐏𝐮𝐫𝐠𝐚𝐭𝐨𝐫𝐢𝐨 
│➼🗺️𝐍𝐞𝐱𝐭𝐞𝐫𝐫𝐚
│➼🗺️𝐀𝐠𝐞𝐧𝐝𝐚𝐬𝐞𝐦𝐚𝐧𝐚𝐥
╰──────────────────╯

╭──────────────────╮
│⏤͟͟͞𝙁𝙍𝙀𝙀 𝙁𝙄𝙍𝙀
├──────────────────╯
│➼🫧𝐒𝐩𝐚𝐦𝟏
│➼🫧𝐒𝐩𝐚𝐦𝟐 
│➼🫧𝐃𝐫𝐢𝐯𝐞𝐬𝐝𝐳𝐧 
│➼🫧𝐀𝐩𝐤𝐞𝐝𝐢𝐭𝐬
╰──────────────────╯

╭──────────────────╮
│⏤͟͟͞𝐋𝐈𝐒𝐓𝐀𝐒 𝐕𝐒 𝐅𝐄𝐌
├──────────────────╯
│➼⚡𝐅𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟏𝟒
│➼⚡𝐅𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟏𝟔
│➼⚡𝐅𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟏𝟖
│➼⚡𝐅𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟐𝟎
│➼⚡𝐅𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟐𝟐
│➼⚡𝐅𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟎𝟎
│➼⚡𝐅𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝐯𝐬
│➼⚡𝐅𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝟏𝟒
│➼⚡𝐅𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝟏𝟔
│➼⚡𝐅𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝟏𝟖
│➼⚡𝐅𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝟐𝟎
│➼⚡𝐅𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝟐𝟐
│➼⚡𝐅𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝟎𝟎
│➼⚡𝐅𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝐯𝐬
│➼⚡𝐅𝐞𝐦𝟖𝐯𝐬𝟖
│➼⚡𝐅𝐞𝐦𝟏𝟔𝐯𝐬𝟏𝟔
╰──────────────────╯

╭──────────────────╮
│⏤͟͟͞𝐋𝐈𝐒𝐓𝐀𝐒 𝐕𝐒 𝐌𝐀𝐒𝐂
├──────────────────╯
│➼⚡𝐌𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟏𝟒
│➼⚡𝐌𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟏𝟔
│➼⚡𝐌𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟏𝟖
│➼⚡𝐌𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟐𝟎
│➼⚡𝐌𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟐𝟐
│➼⚡𝐌𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟎𝟎
│➼⚡𝐌𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝐯𝐬
│➼⚡𝐌𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝟏𝟒
│➼⚡𝐌𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝟏𝟔
│➼⚡𝐌𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝟏𝟖
│➼⚡𝐌𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝟐𝟎
│➼⚡𝐌𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝟐𝟐
│➼⚡𝐌𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝟎𝟎
│➼⚡𝐌𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝐯𝐬
│➼⚡𝐌𝐚𝐬𝐜𝟖𝐯𝐬𝟖
│➼⚡𝐌𝐚𝐬𝐜𝟏𝟔𝐯𝐬𝟏𝟔
╰──────────────────╯

╭──────────────────╮
│⏤͟͟͞𝑰𝑵𝑭𝑶 𝑩𝑶𝑻
├──────────────────╯
│➼📝𝐡𝐞𝐥𝐩
│➼📝𝐓𝐲𝐜
│➼📝𝐆𝐫𝐮𝐩𝐨𝐬
│➼📝𝐄𝐬𝐭𝐚𝐝𝐨
│➼📝𝐈𝐧𝐟𝐨𝐛𝐨𝐭
│➼📝𝐒𝐩𝐞𝐞𝐝𝐭𝐞𝐭
│➼📝𝐃𝐨𝐧𝐚𝐫
│➼📝𝐎𝐰𝐧𝐞𝐫
│➼📝𝐒𝐜𝐫𝐢𝐩𝐭
│➼📝𝐁𝐨𝐭 (𝙿𝚛𝚎𝚏𝚒𝚓𝚘 ".")
╰──────────────────╯

╭──────────────────╮
│⏤͟͟͞͞𝑰𝑵𝑺𝑻𝑨𝑳𝑨𝑹 𝑬𝑳 𝑩𝑶𝑻
├──────────────────╯
│➼🚀𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫𝐛𝐨𝐭
╰──────────────────╯

╭──────────────────╮
│⏤͟͟͞͞𝑨𝑮𝑬𝑵𝑫𝑨 𝑺𝑬𝑴𝑨𝑵𝑨𝑳
├──────────────────╯
│➼🗓️𝐚𝐠𝐞𝐧𝐝𝐚𝐬𝐞𝐦𝐚𝐧𝐚𝐥
╰──────────────────╯
 
╭──────────────────╮
│⏤͟͟͞͞𝙅𝙐𝙀𝙂𝙊𝙎
├──────────────────╯
│➼🎮𝐀𝐦𝐢𝐠𝐨𝐫𝐚𝐧𝐝𝐨𝐦 𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
│➼🎮𝐅𝐚𝐤𝐞 𝚃𝚎𝚡𝚝𝚘𝟷 @𝚝𝚊𝚐 𝚝𝚎𝚡𝚝𝚘𝟸
│➼🎮𝐏𝐩𝐭 𝙿𝚊𝚙𝚎𝚛 𝚙𝚒𝚎𝚍𝚛𝚊 𝚝𝚒𝚔𝚎𝚛𝚊
│➼🎮𝐏𝐫𝐨𝐬𝐭𝐢𝐭𝐮𝐭𝐨 𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
│➼🎮𝐏𝐫𝐨𝐬𝐭𝐢𝐭𝐮𝐭𝐚 𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
│➼🎮𝐆𝐚𝐲𝟐  𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
│➼🎮𝐋𝐞𝐬𝐛𝐢𝐚𝐧𝐚 𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
│➼🎮𝐏𝐚𝐣𝐞𝐫𝐨 𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
│➼🎮𝐏𝐚𝐣𝐞𝐫𝐚 𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
│➼🎮𝐏𝐮𝐭𝐨 𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
│➼🎮𝐏𝐮𝐭𝐚 𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
│➼🎮𝐌𝐚𝐧𝐜𝐨 𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
│➼🎮𝐌𝐚𝐧𝐜𝐚 𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
│➼🎮𝐑𝐚𝐭𝐚 𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
│➼🎮𝐋𝐨𝐯𝐞 𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
│➼🎮𝐃𝐨𝐱𝐞𝐚𝐫 𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
│➼🎮𝐏𝐫𝐞𝐠𝐮𝐧𝐭𝐚 𝚃𝚎𝚡𝚝𝚘
│➼🎮𝐒𝐮𝐢𝐭𝐩𝐯𝐩 @𝚝𝚊𝚐
│➼🎮𝐒𝐥𝐨𝐭 𝙰𝚙𝚞𝚎𝚜𝚝𝚊
│➼🎮𝐓𝐭𝐭 𝙽𝚘𝚖𝚋𝚛𝚎 𝚜𝚊𝚕𝚊
│➼🎮𝐃𝐞𝐥𝐭𝐭𝐭
│➼🎮𝐀𝐜𝐞𝐫𝐭𝐢𝐣𝐨
│➼🎮𝐒𝐢𝐦𝐢 𝚃𝚎𝚡𝚝𝚘
│➼🎮𝐓𝐨𝐩 𝚃𝚎𝚡𝚝𝚘
│➼🎮𝐓𝐨𝐩𝐠𝐚𝐲𝐬
│➼🎮𝐓𝐨𝐩𝐨𝐭𝐚𝐤𝐮𝐬
│➼🎮𝐅𝐨𝐫𝐦𝐚𝐫𝐩𝐚𝐫𝐞𝐣𝐚
│➼🎮𝐕𝐞𝐫𝐝𝐚𝐝
│➼🎮𝐑𝐞𝐭𝐨
│➼🎮𝐂𝐚𝐧𝐜𝐢𝐨𝐧
│➼🎮𝐏𝐢𝐬𝐭𝐚
│➼🎮𝐀𝐤𝐢𝐧𝐚𝐭𝐨𝐫
│➼🎮𝐖𝐨𝐫𝐝𝐟𝐢𝐧𝐝
╰──────────────────╯

╭──────────────────╮
│⏤͟͟͞͞𝑻𝑹𝑼𝑬 - 𝑭𝑨𝑳𝑺𝑬
├──────────────────╯
│➼✅𝗧𝗿𝘂𝗲 𝐰𝐞𝐥𝐜𝐨𝐦𝐞
│➼🚫𝗙𝗮𝗹𝘀𝗲 𝐰𝐞𝐥𝐜𝐨𝐦𝐞
│➼✅𝗧𝗿𝘂𝗲 𝐦𝐨𝐝𝐨𝐡𝐨𝐫𝐧𝐲
│➼🚫𝗙𝗮𝗹𝘀𝗲 𝐦𝐨𝐝𝐨𝐡𝐨𝐫𝐧𝐲
│➼✅𝗧𝗿𝘂𝗲 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤
│➼🚫𝗙𝗮𝗹𝘀𝗲 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤
│➼✅𝗧𝗿𝘂𝗲 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤𝟐
│➼🚫𝗙𝗮𝗹𝘀𝗲 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤𝟐
│➼✅𝗧𝗿𝘂𝗲 𝐝𝐞𝐭𝐞𝐜𝐭
│➼🚫𝗙𝗮𝗹𝘀𝗲 𝐝𝐞𝐭𝐞𝐜𝐭
│➼✅𝗧𝗿𝘂𝗲 𝐚𝐮𝐝𝐢𝐨𝐚
│➼🚫𝗙𝗮𝗹𝘀𝗲 𝐚𝐮𝐝𝐢𝐨𝐬
│➼✅𝗧𝗿𝘂𝗲 𝐚𝐮𝐭𝐨𝐬𝐭𝐢𝐜𝐤𝐞𝐫
│➼🚫𝗙𝗮𝗹𝘀𝗲 𝐚𝐮𝐭𝐨𝐬𝐭𝐢𝐜𝐤𝐞𝐫
│➼✅𝗧𝗿𝘂𝗲 𝐚𝐧𝐭𝐢𝐯𝐢𝐞𝐰𝐨𝐧𝐜𝐞
│➼🚫𝗙𝗮𝗹𝘀𝗲 𝐚𝐧𝐭𝐢𝐯𝐢𝐞𝐰𝐨𝐧𝐜𝐞
│➼✅𝗧𝗿𝘂𝗲 𝐚𝐧𝐭𝐢𝐭𝐨𝐱𝐢𝐜
│➼🚫𝗙𝗮𝗹𝘀𝗲 𝐚𝐧𝐭𝐢𝐭𝐨𝐱𝐢𝐜
│➼✅𝗧𝗿𝘂𝗲 𝐚𝐧𝐭𝐢𝐭𝐫𝐚𝐛𝐚
│➼🚫𝗙𝗮𝗹𝘀𝗲 𝐚𝐧𝐭𝐢𝐭𝐫𝐚𝐛𝐚
│➼✅𝗧𝗿𝘂𝗲 𝐚𝐧𝐭𝐢𝐚𝐫𝐚𝐛𝐞𝐬
│➼🚫𝗙𝗮𝗹𝘀𝗲 𝐚𝐧𝐭𝐢𝐚𝐫𝐚𝐛𝐞𝐬
│➼✅𝗧𝗿𝘂𝗲 𝐦𝐨𝐝𝐨𝐚𝐝𝐦𝐢𝐧
│➼🚫𝗙𝗮𝗹𝘀𝗲 𝐦𝐨𝐝𝐨𝐚𝐝𝐦𝐢𝐧
│➼✅𝗧𝗿𝘂𝗲 𝐚𝐧𝐭𝐢𝐝𝐞𝐥𝐞𝐭𝐞
│➼🚫𝗙𝗮𝗹𝘀𝗲 𝐚𝐧𝐭𝐢𝐝𝐞𝐥𝐞𝐭𝐞
╰──────────────────╯

╭──────────────────╮
│⏤͟͟͞͞𝑹𝑬𝑷𝑶𝑹𝑻𝑬𝑺
├──────────────────╯
│➼🖥𝐑𝐞𝐩𝐨𝐫𝐭𝐞 𝚝𝚎𝚡𝚝𝚘
╰──────────────────╯

╭──────────────────╮
│⏤͟͟͞͞𝑫𝑬𝑺𝑪𝑨𝑹𝑮𝑨𝑺
├──────────────────╯
│➼🗂️𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 𝚎𝚗𝚕𝚊𝚌𝚎
│➼🗂️𝐌𝐞𝐝𝐢𝐚𝐟𝐢𝐫𝐞 𝚎𝚗𝚕𝚊𝚌𝚎
│➼🗂️𝐆𝐢𝐭𝐜𝐥𝐨𝐧𝐞 𝚎𝚗𝚕𝚊𝚌𝚎
│➼🗂️𝐓𝐢𝐤𝐭𝐨𝐤 𝚎𝚗𝚕𝚊𝚌𝚎
│➼🗂️𝐓𝐢𝐤𝐭𝐨𝐤𝐢𝐦𝐠 𝚎𝚗𝚕𝚊𝚌𝚎
│➼🗂️𝐗𝐧𝐱𝐱𝐝𝐥 𝚎𝚗𝚕𝚊𝚌𝚎
│➼🗂️𝐗𝐯𝐢𝐝𝐞𝐨𝐬𝐝𝐥 𝚎𝚗𝚕𝚊𝚌𝚎
│➼🗂️𝐓𝐰𝐢𝐭𝐭𝐞𝐫 𝚎𝚗𝚕𝚊𝚌𝚎
│➼🗂️𝐅𝐛 𝚎𝚗𝚕𝚊𝚌𝚎
│➼🗂️𝐘𝐭𝐬𝐡𝐨𝐫𝐭 𝚎𝚗𝚕𝚊𝚌𝚎
│➼🗂️𝐘𝐭𝐦𝐩𝟑 𝚎𝚗𝚕𝚊𝚌𝚎
│➼🗂️𝐘𝐭𝐦𝐩𝟒 𝚎𝚗𝚕𝚊𝚌𝚎
│➼🗂️𝐘𝐭𝐦𝐩𝟑𝐝𝐨𝐜 𝚎𝚗𝚕𝚊𝚌𝚎
│➼🗂️𝐘𝐭𝐦𝐩𝟒𝐝𝐨𝐜 𝚎𝚗𝚕𝚊𝚌𝚎
│➼🗂️𝐕𝐢𝐝𝐞𝐨𝐝𝐨𝐜 𝚎𝚗𝚕𝚊𝚌𝚎
│➼🗂️𝐃𝐚𝐩𝐤𝟐 𝚎𝚗𝚕𝚊𝚌𝚎
│➼🗂️𝐒𝐭𝐢𝐜𝐤𝐞𝐫𝐩𝐚𝐜𝐤  𝚎𝚗𝚕𝚊𝚌𝚎
│➼🗂️𝐏𝐥𝐚𝐲 𝚝𝚎𝚡𝚝𝚘
│➼🗂️𝐏𝐥𝐚𝐲𝟐 𝚝𝚎𝚡𝚝𝚘
│➼🗂️𝐏𝐥𝐚𝐲.𝟏𝚝𝚎𝚡𝚝𝚘
│➼🗂️𝐏𝐥𝐚𝐲.𝟐𝚝𝚎𝚡𝚝𝚘
│➼🗂️𝐏𝐥𝐚𝐲𝐝𝐨𝐱 𝚝𝚎𝚡𝚝𝚘
│➼🗂️𝐏𝐥𝐚𝐲𝐝𝐨𝐜𝟐 𝚝𝚎𝚡𝚝𝚘
│➼🗂️𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 𝚝𝚎𝚡𝚝𝚘
│➼🗂️𝐒𝐩𝐨𝐭𝐢𝐟𝐲 𝚝𝚎𝚡𝚝𝚘
│➼🗂️𝐑𝐢𝐧𝐠𝐭𝐨𝐧𝐞 𝚝𝚎𝚡𝚝𝚘
│➼🗂️𝐒𝐨𝐮𝐧𝐝𝐜𝐥𝐨𝐧𝐞 𝚝𝚎𝚡𝚝𝚘
│➼🗂️𝐈𝐦𝐚𝐠𝐞 𝚝𝚎𝚡𝚝𝚘
│➼🗂️𝐏𝐢𝐧𝐭𝐞𝐫𝐞𝐬𝐭 𝚝𝚎𝚡𝚝𝚘
│➼🗂️𝐖𝐚𝐥𝐥𝐩𝐚𝐩𝐞𝐫 𝚝𝚎𝚡𝚝𝚘
│➼🗂️𝐩𝐩𝐭𝐢𝐤𝐭𝐨𝐤 𝚗𝚘𝚖𝚋𝚛𝚎 𝚍𝚎 𝚞𝚜𝚞𝚊𝚛𝚒𝚘
│➼🗂️𝐈𝐠𝐬𝐭𝐚𝐥𝐥 𝚗𝚘𝚖𝚋𝚛𝚎 𝚍𝚎 𝚞𝚜𝚞𝚊𝚛𝚒𝚘
│➼🗂️𝐢𝐠𝐬𝐭𝐨𝐫𝐲 𝚗𝚘𝚖𝚋𝚛𝚎 𝚍𝚎 𝚞𝚜𝚞𝚊𝚛𝚒𝚘
│➼🗂️𝐓𝐢𝐤𝐭𝐨𝐤𝐬𝐭𝐚𝐥𝐥 𝚞𝚜𝚎𝚛𝚗𝚊𝚖𝚎
╰──────────────────╯

╭──────────────────╮
│⏤͟͟͞͞𝑩𝑼𝑺𝑪𝑨𝑫𝑶𝑹𝑬𝑺
├──────────────────╯
│➼🔎𝐆𝐢𝐭𝐡𝐮𝐛𝐬𝐞𝐚𝐫𝐜𝐡 𝚝𝚎𝚡𝚝𝚘
│➼🔎𝐏𝐞𝐥𝐢𝐬𝐩𝐥𝐮𝐬 𝚝𝚎𝚡𝚝𝚘
│➼🔎𝐌𝐨𝐝𝐚𝐩𝐤 𝚝𝚎𝚡𝚝𝚘
│➼🔎𝐒𝐭𝐢𝐜𝐤𝐞𝐫𝐬𝐞𝐚𝐫𝐜𝐡 𝚝𝚎𝚡𝚝𝚘
│➼🔎𝐒𝐭𝐢𝐜𝐤𝐞𝐫𝐬𝐞𝐚𝐫𝐜𝐡𝟐 𝚝𝚎𝚡𝚝𝚘
│➼🔎𝐗𝐧𝐱𝐱𝐬𝐞𝐚𝐫𝐜𝐡 𝚝𝚎𝚡𝚝𝚘
│➼🔎𝐀𝐧𝐢𝐦𝐞𝐢𝐧𝐟𝐨 𝚝𝚎𝚡𝚝𝚘
│➼🔎𝐆𝐨𝐨𝐠𝐥𝐞 𝚝𝚎𝚡𝚝𝚘
│➼🔎𝐋𝐞𝐭𝐫𝐚 𝚝𝚎𝚡𝚝𝚘
│➼🔎𝐖𝐢𝐤𝐢𝐩𝐞𝐝𝐢𝐚 𝚝𝚎𝚡𝚝𝚘
│➼🔎𝐘𝐭𝐬𝐞𝐚𝐫𝐜𝐡 𝚝𝚎𝚡𝚝𝚘
│➼🔎𝐏𝐥𝐚𝐲𝐬𝐭𝐨𝐫𝐞 𝚝𝚎𝚡𝚝𝚘
╰──────────────────╯

╭──────────────────╮
│⏤͟͟͞͞𝑮𝑹𝑼𝑷𝑶𝑺 𝑨𝑱𝑼𝑺𝑻𝑬𝑺
├──────────────────╯
│➼⚙️𝐀𝐝𝐝 𝚗𝚞𝚖𝚎𝚛𝚘
│➼⚙️𝐊𝐢𝐜𝐤 @𝚝𝚊𝚐
│➼⚙️𝐊𝐢𝐜𝐤𝟐 @𝚝𝚊𝚐
│➼⚙️𝐋𝐢𝐬𝐭𝐚𝐧𝐮𝐦 𝚝𝚎𝚡𝚝𝚘
│➼⚙️𝐊𝐢𝐜𝐤𝐧𝐮𝐦 𝚝𝚎𝚡𝚝𝚘
│➼⚙️𝐆𝐫𝐮𝐩𝐨 𝚊𝚋𝚛𝚒𝚛/𝚌𝚎𝚛𝚛𝚊𝚛
│➼⚙️𝐆𝐫𝐨𝐮𝐩𝐭𝐢𝐦𝐞 𝚘𝚙𝚌𝚒𝚘𝚗 𝚝𝚒𝚎𝚖𝚙𝚘
│➼⚙️𝐏𝐫𝐨𝐦𝐨𝐭𝐞 @𝚝𝚊𝚐
│➼⚙️𝐃𝐞𝐦𝐨𝐭𝐞 @𝚝𝚊𝚐
│➼⚙️𝐀𝐝𝐦𝐢𝐧𝐬 𝚝𝚎𝚡𝚝𝚘
│➼⚙️𝐃𝐞𝐦𝐨𝐭𝐞 @𝚝𝚊𝚐
│➼⚙️𝐈𝐧𝐟𝐨𝐠𝐫𝐨𝐮𝐩
│➼⚙️𝐑𝐞𝐬𝐞𝐭𝐥𝐢𝐧𝐤
│➼⚙️𝐋𝐢𝐧𝐤
│➼⚙️𝐒𝐞𝐭𝐧𝐚𝐦𝐞 𝚝𝚎𝚡𝚝𝚘
│➼⚙️𝐒𝐞𝐭𝐝𝐞𝐬𝐜 𝚝𝚎𝚡𝚝𝚘
│➼⚙️𝐓𝐨𝐝𝐨𝐬 𝚝𝚎𝚡𝚝𝚘
│➼⚙️𝐒𝐞𝐭𝐰𝐞𝐥𝐜𝐨𝐦𝐞 𝚝𝚎𝚡𝚝𝚘
│➼⚙️𝐒𝐞𝐭𝐛𝐲𝐞 𝚝𝚎𝚡𝚝𝚘
│➼⚙️𝐍𝐨𝐭𝐢𝐟𝐲 𝚝𝚎𝚡𝚝𝚘
│➼⚙️𝐍𝐨𝐭𝐢𝐟𝐲 𝚊𝚞𝚍𝚒𝚘
│➼⚙️𝐍𝐨𝐭𝐢𝐟𝐲 𝚟𝚒𝚍𝚎𝚘
│➼⚙️𝐍𝐨𝐭𝐢𝐟𝐲 𝚒𝚖𝚊𝚐𝚎𝚗
│➼⚙️𝐖𝐚𝐫𝐧 @𝚝𝚊𝚐
│➼⚙️𝐔𝐧𝐰𝐚𝐫𝐧 @𝚝𝚊𝚐
│➼⚙️𝐋𝐢𝐬𝐭𝐰𝐚𝐫𝐧
│➼⚙️𝐅𝐚𝐧𝐭𝐚𝐬𝐦𝐚𝐬
│➼⚙️𝐃𝐞𝐬𝐭𝐫𝐚𝐛𝐚
│➼⚙️𝐒𝐞𝐭𝐩𝐩𝐩 𝚒𝚖𝚊𝚐𝚎𝚗
╰──────────────────╯

╭──────────────────╮
│⏤͟͟͞͞𝑪𝑶𝑵𝑽𝑬𝑹𝑻𝑰𝑫𝑶𝑹𝑬𝑺
├──────────────────╯
│➼🦋𝐓𝐨𝐢𝐦𝐚𝐠𝐞 𝚒𝚖𝚊𝚐𝚎𝚗
│➼🦋𝐓𝐨𝐠𝐢𝐟𝐚𝐮𝐝 𝚟𝚒𝚍𝚎𝚘
│➼🦋𝐓𝐨𝐢𝐦𝐠 𝚜𝚝𝚒𝚌𝚔𝚎𝚛
│➼🦋𝐓𝐨𝐦𝐩𝟑 𝚟𝚒𝚍𝚎𝚘
│➼🦋𝐓𝐨𝐦𝐩𝟑 𝚗𝚘𝚝𝚊 𝚍𝚎 𝚟𝚘𝚣
│➼🦋𝐓𝐨𝐩𝐩 𝚟𝚒́𝚍𝚎𝚘 / 𝚊𝚞𝚍𝚒𝚘
│➼🦋𝐓𝐨𝐯𝐢𝐝𝐞𝐨 𝚜𝚝𝚒𝚌𝚔𝚎𝚛
│➼🦋𝐓𝐨𝐮𝐫𝐥 𝚟𝚒𝚍𝚎𝚘 / 𝚒𝚖𝚊𝚐𝚎𝚗 / 𝚊𝚞𝚍𝚒𝚘
│➼🦋𝐓𝐭𝐬 𝚒𝚍𝚒𝚘𝚖𝚊 𝚝𝚎𝚡𝚝𝚘
│➼🦋𝐓𝐭𝐬 𝚎𝚏𝚎𝚌𝚝𝚘 𝚝𝚎𝚡𝚝𝚘
╰──────────────────╯

╭──────────────────╮
│⏤͟͟͞͞𝑳𝑶𝑮𝑶𝑺-𝑬𝑭𝑬𝑪𝑻𝑶𝑺
├──────────────────╯
│➼✍️𝐋𝐨𝐠𝐨𝐬 𝚎𝚏𝚎𝚌𝚝𝚘 𝚝𝚎𝚡𝚝𝚘
│➼✍️𝐋𝐨𝐠𝐨𝐜𝐡𝐫𝐢𝐬𝐦𝐚𝐬𝐭 𝚝𝚎𝚡𝚝𝚘
│➼✍️𝐋𝐨𝐠𝐨𝐜𝐨𝐫𝐚𝐳𝐨𝐧 𝚝𝚎𝚡𝚝𝚘
│➼✍️𝐘𝐭𝐜𝐨𝐦𝐦𝐞𝐧𝐭 𝚝𝚎𝚡𝚝𝚘_
│➼✍️𝐇𝐨𝐫𝐧𝐲𝐜𝐚𝐫𝐝 @𝚝𝚊𝚐
│➼✍️𝐒𝐢𝐦𝐩𝐜𝐚𝐫𝐝 @𝚝𝚊𝚐
│➼✍️𝐋𝐨𝐥𝐢𝐜𝐞 @𝚝𝚊𝚐
│➼✍️𝐢𝐭𝐬𝐬𝐨𝐬𝐭𝐮𝐩𝐢𝐝
│➼✍️𝐏𝐢𝐱𝐞𝐥𝐚𝐫
│➼✍️𝐁𝐥𝐮𝐫
╰──────────────────╯

╭──────────────────╮
│⏤͟͟͞𝑷𝑰𝑹𝑶𝑷𝑶𝑺
├──────────────────╯
│➼✏️𝐏𝐢𝐫𝐨𝐩𝐨
│➼✏️𝐂𝐨𝐧𝐬𝐞𝐣𝐨
│➼✏️𝐅𝐫𝐚𝐬𝐞𝐫𝐨𝐦𝐚𝐧𝐭𝐢𝐜𝐚
│➼✏️𝐇𝐢𝐬𝐭𝐨𝐫𝐢𝐚𝐫𝐨𝐦𝐚𝐧𝐭𝐢𝐜𝐚
╰──────────────────╯

╭──────────────────╮
│⏤͟͟͞𝑹𝑨𝑵𝑫-𝑨𝑵𝑰𝑴𝑬𝑺
├──────────────────╯
│➼📓𝐌𝐞𝐧𝐮𝐚𝐧𝐢𝐦𝐞𝐬
╰──────────────────╯

╭──────────────────╮
│⏤͟͟͞͞𝑹𝑨𝑵𝑫𝑶𝑴
├──────────────────╯
│➼🛟𝐊𝐩𝐨𝐩 𝙱𝚕𝚊𝚌𝚔𝚙𝚒𝚗𝚔/𝚎𝚡𝚘/𝚋𝚝𝚜
│➼🛟𝐜𝐫𝐢𝐬𝐭𝐢𝐚𝐧𝐨𝐫𝐨𝐧𝐚𝐥𝐝𝐨
│➼🛟𝐦𝐞𝐬𝐬𝐢
│➼🛟𝐜𝐚𝐭
│➼🛟𝐝𝐨𝐠
│➼🛟𝐦𝐞𝐦𝐞
│➼🛟𝐢𝐭𝐳𝐲
│➼🛟𝐛𝐥𝐚𝐜𝐤𝐩𝐢𝐧𝐤
│➼🛟𝐧𝐚𝐯𝐢𝐝𝐚𝐝
│➼🛟𝐰𝐩𝐦𝐨𝐧𝐭𝐚𝐧̃𝐚
│➼🛟𝐩𝐮𝐛𝐠
│➼🛟𝐰𝐩𝐠𝐚𝐦𝐢𝐧𝐠
│➼🛟𝐰𝐩𝐚𝐞𝐬𝐭𝐡𝐞𝐭𝐢𝐜
│➼🛟𝐰𝐩𝐚𝐞𝐬𝐭𝐡𝐞𝐭𝐢𝐜𝟐
│➼🛟𝐰𝐩𝐫𝐚𝐧𝐝𝐨𝐦
│➼🛟𝐰𝐚𝐥𝐥𝐡𝐩
│➼🛟𝐰𝐩𝐯𝐞𝐡𝐢𝐜𝐮𝐥𝐨
│➼🛟𝐰𝐩𝐦𝐨𝐭𝐨
│➼🛟𝐜𝐨𝐟𝐟𝐞𝐞
│➼🛟𝐩𝐞𝐧𝐭𝐨𝐥
│➼🛟𝐜𝐚𝐫𝐢𝐜𝐚𝐭𝐮𝐫𝐚
│➼🛟𝐜𝐢𝐛𝐞𝐫𝐞𝐬𝐩𝐚𝐜𝐢𝐨
│➼🛟𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲
│➼🛟𝐝𝐨𝐫𝐚𝐞𝐦𝐨𝐧
│➼🛟𝐡𝐚𝐜𝐤𝐞𝐫
│➼🛟𝐩𝐥𝐚𝐧𝐞𝐭𝐚
│➼🛟𝐫𝐚𝐧𝐝𝐨𝐦𝐩𝐫𝐨𝐟𝐢𝐥𝐞
╰──────────────────╯

╭──────────────────╮
│⏤͟͟͞͞𝑪𝑶𝑴 +𝟏𝟖
├──────────────────╯
│➼🔞𝐋𝐚𝐛𝐢𝐛𝐥𝐢𝐚
╰──────────────────╯

╭──────────────────╮
│⏤͟͟͞͞𝑬𝑭𝑬𝑪𝑻-𝑨𝑼𝑫𝑰𝑶
├──────────────────╯
│➼🔊𝐛𝐚𝐬𝐬
│➼🔊𝐛𝐥𝐨𝐰𝐧
│➼🔊𝐝𝐞𝐞𝐩
│➼🔊𝐞𝐚𝐫𝐫𝐚𝐩𝐞
│➼🔊𝐟𝐚𝐬𝐭
│➼🔊𝐟𝐚𝐭
│➼🔊𝐧𝐢𝐠𝐡𝐭𝐜𝐨𝐫𝐞
│➼🔊𝐫𝐞𝐯𝐞𝐫𝐬𝐞
│➼🔊𝐫𝐨𝐛𝐨𝐭
│➼🔊𝐬𝐥𝐨𝐰
│➼🔊𝐬𝐦𝐨𝐨𝐭𝐡
│➼🔊𝐭𝐮𝐩𝐚𝐢
╰──────────────────╯

╭──────────────────╮
│⏤͟͟͞͞𝑪𝑯𝑨𝑻 𝑨𝑵𝑶𝑵𝑰𝑴𝑶
├──────────────────╯
│➼👤𝐒𝐭𝐚𝐫𝐭
│➼👤𝐍𝐞𝐱𝐭
│➼👤𝐋𝐞𝐚𝐯𝐞
╰──────────────────╯

╭──────────────────╮
│⏤͟͟͞͞𝑨𝑼𝑫𝑰𝑶𝑺
├──────────────────╯
│➼📓𝐌𝐞𝐧𝐮𝐚𝐮𝐝𝐢𝐨𝐬
╰──────────────────╯

╭──────────────────╮
│⏤͟͟͞𝑯𝑬𝑹𝑹𝑨𝑴𝑰𝑬𝑵𝑻𝑨𝑺
├──────────────────╯
│➼💫𝐂𝐡𝐚𝐭𝐠𝐩𝐭 𝚝𝚎𝚡𝚝𝚘
│➼💫𝐝𝐞𝐥𝐜𝐡𝐚𝐭𝐠𝐩𝐭
│➼💫𝐠𝐩𝐭𝐯𝐨𝐳 𝚝𝚎𝚡𝚝𝚘
│➼💫𝐝𝐚𝐥𝐥-𝐞 𝚝𝚎𝚡𝚝𝚘
│➼💫𝐬𝐩𝐚𝐦𝐰𝐚 𝚗𝚞𝚖𝚎𝚛𝚘 𝚝𝚎𝚡𝚝𝚘 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍
│➼💫𝐭𝐚𝐦𝐚𝐧̃𝐨 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍 𝚒𝚖𝚊𝚐𝚎𝚗 𝚟𝚒𝚍𝚎𝚘
│➼💫𝐫𝐞𝐚𝐝𝐯𝐢𝐞𝐰𝐨𝐧𝐜𝐞 𝚒𝚖𝚊𝚐𝚎𝚗  𝚟𝚒𝚍𝚎𝚘
│➼💫𝐜𝐥𝐢𝐦𝐚 𝚙𝚊𝚒́𝚜 𝚌𝚒𝚞𝚍𝚊𝚍
│➼💫𝐞𝐧𝐜𝐮𝐞𝐬𝐭𝐚 𝚝𝚎𝚡𝚝𝚘𝟷 𝚝𝚎𝚡𝚝𝚘𝟸
│➼💫𝐚𝐟𝐤 𝚖𝚘𝚝𝚒𝚟𝚘
│➼💫𝐨𝐜𝐫 𝚛𝚎𝚜𝚙𝚘𝚗𝚍𝚎 𝚊 𝚒𝚖𝚊𝚐𝚎𝚗
│➼💫𝐡𝐝 𝚛𝚎𝚜𝚙𝚘𝚗𝚍𝚎 𝚊 𝚒𝚖𝚊𝚐𝚎𝚗
│➼💫𝐚𝐜𝐨𝐫𝐭𝐚𝐫 𝚎𝚗𝚕𝚊𝚌𝚎  𝚕𝚒𝚗𝚔  𝚞𝚛𝚕
│➼💫𝐜𝐚𝐥𝐜 𝚘𝚙𝚎𝚛𝚊𝚌𝚒𝚘𝚗 𝚖𝚊𝚝𝚑
│➼💫𝐝𝐞𝐥 𝚖𝚎𝚗𝚜𝚊𝚓𝚎
│➼💫𝐰𝐡𝐚𝐭𝐦𝐮𝐬𝐢𝐜 𝚊𝚞𝚍𝚒𝚘
│➼💫𝐫𝐞𝐚𝐝𝐪𝐫 𝚒𝚖𝚊𝚐𝚎𝚗 𝚀𝚁
│➼💫𝐪𝐫𝐜𝐨𝐝𝐞 𝚝𝚎𝚡𝚝𝚘
│➼💫𝐫𝐞𝐚𝐝𝐦𝐨𝐫𝐞 𝚃𝚎𝚡𝚝𝚘𝟷 𝚝𝚎𝚡𝚝𝚘𝟸
│➼💫𝐬𝐭𝐲𝐥𝐞𝐭𝐞𝐱𝐭 𝚝𝚎𝚡𝚝𝚘
│➼💫𝐭𝐫𝐚𝐝𝐮𝐜𝐢𝐫 𝚝𝚎𝚡𝚝𝚘
│➼💫𝐧𝐨𝐰𝐚 𝚗𝚞𝚖𝚎𝚛𝚘
│➼💫𝐜𝐨𝐯𝐢𝐝 𝚙𝚊𝚒́𝚜
│➼💫𝐡𝐨𝐫𝐚𝐫𝐢𝐨
│➼💫𝐝𝐝𝐫𝐨𝐩𝐦𝐚𝐢𝐥
╰──────────────────╯

╭──────────────────╮
│⏤͟͟͞͞𝑳𝑰𝑴𝙄𝙏𝑬𝑺-𝑬𝑪𝑶𝑵𝑶𝑴𝑰𝑪𝑨
├──────────────────╯
│➼🫧𝐚𝐝𝐯𝐞𝐧𝐭𝐮𝐞𝐞
│➼🫧𝐜𝐚𝐳𝐚𝐫
│➼🫧𝐜𝐨𝐟𝐫𝐞
│➼🫧𝐛𝐚𝐥𝐚𝐧𝐜𝐞
│➼🫧𝐜𝐥𝐚𝐢𝐦
│➼🫧𝐡𝐞𝐚𝐥
│➼🫧𝐥𝐛
│➼🫧𝐥𝐞𝐯𝐞𝐥𝐮𝐩
│➼🫧𝐦𝐲𝐧𝐬
│➼🫧𝐩𝐞𝐫𝐟𝐢𝐥
│➼🫧𝐰𝐨𝐫𝐤
│➼🫧𝐦𝐢𝐧𝐚𝐫
│➼🫧𝐦𝐢𝐧𝐚𝐫𝟐
│➼🫧𝐛𝐮𝐲
│➼🫧𝐛𝐮𝐲𝐚𝐥𝐥
│➼🫧𝐯𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐫
│➼🫧𝐫𝐨𝐛𝐚𝐫 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍 @𝚝𝚊𝚐
│➼🫧𝐭𝐫𝐚𝐧𝐬𝐟𝐞𝐫 𝚝𝚒𝚙𝚘 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍 @𝚝𝚊𝚐
│➼🫧𝐮𝐧𝐫𝐞𝐠 𝚗𝚞𝚖𝚎𝚛𝚘 𝚍𝚎 𝚜𝚎𝚛𝚒𝚎
╰──────────────────╯

╭──────────────────╮
│⏤͟͟͞͞𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎
├──────────────────╯
│➼🍭𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝚛𝚎𝚜𝚙𝚘𝚗𝚍𝚎𝚛 𝚊 𝚒𝚖𝚐 𝚘 𝚟𝚍𝚘
│➼🍭𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝚎𝚗𝚕𝚊𝚌𝚎/𝚕𝚒𝚗𝚔/𝚞𝚛𝚕
│➼🍭𝐬𝐭𝐢𝐜𝐤𝐞𝐫𝟐 𝚛𝚎𝚜𝚙𝚘𝚗𝚍𝚎𝚛 𝚊 𝚒𝚖𝚊𝚐𝚎𝚗 𝚟𝚒𝚍𝚎𝚘 
│➼🍭𝐬𝐭𝐢𝐜𝐤𝐞𝐫𝟐 𝚎𝚗𝚕𝚊𝚌𝚎/𝚕𝚒𝚗𝚔/𝚞𝚛𝚕
│➼🍭𝐬 𝚛𝚎𝚜𝚙𝚘𝚗𝚍𝚎𝚛 𝚊 𝚒𝚖𝚊𝚐𝚎𝚗 𝚘 𝚟𝚒𝚍𝚎𝚘
│➼🍭𝐬 𝚎𝚗𝚕𝚊𝚌𝚎/𝚕𝚒𝚗𝚔/𝚞𝚛𝚕
│➼🍭𝐬𝟐 𝚛𝚎𝚜𝚙𝚘𝚗𝚍𝚎𝚛 𝚊 𝚒𝚖𝚊𝚐𝚎𝚗 𝚘 𝚟𝚒𝚍𝚎𝚘
│➼🍭𝐬𝟐 𝚎𝚗𝚕𝚊𝚌𝚎/𝚕𝚒𝚗𝚔/𝚞𝚛𝚕
│➼🍭𝐞𝐦𝐨𝐣𝐢𝐦𝐢𝐱 𝚎𝚖𝚘𝚓𝚒𝟷 𝚎𝚖𝚘𝚓𝚒𝟸
│➼🍭𝐬𝐜𝐢𝐫𝐜𝐥𝐞 𝚒𝚖𝚊𝚐𝚎𝚗
│➼🍭𝐬𝐫𝐞𝐦𝐨𝐯𝐞𝐛𝐪 𝚒𝚖𝚊𝚐𝚎𝚗
│➼🍭𝐬𝐞𝐦𝐨𝐣𝐢 𝚝𝚒𝚙𝚘 𝚎𝚖𝚘𝚓𝚒
│➼🍭𝐪𝐜 𝚝𝚎𝚡𝚝𝚘
│➼🍭𝐚𝐭𝐭𝐩 𝚝𝚎𝚡𝚝𝚘
│➼🍭𝐚𝐭𝐭𝐩𝟐 𝚝𝚎𝚡𝚝𝚘
│➼🍭𝐚𝐭𝐭𝐩𝟑 𝚝𝚎𝚡𝚝𝚘
│➼🍭𝐭𝐭𝐩 𝚝𝚎𝚡𝚝𝚘
│➼🍭𝐭𝐭𝐩𝟐 𝚝𝚎𝚡𝚝𝚘
│➼🍭𝐭𝐭𝐩𝟑 𝚝𝚎𝚡𝚝𝚘
│➼🍭𝐭𝐭𝐩𝟒 𝚝𝚎𝚡𝚝𝚘
│➼🍭𝐭𝐭𝐩𝟓 𝚝𝚎𝚡𝚝𝚘
│➼🍭𝐩𝐚𝐭 @𝚝𝚊𝚐
│➼🍭𝐬𝐥𝐚𝐩 @𝚝𝚊𝚐
│➼🍭𝐤𝐢𝐬𝐬 @𝚝𝚊𝚐
│➼🍭𝐝𝐚𝐝𝐨
│➼🍭𝐰𝐦 𝚙𝚊𝚌𝚔𝚗𝚊𝚖𝚎 𝚊𝚞𝚝𝚑𝚘𝚛
│➼🍭𝐬𝐭𝐢𝐜𝐤𝐞𝐫𝐦𝐚𝐫𝐤𝐞𝐫 𝚎𝚏𝚎𝚌𝚝𝚘 <𝚒𝚖𝚊𝚐𝚗
│➼🍭𝐬𝐭𝐢𝐜𝐤𝐞𝐫𝐟𝐢𝐥𝐭𝐞𝐫 𝚎𝚏𝚎𝚌𝚝𝚘 𝚒𝚖𝚊𝚐𝚎𝚗
│➼🍭𝐜𝐚𝐫𝐭𝐨𝐨𝐧 𝚛𝚎𝚜𝚙𝚘𝚗𝚍𝚎𝚛 𝚊 𝚒𝚖𝚊𝚐𝚎𝚗
╰──────────────────╯`.trim();
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
    conn.reply(m.chat, '🧸 𝗠𝗲𝗻𝘂 𝗲𝗻𝘃𝗶𝗮𝗱𝗼 𝗰𝗼𝗿𝗿𝗲𝗰𝘁𝗮𝗺𝗲𝗻𝘁𝗲, 𝘀𝗶 𝗻𝗼 𝘀𝗲 𝗲𝗻𝘃𝗶𝗼 𝗿𝗲𝗽𝗼𝗿𝘁𝗲𝗹𝗼 𝗰𝙤𝙣 𝙚𝙡 𝗰𝙧𝙚𝙖𝙙𝙤𝙧', m);
  }
};
handler.command = /^(menu|menú|menuu|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}