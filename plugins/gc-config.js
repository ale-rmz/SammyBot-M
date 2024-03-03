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
  {m.reply('╭───────────────────╮
│➼🧸𝑶𝒓𝒅𝒆𝒏 𝑹𝒆𝒄𝒊𝒃𝒊𝒅𝒂 𝒆𝒏 𝒆𝒍 𝒈𝒓𝒖𝒑𝒐
│➼🧸𝑫𝒚𝒍𝒂𝒏 𝑩𝒐𝒕
╰───────────────────╯');}
};
handler.help = ['group open / close', 'grupo abrir / cerrar'];
handler.tags = ['group'];
handler.command = /^(group|grupo)$/i;
handler.admin = true;
handler.botAdmin = true;
export default handler;
