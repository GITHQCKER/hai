let handler = async (m, { conn }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (!(id in conn.tebakbendera)) throw false
    let json = conn.tebakbendera[id][1]
    let nya = json.jawaban
    let nyanya = nya.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_')
    m.reply('' + nyanya + '')
}
handler.command = /^clue$/i
handler.limit = true
module.exports = handler