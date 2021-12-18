// format mata uang
const format = num => {
  const n = String(num),
        p = n.indexOf('.')
  return n.replace(
      /\d(?=(?:\d{3})+(?:\.|$))/g,
      (m, i) => p < 0 || i < p ? `${m},` : m
  )
}

let handler = async (m, { conn, usedPrefix, command, args }) => {
  

  var money = global.DATABASE._data.users[m.sender].money
  // harga limit 
  var hargaLimit = 100000
  if (money <= 10000000){
    var hargaLimit = 100000
  }else if(money <= 50000000){     // max 25jt
    var hargaLimit = 250000
  }else if(money <= 100000000){   // max 100jt
    var hargaLimit = 500000
  }else if(money <= 1000000000){    // max 1m
    var hargaLimit = 750000
  }else if(money <= 10000000000){    // max 1m
    var hargaLimit = 1000000
  }else if(money <= 100000000000){    // max 100m
    var hargaLimit = 1250000
  }else if(money <= 1000000000000){   // max 1000m
    var hargaLimit = 1500000
  }else if(money <= 10000000000000){   // max 1000m
    var hargaLimit = 1750000
  }else {
    var hargaLimit = 2000000
  }
  let count = command.replace(/^buy/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.DATABASE._data.users[m.sender].money / hargaLimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (isNaN(count)) return m.reply(`*Contoh Format Yang Benar :*\n\n*${usedPrefix}buy 1*\n*${usedPrefix}buyall*`)
  if (global.DATABASE._data.users[m.sender].money >= hargaLimit * count) {
    global.DATABASE._data.users[m.sender].money -= hargaLimit * count
    global.DATABASE._data.users[m.sender].limit += count
    conn.reply(m.chat, `Berhasil membeli *${count} Limit* seharga *Rp. ${format(hargaLimit * count)}*\n\nSisa uangmu Rp. ${format(global.DATABASE._data.users[m.sender].money)}`, m)
  } else conn.reply(m.chat, `Dasar miskin ! Uangmu tidak mencukupi untuk membeli ${count} limit sat !\n\n1 Limit = Rp. ${format(hargaLimit)}\nUangmu cuma Rp. ${format(global.DATABASE._data.users[m.sender].money)}`, m)
}
handler.help = ['buy *total*', 'buyall']
handler.tags = ['xp']
handler.command = /^buy([0-9]+)|buy|buyall$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

