let handler = async (m, { conn, command, text }) => {
	if(!text){
    return conn.reply(m.chat,`*Masukkan Format Yang Benar !*
  
  *Contoh :*
  *.tf @${global.conn.user.jid.split('@')[0]} 10.000.000*
  *.tf 10.000.000 (reply chat)*`,m,{contextInfo: {
      mentionedJid: [global.conn.user.jid]
    }})
  }

  var hl = [] 
  hl[0] = text.split(' ')[0]
  hl[1] = text.split(' ')[1]
  var target

  if(m.quoted){
    target = m.quoted.sender
    if (hl[0].startsWith("@")) {
      return conn.reply(m.chat,`*Masukkan Format Yang Benar !*
    
    *Contoh :*
    *.tf @${global.conn.user.jid.split('@')[0]} 10.000.000*
    *.tf 10.000.000 (reply chat)*`,m,{contextInfo: {
        mentionedJid: [global.conn.user.jid]
      }})
    }
    jumlah = hl[0].replace(/([.])/g,'')
  }else {
    target = hl[0].replace(/([@+-])/g,'') + "@s.whatsapp.net"
    if (!hl[1]) {
      return conn.reply(m.chat,`*Masukkan Format Yang Benar !*
    
    *Contoh :*
    *.tf @${global.conn.user.jid.split('@')[0]} 10.000.000*
    *.tf 10.000.000 (reply chat)*`,m,{contextInfo: {
        mentionedJid: [global.conn.user.jid]
      }})
    }
    jumlah = hl[1].replace(/([.])/g,'')
  }

  if (target == global.conn.user.jid) return m.reply("*Tidak bisa melakukan transfer ke bot.*")

  if (typeof global.DATABASE.data.users[target] == "undefined"){
    return conn.reply(m.chat,`*Nomor yang ingin anda transfer tidak terdaftar di bot.*
  
*Contoh :*
*.tf @${global.conn.user.jid.split('@')[0]} 10.000.000*
*.tf 10.000.000 (reply chat)*`,m,{contextInfo: {
      mentionedJid: [global.conn.user.jid]
    }})
  }

  if (isNaN(jumlah)){
    return conn.reply(m.chat,`*Masukkan hanya berupa angka saja.*
  
*Contoh :*
*.tf @${global.conn.user.jid.split('@')[0]} 10.000.000*
*.tf 10.000.000 (reply chat)*`,m,{contextInfo: {
      mentionedJid: [global.conn.user.jid]
    }})
  }

  if (jumlah < 100000){
    return m.reply("*Transfer minimal Rp. 100.000.*")
  }

  jumlah = Number(jumlah)

  if (global.DATABASE.data.users[m.sender].money < jumlah){
    maxTF = Math.floor(global.DATABASE.data.users[m.sender].money / 105 * 100)
    return conn.reply(m.chat,`*Uang anda tidak mencukupi untuk melakukan transfer dengan jumlah Rp. ${jumlah.toLocaleString()}*
  
*Saldo anda : Rp. ${global.DATABASE.data.users[m.sender].money.toLocaleString()}*`,m)
  }

  global.DATABASE.data.users[m.sender].money -= jumlah
  global.DATABASE.data.users[target].money += jumlah

  conn.reply(m.chat, `*❏ TRANSFER*

Transfer *Rp. ${jumlah.toLocaleString()}* kepada @${target.split('@')[0]}

@${target.split('@')[0]} : Rp. ${global.DATABASE._data.users[target].money.toLocaleString()}
@${m.sender.split('@')[0]} : Rp. ${global.DATABASE._data.users[m.sender].money.toLocaleString()}`, m, {contextInfo: {
    mentionedJid: [target,m.sender]
  }})
}

handler.help = ['transfer','tf']
handler.tags = ['xp']
handler.command = /^transfer|tf$/i
handler.group = true
handler.limit = true
module.exports = handler