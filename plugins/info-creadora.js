//Puedes editar el país,enlaces, los números se editan desde el config.js
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
try{
let contact, number, ofc, nombre, description, correo, lugar, enlace, biog
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = gataImg.getRandom()	
const cat = `
${global.fantasy} 𝒃𝒚 ${global.wm}
🔰 𝚂𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙰 𝙻𝙾𝚂 𝙽𝚄́𝙼𝙴𝚁𝙾𝚂 𝙳𝙴 𝙼𝙸𝚂 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾𝚂 🔰`
let biografiaBot = await conn.fetchStatus(conn.user.jid.split('@')[0] + '@s.whatsapp.net').catch(_ => 'undefined')
let bioBot = biografiaBot.status?.toString() || `${desc2 == '' ? lenguajeGB.smsContacto1() : desc2}`

let contacts = global.official.filter(c => c[2] === 1)
let lista = []
for (let i = 0; i < contacts.length; i++) {
contact = contacts[i]
number = String(contact[0])
ofc = await conn.getName(number + '@s.whatsapp.net') //String(contact[1])
let biografia = await conn.fetchStatus(number +'@s.whatsapp.net').catch(_ => 'undefined')
let bio = biografia.status?.toString() || `${desc2 == '' ? lenguajeGB.smsContacto2() : desc2}`
  
nombre = official[0][0] == String(contact[0]) ? official[0][1] : official[1][0] == String(contact[0]) ? official[1][1] : official[2][0] == String(contact[0]) ? official[2][1] : official[3][0] == String(contact[0]) ? official[3][1] : lenguajeGB.smsContacto3() 
description = official[0][0] == String(contact[0]) ? 'FENIX - BOT' : official[1][0] == String(contact[0]) ? 'FENIX - BOT' : official[2][0] == String(contact[0]) ? 'FENIX - BOT' : official[3][0] == String(contact[0]) ? 'FENIX - BOT' : desc === '' ? 'FENIX - BOT' : desc
correo = official[0][0] == String(contact[0]) ? 'aldair' : official[1][0] == String(contact[0]) ? 'Lobo' : official[2][0] == String(contact[0]) ? 'TikTok: @lobo_editor_' : mail === '' ? lenguajeGB.smsContacto6() : mail
lugar = official[0][0] == String(contact[0]) ? '🇺🇸 Estados Unidos' : official[1][0] == String(contact[0]) ? '🇺🇸 Estados Unidos' : official[2][0] == String(contact[0]) ? '🇺🇲 Estados Unidos' : official[3][0] == String(contact[0]) ? '🇺🇸 Estados Unidos' : country === '' ? lenguajeGB.smsContacto7() : country
enlace = official[0][0] == String(contact[0]) ? 'https://github.com/' : official[1][0] == String(contact[0]) ? 'Lobo' : official[2][0] == String(contact[0]) ? 'https://github.com/' : official[3][0] == String(contact[0]) ? 'https://github.com/' : md 
   
lista.push([number, ofc, nombre, description, official[3][0] == String(contact[0]) ? null : correo, lugar, enlace, bio, official[1][0] == String(contact[0]) ? 'https://www.youtube.com/' : null]) }  
lista.push([conn.user.jid.split('@')[0], await conn.getName(conn.user.jid), fantasy, lenguajeGB.smsContacto8(), mail === '' ? 'aldair@gmail.com' : mail, lenguajeGB.smsContacto7(), md, bioBot, yt, ig, fb, paypal, nna])
await conn.sendFile(m.chat, pp, 'lp.jpg',  cat, fkontak, false, { contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' ALDAIR OFC ', previewType: 0, thumbnail: imagen4, sourceUrl: accountsgb.getRandom()}}})
await conn.sendContactArray(m.chat, lista, null, { quoted: fkontak })
  
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}} 
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador|contactos?|contacts?)$/i

export default handler
