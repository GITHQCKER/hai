let handler = async (m, { conn, text }) => {
	let money = global.DATABASE.data.users[m.sender].money
  let limit = global.DATABASE.data.users[m.sender].limit
	
	conn.reply(m.chat, `*❏ REKENING*\n\nSaldo : Rp. ${money.toLocaleString()}\nLimit : ${limit.toLocaleString()}`, m)
}
handler.help = ['limit','money']
handler.tags = ['xp']
handler.command = /^(limit|money)$/i
module.exports = handler