let { MessageType, Mimetype, Presence } = require('@adiwajshing/baileys')
const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')
let handler = async (m, { conn }) => {
	await conn.updatePresence(m.chat, Presence.composing) 
	const content = JSON.stringify(m.message)
	const type = Object.keys(m.message)[0]
	const isAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
	if(!isAudio) return m.reply(`*Reply audio.*`)
	m.reply(global.wait)
	encmedia = JSON.parse(JSON.stringify(m).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
	media = await conn.downloadAndSaveMediaMessage(encmedia)
	ranc = getRandom('.mp3')
	ran = path.join(__dirname, '../tmp', ranc)
	exec(`ffmpeg -i ${media} -af acrusher=.1:1:64:0:log ${ran}`, (err, stderr, stdout) => {
	fs.unlinkSync(media)
	if (err) return m.reply(global.error)
		buffer = fs.readFileSync(ran)
		conn.sendFile(m.chat, buffer, 'audio.mp3', null, m)
		fs.unlinkSync(ran)
	})
}
handler.help = ['blown']
handler.tags = ['audio']
handler.command = /^(blown)$/i
handler.owner = false
handler.exp = 0
handler.limit = true
handler.fail = null
module.exports = handler

function getRandom(ext) {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}