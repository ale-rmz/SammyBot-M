const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = false;
  m.reply('[💖]𝗖𝗵𝗮𝘁 𝗱𝗲𝘀𝗯𝗮𝗻𝗲𝗮𝗱𝗼 𝗰𝗼𝗻 𝗲𝘅𝗶𝘁𝗼 , 𝘆𝗮 𝗽𝘂𝗲𝗱𝗲𝗻 𝘂𝘀𝗮𝗿 𝗦𝗮𝗺𝗺𝘆𝗕𝗼𝘁-𝗠𝗗🩷');
};
handler.help = ['unbanchat'];
handler.tags = ['owner'];
handler.command = /^desprohibirchat$/i;
handler.rowner = true;
export default handler;
