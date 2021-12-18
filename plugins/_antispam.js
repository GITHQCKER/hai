let { GroupSettingChange } = require('@adiwajshing/baileys')
let handler = m => m
handler.before = async (m, { conn, antiSpam, isBotAdmin, isOwner, isAdmin }) => {
  if (antiSpam && isBotAdmin){
    if (!isOwner && !isAdmin) {
      global.DATABASE.data.users[m.sender].spam += 1
      var spam = global.DATABASE.data.users[m.sender].spam
      
      if (spam >= 0) setTimeout(() => {
        global.DATABASE.data.users[m.sender].spam = 0
      }, 7000)
      
      if (spam == 5) return conn.reply(m.chat, `*Tolong @${m.sender.split('@')[0]} untuk tidak spam !*`, null, {
        contextInfo: {
          mentionedJid: [m.sender]
        }
      })
      
      if (spam == 7) {
        if (m.isGroup && isBotAdmin) {
          let users = (await conn.groupMetadata(m.chat)).participants.map(u => u.jid)
          return conn.reply(m.chat, `*❏ BOT AKAN MENUTUP GRUP UNTUK MENGHINDARI SPAM*`, m, { contextInfo: { mentionedJid: users } }).then(() => {
            conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, true)
            conn.reply(m.chat, `*ANDA MAU DIKICK ?*`, m)
          })
        }else if(!m.isGroup) {
          return conn.reply(m.chat, `*Maaf kamu di banned dari bot !*`, m).then(() => {
            global.DATABASE.data.users[m.sender].spam = 0
            global.DATABASE.data.users[m.sender].isBanned = true
            global.DATABASE.data.banned += 1
          })
        }
      }
    }
  }
}
module.exports = handler
