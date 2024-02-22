import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {        
let vn = './media/menu.mp3'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
//let user = global.db.data.users[m.sender]
//user.registered = false
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
//let enlace = { contextInfo: { externalAdReply: {title: wm, body: 'support group' , sourceUrl: nna, thumbnail: await(await fetch(img)).buffer() }}}
  let pp = './Menu2.jpg'
//let pp = gataVidMenu.getRandom()
await conn.sendMessage(m.chat, {
        text: `*Hey* @${m.sender.split`@`[0]}
𝗘𝗻𝘃𝗶𝗮𝗻𝗱𝗼 𝗺𝗲𝗻𝘂 +𝟏𝟖🔞𝙀𝙨𝙥𝙚𝙧𝙚 𝙥𝙤𝙧𝙛𝙖𝙫𝙤𝙧. . . 😏

𝘿𝙮𝙡𝙖𝙣𝘽𝙤𝙩-𝙈𝘿.`,
        contextInfo: { 
          mentionedJid: [m.sender],
        }
      }, { quoted: m })

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let menu = `┌───────────────────┐
│╭───────────────
│├ *🧸𝗛𝗼𝗹𝗮⚡, @user ⚡*
│├ *🧸𝘾𝙧𝙚𝙖𝙙𝙤𝙧:𝙺𝙰𝚁𝙸𝙼*
│├ *🧸𝗡𝘂𝗺𝗲𝗿𝗼:+591 68683798*
│├ *🧸𝙁𝙚𝙘𝙝𝙖: ${date}*
│├ *🧸𝘼𝙘𝙩𝙞𝙫𝙤: ${uptime}*
│├ *🧸𝙍𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙨: ${rtotalreg}*
│├ *🧸𝙃𝙚𝙧𝙢𝙤𝙨𝙤 𝗱𝗶𝗮 𝗽𝗮𝗿𝗮 𝘁𝗶*
│╰───────────────
└───────────────────┘

╭──────────────────╮
│⏤͟͟͞𝐌𝐄𝐍𝐔 +𝟏𝟖
├──────────────────╯
│➼🔞 𝐩𝐚𝐜𝐤
│➼🔞 𝐩𝐚𝐜𝐤𝟐
│➼🔞 𝐩𝐚𝐜𝐤𝟑
│➼🔞 𝐯𝐢𝐝𝐞𝐨𝐱𝐱𝐱
│➼🔞 𝐯𝐢𝐝𝐞𝐨𝐥𝐞𝐬𝐛𝐢𝐱𝐱𝐱
│➼🔞 𝐭𝐞𝐭𝐚𝐬
│➼🔞 𝐛𝐨𝐨𝐭𝐲
│➼🔞 𝐞𝐜𝐜𝐡𝐢
│➼🔞 𝐟𝐮𝐫𝐫𝐨
│➼🔞 𝐢𝐦𝐚𝐠𝐞𝐧𝐥𝐞𝐬𝐛𝐢𝐚𝐧𝐬
│➼🔞 𝐩𝐚𝐧𝐭𝐢𝐞𝐬
│➼🔞 𝐩𝐞𝐧𝐞
│➼🔞 𝐩𝐨𝐫𝐧𝐨
│➼🔞 𝐫𝐚𝐧𝐝𝐨𝐦𝐱𝐱𝐱
│➼🔞 𝐩𝐞𝐜𝐡𝐨𝐬
│➼🔞 𝐲𝐚𝐨𝐢
│➼🔞 𝐲𝐚𝐨𝐢𝟐
│➼🔞 𝐲𝐮𝐫𝐢
│➼🔞 𝐲𝐮𝐫𝐢𝟐
│➼🔞 𝐭𝐫𝐚𝐩𝐢𝐭𝐨
│➼🔞 𝐡𝐞𝐧𝐭𝐚𝐢
│➼🔞 𝐧𝐬𝐟𝐰𝐥𝐨𝐥𝐢
│➼🔞 𝐧𝐬𝐟𝐰𝐨𝐫𝐠𝐲
│➼🔞 𝐧𝐬𝐟𝐰𝐟𝐨𝐨𝐭
│➼🔞 𝐧𝐬𝐟𝐰𝐚𝐬𝐬
│➼🔞 𝐧𝐬𝐟𝐰𝐛𝐝𝐬𝐦
│➼🔞 𝐧𝐬𝐟𝐰𝐜𝐮𝐦
│➼🔞 𝐧𝐬𝐟𝐰𝐞𝐫𝐨
│➼🔞 𝐧𝐬𝐟𝐰𝐟𝐞𝐦𝐝𝐨𝐦
│➼🔞 𝐧𝐬𝐟𝐰𝐠𝐥𝐚𝐬𝐬
│➼🔞 𝐡𝐞𝐧𝐭𝐚𝐢𝐩𝐝𝐟 <𝚝𝚎𝚡𝚝𝚘>
│➼🔞 𝐡𝐞𝐧𝐭𝐚𝐢𝐬𝐞𝐚𝐫𝐜𝐡 <𝚝𝚎𝚡𝚝𝚘>
╰──────────────────╯`.trim()
//conn.sendFile(m.chat, pp, 'lp.jpg', menu, m, false, { contextInfo: { mentionedJid }})
let img = await (await fetch(`https://telegra.ph/file/3871edd05ec8f3989f61d.jpg`)).buffer()  
await conn.sendMessage(m.chat, {
text: menu,
contextInfo: { 
mentionedJid: [m.sender],
forwardingScore: 9, 
externalAdReply: {
title: '',
//body: '',
thumbnail: img,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
await m.react('✅')        
} catch (e) {
//await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)        
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(labiblia|menuhot|MenuHot|allm\?)$/i
//handler.register = true
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}