const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `𝘏𝘰𝘭𝘢 𝘶𝘴𝘶𝘢𝘳𝘪𝘰🫶, 𝘌𝘴𝘵𝘢𝘴 𝘪𝘯𝘷𝘪𝘵𝘢𝘥𝘰 𝘢 𝘶𝘯𝘪𝘳𝘵𝘦 𝘢 𝘭𝘰𝘴 𝘨𝘳𝘶𝘱𝘰𝘴 𝘰𝘧𝘤 𝘥𝘦 𝘚𝘢𝘮𝘮𝘺𝘉𝘰𝘵-𝘔𝘋 🫀

➤ 𝙶𝚛𝚞𝚙𝚘𝚜 𝚘𝚏𝚒𝚌𝚒𝚊𝚕𝚎𝚜 𝚍𝚎 𝚂𝚊𝚖𝚖𝚢:

🦋 𝐆𝐑𝐔𝐏𝐎 𝐎𝐅𝐂:
 
༄ https://chat.whatsapp.com/Gq4sgn9JH7kJmu7vGx5485 ༆

🦋 𝗖𝗮𝗻𝗮𝗹 𝗗𝗲 𝗔𝗹𝗲:
༄ https://whatsapp.com/channel/0029Vab0Bez3QxS6HnWr3Z3t ༄
`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/Karim-off/DylanBot1`},
    'mimetype': `application/${document}`,
    'fileName': `「 𝗛𝗲𝗹𝗹𝗼 𝘄𝗼𝗿𝗹 」`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': global.md,
        'mediaType': 2,
        'previewType': 'pdf',
        'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'global.md'}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['linkgc', 'grupos'];
export default handler;
