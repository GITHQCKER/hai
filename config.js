global.hl = '.'   // prefix hl bot

global.owner = ['6285156972228','994409254719']
global.mods = ['6281257735703']
global.APIs = {
  nrtm: 'https://nurutomo.herokuapp.com',
  amel: 'https://melcanz.com',
  bg: 'http://bochil.ddns.net',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://melcanz.com': 'DyotaMC05',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://api.xteam.xyz': 'c604a90a63ce36a7',
  'https://api.zeks.xyz': 'rikkabotwa',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
}

// Sticker WM
global.packname = 'Acuy'
global.author = 'LTM Bot'

global.wait = '_Sedang diproses . . ._'
global.error = '_Fitur Error !_'
global.ltm = '*❏ Instagram*\nhttps://instagram.com/hairullana'

// global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
