import {createHash} from 'crypto';
const Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
const handler = async function(m, {conn, text, usedPrefix, command}) {
  const user = global.db.data.users[m.sender];
  const name2 = conn.getName(m.sender);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => global.imagen1);
  if (user.registered === true) throw `[✔️] 𝐘𝐚 𝐞𝐬𝐭𝐚𝐬 𝐯𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐝𝐨\n\n¿𝐐𝐮𝐢𝐞𝐫𝐞𝐬 𝐯𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐫𝐭𝐞 𝐝𝐞 𝐧𝐮𝐞𝐯𝐨?\n\n 📓𝐔𝐬𝐚 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐩𝐚𝐫𝐚 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐫 𝐭𝐮 𝐯𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐜𝐢𝐨𝐧 \n${usedPrefix}𝐮𝐧𝐫𝐞𝐠 <Número de serie>`;
  if (!Reg.test(text)) throw `[❕] 𝐮𝐬𝐨 𝐢𝐧𝐜𝐨𝐫𝐫𝐞𝐜𝐭𝐨\n\n—◉ 𝐮𝐬𝐨 𝐝𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨: ${usedPrefix + command} *nombre.edad*\n*—◉ Ejemplo: ${usedPrefix + command} 🧸Dylan.18*`;
  let [_, name, splitter, age] = text.match(Reg);
  if (!name) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙳𝙴𝙱𝙴𝚂 𝙿𝙾𝙽𝙴𝚁 𝚄𝙽 𝙽𝙾𝙼𝙱𝚁𝙴*';
  if (!age) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙰 𝙴𝙳𝙰𝙳 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴 𝙴𝚂𝚃𝙰𝚁 𝚅𝙰𝙲𝙸𝙰*';
  if (name.length >= 30) throw '[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙴𝚂 𝙳𝙴𝙼𝙰𝚂𝙸𝙰𝙳𝙾 𝙻𝙰𝚁𝙶𝙾';
  age = parseInt(age);
  if (age > 100) throw '[⁉️] ¿𝗦𝗶𝗴𝘂𝗲𝘀 𝘃𝗶𝘃𝗼 𝗮𝘂𝗻 𝗮 𝘁𝘂 𝗲𝗱𝗮𝗱?';
  if (age < 5) throw '[⁉️] ¿𝗨𝗻 𝗯𝗲𝗯𝗲 𝗾𝘂𝗲 𝘂𝘀𝗮 𝘄𝗵𝗮𝘁𝘀𝗮𝗽𝗽? ';
  user.name = name.trim();
  user.age = age;
  user.regTime = + new Date;
  user.registered = true;
  const sn = createHash('md5').update(m.sender).digest('hex');
  const caption = `┌────────────────────┐
│「 ⛈️𝐕𝐄𝐑𝐈𝐅𝐈𝐂𝐀𝐂𝐈𝐎𝐍⛈️ 」
├───────────────────
├⛈️𝐍𝐨𝐦𝐛𝐫𝐞: ${name}
├⛈️𝐄𝐝𝐚𝐝: ${age} años
├⛈️𝐅𝐞𝐜𝐡𝐚: ${date}
├⛈️𝐂𝐨𝐝𝐢𝐠𝐨 𝐝𝐞 𝐑𝐞𝐠:
│${sn}
├───────────────────
├🧸𝐘𝐚 𝐞𝐬𝐭𝐚𝐬 𝐯𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐝𝐨 𝐞𝐧
├🧸𝐃𝐲𝐥𝐚𝐧-𝐁𝐨𝐭-𝐌𝐃
│    
├📝☆𝑫𝒂𝒕𝒐𝒔☆:...
│
├👨‍💻𝚃𝚄 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴 
│𝚂𝙴𝚁𝚅𝙸𝚁𝙰 𝙿𝙾𝚁 𝚂𝙸 𝙳𝙴𝚂𝙴𝙰𝚂 
│𝙱𝙾𝚁𝚁𝙰𝚁 𝚃𝚄 𝚅𝙴𝚁𝙸𝙵𝙸𝙲𝙰𝙲𝙸𝙾́𝙽 
│𝙳𝙴𝙻 𝙱𝙾𝚃!
└────────────────────┘`;
  // let author = global.author
  await conn.sendFile(m.chat, pp, 'mystic.jpg', caption);
  // conn.sendButton(m.chat, caption, `¡𝚃𝚄 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴 𝚃𝙴 𝚂𝙴𝚁𝚅𝙸𝚁𝙰 𝙿𝙾𝚁 𝚂𝙸 𝙳𝙴𝚂𝙴𝙰𝚂 𝙱𝙾𝚁𝚁𝙰𝚁 𝚃𝚄 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝙴𝙽 𝙴𝙻 𝙱𝙾𝚃!\n${author}`, [['¡¡𝙰𝙷𝙾𝚁𝙰 𝚂𝙾𝚈 𝚄𝙽 𝚅𝙴𝚁𝙸𝙵𝙸𝙲𝙰𝙳𝙾/𝙰!!', '/profile']], m)
  global.db.data.users[m.sender].money += 10000;
  global.db.data.users[m.sender].exp += 10000;
};
handler.help = ['verificar'];
handler.tags = ['xp'];
handler.command = /^(verify|register|verificar|reg|registrar)$/i;
export default handler;
