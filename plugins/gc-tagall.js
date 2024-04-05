const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `𝒎𝒆𝒏𝒔𝒂𝒋𝒆𝒔: ${pesan}`;
  let teks = `*⺀𝚁 𝙴 𝚅 𝙸 𝚅 𝙰 𝙽 - 𝙿 𝙻 𝙰 𝙽 𝚃 𝙰 𝚂⺀*\n\n❏ ${oi}\n\n❏ 𝒎𝒆𝒏𝒄𝒊𝒐𝒏𝒆𝒔:\n`;
  for (const mem of participants) {
    teks += `│⛈️ @${mem.id.split('@')[0]}\n`;
  }
  teks += `╰━⛈️𝑫𝒚𝒍𝒂𝒏𝑩𝒐𝒕-𝑴𝑫»\n\n`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;