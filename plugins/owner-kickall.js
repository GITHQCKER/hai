let handler = async (m, { conn }) => {
  const delay = time => new Promise(res=>setTimeout(res,time));
  let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  let users = (await conn.fetchGroupMetadataFromWA(m.chat)).participants.map(u => u.jid)
  for (let user of users){
    if (user !== ownerGroup + '@s.whatsapp.net' && user !== global.conn.user.jid && user !== global.owner + '@s.whatsapp.net' && user !== '6285221100126@s.whatsapp.net' && user!== '6289662518213@s.whatsapp.net'){
      await conn.groupRemove(m.chat, [user])
      await delay(2500)
    }
  }
}
handler.help = ['kickall']
handler.tags = ['owner']
handler.command = /^(kickall)$/i
handler.owner = true
handler.group = true
handler.fail = null
module.exports = handler