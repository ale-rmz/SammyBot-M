import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs';
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.owner = [
  ['5493585753625', '𝑪𝒓𝒆𝒂𝒅𝒐𝒓🧸', true],
  ['5493585137595', '𝑺𝒕𝒂𝒇𝒇🩷', true],
  ['', '🩷𝘚𝘵𝘢𝘧𝘧 𝘚𝘢𝘮𝘮𝘺𝘉𝘰𝘵🩷', true],
  ['', '🧸𝘈𝘭𝘦𝘦-𝘳𝘮𝘻🧸', true],
['', '🧸𝘈𝘭𝘦𝘦-𝘳𝘮𝘻🧸', true],
 [''], [''], ['']];

global.suittag =['5493585753625']
global.prems =['5493585753625']

global.packname = '🧸𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥 𝘽𝙤𝙩\n🫀𝙋𝙧𝙤𝙥𝙞𝙚𝙩𝙖𝙧𝙞𝙤';
global.author = '𝘚𝘢𝘮𝘮𝘺𝘉𝘰𝘵-𝘔𝘋\n𝑫𝘚𝘢𝘮𝘮𝘺𝘉𝘰𝘵-𝘔𝘋';
global.wm = '𝙎𝙖𝙢𝙢𝙮𝘽𝙤𝙩-𝙈𝘿🧸';
global.titulowm = ' 𝙎𝙖𝙢𝙢𝙮𝘽𝙤𝙩-𝙈𝘿 ';
global.titulowm2 ='𝙎𝙖𝙢𝙢𝙮𝘽𝙤𝙩-𝙈𝘿 '
global.igfg = '𝙎𝙖𝙢𝙢𝙮𝘽𝙤𝙩-𝙈𝘿'  ;
global.wait = '*[❗] 𝖢𝖺𝗋𝗀𝖺𝗇𝖽𝗈,𝖺𝗀𝗎𝖺𝗋𝖽𝖾 𝗎𝗇 𝗆𝗈𝗆𝖾𝗇𝗍𝗈...*';

global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6= fs.readFileSync('./Menu3.png');
global.imagen7= fs.readFileSync('./src/hjbot.jpg');
global.mods = [];

//* *******Tiempo***************
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});

//****************************
global.gp1 = 'https://whatsapp.com/channel/0029Vab0Bez3QxS6HnWr3Z3t'
global.gp2 = 'https://chat.whatsapp.com/Gq4sgn9JH7kJmu7vGx5485'
global.wm2 = `▸ ${dia} ${fecha}\n▸ 𝙎𝙖𝙢𝙢𝙮𝘽𝙤𝙩-𝙈𝘿`;
global.gt = '𝙎𝙖𝙢𝙢𝙮𝘽𝙤𝙩-𝙈𝘿';
global.mysticbot = '𝙎𝙖𝙢𝙢𝙮𝘽𝙤𝙩-𝙈𝘿';
global.md = 'https://github.com/ale-rmz/SammyBot-MD';
global.mysticbot = 'https://github.com/ale-rmz/SammyBot-MD';
global.waitt = '*[⛔] Ƈᴀʀɢᴀɴᴅᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*';
global.waittt = '*[⛔] Ƈᴀʀɢᴀɴᴅᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*';
global.waitttt = '*[⛔] Ƈᴀʀɢᴀɴᴅᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*';
global.nomorown = '5493585753625', '3585137595';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `☆ Date :  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}`; // Asia/Jakarta
global.bottime = `☆𝕿 𝕴 𝕸 𝕰 : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`;// America/Los_Angeles
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************
let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});