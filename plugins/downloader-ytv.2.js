import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
import fetch from 'node-fetch';
const handler = async (m, {conn, args}) => {
  if (!args[0]) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝚂𝙴𝚁𝚃𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙼𝙰𝚂 𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 / 𝙻𝙸𝙽𝙺 𝙳𝙴 𝚄𝙽 𝚅𝙸𝙳𝙴𝙾 𝙳𝙴 𝚈𝙾𝚄𝚃𝚄𝙱𝙴*';
  await m.reply(`*_⏳*𝖲𝖾 𝖾𝗌𝗍𝖺 𝗉𝗋𝗈𝖼𝖾𝗌𝖺𝗇𝖽𝗈 𝗌𝗎 𝗏𝗂𝖽𝖾𝗈...⏳_*\𝗇\𝗇 𝖲𝗂 𝗌𝗎 𝗏𝗂𝖽𝖾𝗈 𝗇𝗈 𝖾𝗌 𝖾𝗇𝗏𝗂𝖺𝖽𝗈, 𝗉𝗋𝗎𝖾𝖻𝖾 𝖼𝗈𝗇 𝗅𝗈𝗌 𝖼𝗈𝗆𝖺𝗇𝖽𝗈𝗌 #playdoc , #play.2 , #ytmp4doc.`);
  try {
    const qu = args[1] || '360';
    const q = qu + 'p';
    const v = args[0];
    const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
    const dl_url = await yt.video[q].download();
    const ttl = await yt.title;
    const size = await yt.video[q].fileSizeH;
    const cap = `*◉—⌈📥 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗗𝗟 📥⌋—◉*\n❏ *𝖳𝖨𝖳𝖴𝖫𝖮:* ${ttl}\n❏ *𝖯𝖤𝖲𝖮:* ${size}`.trim();
    await await conn.sendMessage(m.chat, {document: {url: dl_url}, caption: cap, mimetype: 'video/mp4', fileName: ttl + `.mp4`}, {quoted: m});
  } catch {
    try {
      const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${args[0]}`);
      const lolh = await lolhuman.json();
      const n = lolh.result.title || 'error';
      const n2 = lolh.result.link;
      const n3 = lolh.result.size;
      const cap2 = `*◉—⌈📥 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗗𝗟 📥⌋—◉*\n❏ *𝖳𝖨𝖳𝖴𝖫𝖮:* ${n}\n❏ *𝖯𝖤𝖲𝖮:* ${n3}`.trim();
      await conn.sendMessage(m.chat, {document: {url: n2}, caption: cap2, mimetype: 'video/mp4', fileName: n + `.mp4`}, {quoted: m});
    } catch {
      await conn.reply(m.chat, '*[❗] 𝙴𝚁𝚁𝙾𝚁 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙴𝙻 𝚅𝙸𝙳𝙴𝙾*', m);
    }
  }
};
handler.command = /^ytmp4doc|ytvdoc|ytmp4.2|ytv.2$/i;
export default handler;
