import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
let user = global.db.data.users[m.sender]
let name2 = conn.getName(m.sender)
if (user.registered === true) throw `[🧸] 𝙔𝘼 𝙀𝙎𝙏𝘼𝙎 𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝘼𝘿𝙊.\n\n[🌷] ¿𝙌𝙐𝙄𝙀𝙍𝙀𝙎 𝙑𝙊𝙇𝙑𝙀𝙍 𝘼 𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝘼𝙍𝙏𝙀?\n\n[🌱] 𝙐𝙏𝙄𝙇𝙄𝙕𝘼 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝙋𝘼𝙍𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍 𝙏𝙐 𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝙊 .unreg <sn>`
if (!Reg.test(text)) throw `[❗] 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝙄𝙉𝙂𝙍𝙀𝙎𝘼𝘿𝙊 𝙀𝙎 𝙄𝙉𝘾𝙊𝙍𝙍𝙀𝘾𝙏𝙊.\n[🍃] 𝙎𝙐 𝙐𝙎𝙊 𝘾𝙊𝙍𝙍𝙀𝘾𝙏𝙊 𝙀𝙎:\n\n.reg *Nombre.edad*\n\n𝙴𝙹𝙴𝙼𝙿𝙻𝙾:\n.reg Sammy.18`
let [_, name, splitter, age] = text.match(Reg)
if (!name) throw '[❗] 𝙽𝚘 𝙿𝚞𝚎𝚍𝚎𝚜 𝚁𝚎𝚐𝚒𝚜𝚝𝚛𝚊𝚛𝚝𝚎 𝚂𝚒𝚗 𝙴𝚕 𝙽𝚘𝚖𝚋𝚛𝚎, 𝙴𝚜 𝙾𝚋𝚕𝚒𝚐𝚊𝚝𝚘𝚛𝚒𝚘. 𝙸𝚗𝚝𝚎𝚗𝚝𝚎́𝚕𝚘 𝙳𝚎 𝙽𝚞𝚎𝚟𝚘 𝙸𝚗𝚐𝚛𝚎𝚜𝚊𝚗𝚍𝚘 𝚂𝚞 𝙽𝚘𝚖𝚋𝚛𝚎 𝚎 𝙴𝚍𝚊𝚍.'
if (!age) throw '[❗] 𝙽𝚘 𝙿𝚞𝚎𝚍𝚎𝚜 𝚁𝚎𝚐𝚒𝚜𝚝𝚛𝚊𝚛𝚝𝚎 𝚂𝚒𝚗 𝙻𝚊 𝙴𝚍𝚊𝚍. 𝙸𝚗𝚝𝚎𝚗𝚝𝚊𝚕𝚘 𝙳𝚎 𝙽𝚞𝚎𝚟𝚘 𝙸𝚗𝚐𝚛𝚎𝚜𝚊𝚗𝚍𝚘 𝚂𝚞 𝙽𝚘𝚖𝚋𝚛𝚎 𝚎 𝙴𝚍𝚊𝚍.'
if (name.length >= 30) throw '[❗] 𝙴𝚕 𝙽𝚘𝚖𝚋𝚛𝚎 𝙽𝚘 𝙳𝚎𝚋𝚎 𝙳𝚎 𝚃𝚎𝚗𝚎𝚛 𝙼𝚊́𝚜 𝙳𝚎 30 𝙲𝚊𝚛𝚊𝚌𝚝𝚎𝚛𝚎𝚜.' 
age = parseInt(age)
if (age > 999) throw '[👄] 𝘘𝘶𝘦 𝘳𝘪𝘤𝘰 𝘷𝘪𝘦𝘫𝘪𝘵𝘰.'
if (age < 5) throw '[🍼] ¿𝘊𝘰𝘮𝘰 𝘚𝘢𝘣𝘦𝘴 𝘜𝘴𝘢𝘳 𝘜𝘯 𝘊𝘦𝘭𝘶𝘭𝘢𝘳?'
user.name = name.trim()
user.age = age
user.regTime = + new Date
user.registered = true
global.db.data.users[m.sender].money += 600
global.db.data.users[m.sender].estrellas += 10
global.db.data.users[m.sender].exp += 245
global.db.data.users[m.sender].joincount += 5
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)        
m.react('📩') 
let regbot = `👤 𝗥 𝗘 𝗚 𝗜 𝗦 𝗧 𝗥 𝗢 👤
•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
「💭」𝗡𝗼𝗺𝗯𝗿𝗲: ${name}
「✨️」𝗘𝗱𝗮𝗱: ${age} años
•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
「🎁」𝗥𝗲𝗰𝗼𝗺𝗽𝗲𝗻𝘀𝗮𝘀:
• 15 Estrellas 🌟
• 5 SammyCoins 🪙
• 245 Experiencia 💸
• 12 Tokens 💰
•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
${packname}`
await conn.sendMini(m.chat, '⊱『✅𝆺𝅥 𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗔𝗗𝗢(𝗔) 𝆹𝅥✅』⊰', textbot, regbot, imagen1, imagen1, channel, m)
//await m.reply(`${sn}`)        
}
handler.help = ['reg']
handler.tags = ['rg']
handler.command = ['verify', 'verificar', 'reg', 'register', 'registrar'] 

export default handler