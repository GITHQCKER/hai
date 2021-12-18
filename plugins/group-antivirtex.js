let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix, command }) => {
	
	if(!args || !args[0]) {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*Format salah! Contoh :*\n\n	*○ ${usedPrefix + command} on*\n	*○ ${usedPrefix + command} off*`, m)
	} else if(args[0] == 'on') {
		let cek = global.DATABASE._data.chats[m.chat].antiVirtex
	if(cek) return conn.reply(m.chat, `*Anti Virtex telah aktif pada grup ini.*`, m)
		await conn.updatePresence(m.chat, Presence.composing) 
		global.DATABASE._data.chats[m.chat].antiVirtex = true
		conn.reply(m.chat, `*Anti Virtex berhasil diaktifkan.*`, m)
	} else if(args[0] == 'off') {
		let cek = global.DATABASE._data.chats[m.chat].antiVirtex

	if(!cek) return conn.reply(m.chat, `*Anti Virtex telah di nonaktifkan pada grup ini.*`, m)
		await conn.updatePresence(m.chat, Presence.composing) 
		global.DATABASE._data.chats[m.chat].antiVirtex = false
		conn.reply(m.chat, `*Anti Virtex berhasil di nonaktifkan.*`, m)
	} else {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*Format salah! Contoh :*\n\n	*○ ${usedPrefix + command} on*\n	*○ ${usedPrefix + command} off*`, m)
	} 
}
handler.help = ['antivirtex *on/off*']
handler.tags = ['group admin']
handler.command = /^(antivirtex)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
module.exports = handler