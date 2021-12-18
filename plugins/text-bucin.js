let handler = async (m, { conn, usedPrefix, command }) => {
  await conn.sendButton(m.chat, `“${pickRandom(global.bucin)}”`, '© 2021', 'next', `${usedPrefix + command}`)
}
handler.help = ['bucin']
handler.tags = ['text']
handler.command = /^(bucin)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.exp = 250

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/
global.bucin = [
  "Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah.",
  "Apakah Kau Akan Menyerah Hanya Karena Kau Berpikir Takkan Menang?.\n\n*~Eren Yeager*",
  "Tidak Ada Perselingkuhan Yang Didasari Oleh Cinta,Semua Hanya Nafsu Semata.\n\n*~Eriko Lim*",
  "Menyukai bukan berarti harus memiliki\n\n*~Shopee*",
  "Don't expect too much,Manusia Itu Gampang Berubah.\n\n*~Power Ranger*",
  "Stay private, Biarin aja orang lain bingung kita lagi ngapain,keluar sama siapa.\nMari Terapkan Prinsip\n*Gotta play safe,no face,no case*",
  "udah abis berapa duit buat jajanin jodoh orang?",
  "Sebenarnya emosi,Tapi Lebih Memilih Diam\n it's another level of dewasa.",
  "Jika tak bisa menjadi orang baik\nAt least don't be a bad person\n\n*~Billy*",
  "Buruan Nikah Nanti Keburu Tua\nUcap Pasutri Yang Modal Nikah Di Bantu Orang Tua"
]
