const handler = async (m, {conn, args, usedPrefix, command}) => {
  const isClose = { // Switch Case Like :v
    'open': 'not_announcement',
    'close': 'announcement',
    'abierto': 'not_announcement',
    'cerrado': 'announcement',
    'abrir': 'not_announcement',
    'cerrar': 'announcement',
  }[(args[0] || '')];
  if (isClose === undefined) {
    throw `
[🚫] 𝗨𝘀𝗼 𝗶𝗻𝗰𝗼𝗿𝗿𝗲𝗰𝘁𝗼!!

*┏━━━❲ ❕𝗘𝗷𝗲𝗺𝗽𝗹𝗼❕ ❳━━━┓* 
*┠┉↯ ${usedPrefix + command} abrir*
*┠┉↯ ${usedPrefix + command} cerrar*
`.trim();
  }
  await conn.groupSettingUpdate(m.chat, isClose);
  {m.reply('┏━━━━━━━━━━━━━━━━━━━━┓
│•🧸 𝗢𝗿𝗱𝗲𝗻 𝗿𝗲𝗰𝗶𝗯𝗶𝗱𝗮 𝗲𝗻 𝗲𝗹 𝗴𝗿𝘂𝗽𝗼 
│•🧸𝖲𝖺𝗆𝗆𝗒𝖡𝗈𝗍-𝖬𝖣 🩷
┗━━━━━━━━━━━━━━━━━━━━┛');}
};
handler.help = ['group open / close', 'grupo abrir / cerrar'];
handler.tags = ['group'];
handler.command = /^(group|grupo)$/i;
handler.admin = true;
handler.botAdmin = true;
export default handler;
