const express = require('express')
const globalConfig = require('./config')
const loader = require('./loader')
// eslint-disable-next-line new-cap
const app = new express()

app.use(express.static('../dist/'))
app.post('/editEveryday', loader.get('/editEveryday'))

app.listen(globalConfig.port, () => {
  console.log('服务已启动')
})
