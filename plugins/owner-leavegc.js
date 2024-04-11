const handler = async (m, {conn, text, command}) => {
  const id = text ? text : m.chat;
  await conn.reply(id, '🫀𝗦𝗮𝗺𝗺𝘆𝗕𝗼𝘁 𝘀𝗲 𝗱𝗲𝘀𝗽𝗶𝗱𝗲,𝗳𝘂𝗲 𝘂𝗻 𝗴𝘂𝘀𝘁𝗼 𝗰𝗼𝗺𝗽𝗮𝗿𝘁𝗶𝗿 𝗰𝗼𝗻 𝘂𝘀𝘁𝗲𝗱𝗲𝘀,𝗜 𝗹𝗼𝘃𝗲 𝘁𝗵𝗲𝗺 🫶👋');
  await conn.groupLeave(id);
};
handler.command = /^(salir|abandonar|autokick|grupoban)$/i;
handler.group = true;
handler.rowner = true;
export default handler;
