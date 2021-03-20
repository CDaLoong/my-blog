const fs = require('fs')
const globalConfig = {}
const conf = fs.readFileSync('./server.conf')
const configArr = conf.toString().split('\n')
configArr.filter(item => item !== '').forEach(item => {
  globalConfig[item.split('=')[0].trim()] = item.split('=')[1].trim()
})
module.exports = globalConfig
