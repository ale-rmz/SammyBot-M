let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.id)
    let a = m.sender
    let b
    do b = ps.getRandom()
    while (b === a)
    m.reply(`${toM(a)} ❤️ ${toM(b)}\n𝐟𝐞𝐥𝐢𝐜𝐢𝐝𝐚𝐝𝐞𝐬 𝐚𝐡𝐨𝐫𝐚 𝐬𝐨𝐧 𝐥𝐚 𝐧𝐮𝐞𝐯𝐚 𝐩𝐚𝐫𝐞𝐣𝐚 𝐚𝐦𝐨𝐫𝐨𝐬𝐚 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨 💖`, null, {
        mentions: [a, b]
    })
}
handler.help = ['ship']
handler.tags = ['fun']
handler.command = ['ship2']

handler.group = true

export default handler  