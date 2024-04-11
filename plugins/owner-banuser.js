const handler = async (m, {conn, participants, usedPrefix, command}) => {
  const BANtext = `[⛔] 𝙊𝙬𝙣𝙚𝙧,𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙤 𝙚𝙩𝙞𝙦𝙪𝙚𝙩𝙚 𝙚𝙡 𝙪𝙨𝙖𝙧𝙞𝙤 𝙖 𝙗𝙖𝙣𝙚𝙖𝙧 \n\n—◉ 𝙀𝙟𝙚𝙢𝙥𝙡𝙤:\n*${usedPrefix + command} @${global.suittag}*`;
  if (!m.mentionedJid[0] && !m.quoted) return m.reply(BANtext, m.chat, {mentions: conn.parseMention(BANtext)});
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
  else who = m.chat;
  const users = global.db.data.users;
  users[who].banned = true;
  m.reply('[🫀]𝙋𝙚𝙧𝙛𝙚𝙘𝙩𝙤,𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙗𝙖𝙣𝙚𝙖𝙙𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤,𝙚𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙣𝙤 𝙥𝙤𝙙𝙧𝙖 𝙪𝙨𝙖𝙧 𝙎𝙖𝙢𝙢𝙮𝘽𝙤𝙩-𝙈𝘿🧸');
};
handler.command = /^prohibiruser$/i;
handler.rowner = true;
export default handler;
