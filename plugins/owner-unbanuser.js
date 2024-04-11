const handler = async (m, {conn, text}) => {
  if (!text) throw '[⛔] 𝐎𝐰𝐧𝐞𝐫, 𝐞𝐭𝐢𝐪𝐮𝐞𝐭𝐞 𝐚𝐥 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐩𝐚𝐫𝐚 𝐝𝐞𝐬𝐛𝐚𝐧𝐞𝐚𝐫.';
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '[⛔] 𝐎𝐰𝐧𝐞𝐫, 𝐞𝐭𝐢𝐪𝐮𝐞𝐭𝐞 𝐚𝐥 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐩𝐚𝐫𝐚 𝐝𝐞𝐬𝐛𝐚𝐧𝐞𝐚𝐫.';
  const users = global.db.data.users;
  users[who].banned = false;
  conn.reply(m.chat, `[💖] 𝗣𝗲𝗿𝗳𝗲𝗰𝘁𝗼,𝗲𝗹 𝘂𝘀𝘂𝗮𝗿𝗶𝗼 𝘆𝗮 𝗳𝘂𝗲 𝗱𝗲𝘀𝗯𝗮𝗻𝗲𝗮𝗱𝗼 𝗰𝗼𝗻 𝗲𝘅𝗶𝘁𝗼. 𝗬𝗮 𝗽𝘂𝗲𝗱𝗲 𝘂𝘀𝗮𝗿 𝗦𝗮𝗺𝗺𝘆𝗕𝗼𝘁-𝗠𝗗🫀.`, m);
};
handler.help = ['unbanuser'];
handler.tags = ['owner'];
handler.command = /^desprohibiruser$/i;
handler.rowner = true;
export default handler;
