let handler = async (m, {conn, text}) => {
  let name = await conn.getName(m.sender);

conn.reply(m.chat, `*[ 😾 ️] 𝗡𝗢 𝗘𝗧𝗜𝗤𝗨𝗘𝗧𝗘𝗦 𝗔 𝗠𝗜 𝗖𝗥𝗘𝗔𝗗𝗢𝗥,𝘀𝗶 𝗲𝘀 𝗮𝗹𝗴𝗼 𝘂𝗿𝗴𝗲𝗻𝘁𝗲 𝗰𝗼𝗻𝘁𝗮𝗰𝘁𝗮 𝗰𝗼𝗻 𝗲𝗹 𝗮 𝘀𝘂 𝗰𝗵𝗮𝘁 𝗽𝗿𝗶𝘃𝗮𝗱𝗼 𝗽𝗮𝗿𝗮 𝗺𝗮́𝘀 𝗶𝗻𝗳𝗼𝗿𝗺𝗮𝗰𝗶𝗼́𝗻*` ,m, { contextInfo:{ externalAdReply: {title: '𝙎𝙖𝙢𝙢𝙮𝘽𝙤𝙩-𝙈𝘿', body: 𝘌𝘴𝘤𝘳𝘪𝘣𝘦𝘭𝘦 𝘵𝘰𝘤𝘢𝘯𝘥𝘰 𝘢𝘲𝘶𝘪 🩷', sourceUrl: 'https://wa.me/543585753625'}}})
}
handler.customPrefix = /@50558124470/i;
handler.command = new RegExp();

export default handler;

//conn.reply(m.chat, `hhh`, m, { contextInfo:{ externalAdReply: {title: 'titulo', body: 'cuero', sourceUrl: global.md}}})
