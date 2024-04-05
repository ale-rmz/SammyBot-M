const handler = async (m, {conn, text, command}) => {
  const yh = global.loli;
  const url = yh[Math.floor(Math.random() * yh.length)];
  conn.sendMessage(m.chat, {image: {url: url}, caption: '𝐆𝐨𝐤𝐮 🐉'}, {quoted: m});
};
handler.command = /^(goku)$/i;
handler.tags = ['anime'];
handler.help = ['goku'];
export default handler;

global.goku = [
  'https://cdn.discordapp.com/attachments/1202339620939898981/1225932975892598834/adfa86338fa7617d8285893e31004e6c.jpg',
  'https://cdn.discordapp.com/attachments/1202339620939898981/1225932985002365039/cbda6bbbb19b2686d98556fd429e70bb.jpg',
  'https://cdn.discordapp.com/attachments/1202339620939898981/1225932995161227324/fa866313b0cb216860f09e0cd287063c.jpg',
  'https://cdn.discordapp.com/attachments/1202339620939898981/1225933011649036338/7931b40a11f3c57bcfaf32b0dbc95326.jpg',
  'https://cdn.discordapp.com/attachments/1202339620939898981/1225933021517975642/81f33223fdf4b72be027c3571731c28f.jpg',
  'https://cdn.discordapp.com/attachments/1202339620939898981/1225933050827767968/40b8b2320bf90b03fa02c33da39bb6e5.jpg'
  'https://cdn.discordapp.com/attachments/1202339620939898981/1225933061666115685/a65a24c7527f453df9b3c9044394933f.jpg',
  'https://cdn.discordapp.com/attachments/1202339620939898981/1225933076350242918/933abc8abe2f398a85a307fb6a1de477.jpg',
  'https://cdn.discordapp.com/attachments/1202339620939898981/1225933088559992882/bc3b0e20b088008ff796bd628a5fccba.jpg',
  'https://cdn.discordapp.com/attachments/1202339620939898981/1225934520562356335/731faac3148e561da398a648d1a6dc1a.jpg',
  'https://cdn.discordapp.com/attachments/1202339620939898981/1225934533090873394/70962d2e5c377a866db1f9514055cf56.jpg',
];
