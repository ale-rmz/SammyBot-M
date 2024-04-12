const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `𝒎𝒆𝒏𝒔𝒂𝒋𝒆𝒔: ${pesan}`;
  let teks = `*⺀𝗥 𝖾 𝗏 𝗂 𝗏 𝖺 𝗇 - 𝗔 𝗆 𝗂 𝗀 𝗎 𝗂 𝗍 𝗈 𝗌⺀*\n\n❏ ${oi}\n\n❏ 𝗠𝗲𝗻𝗰𝗶𝗼𝗻𝗲𝘀:\n`;
  for (const mem of participants) {
    teks += `│•🧸 @${mem.id.split('@')[0]}\n`;
  }
  teks += `╰━🩷𝙎𝙖𝙢𝙢𝙮𝘽𝙤𝙩-𝙈𝘿»\n\n`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;