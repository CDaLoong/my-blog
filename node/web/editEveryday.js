const sqlEveryday = require('../mysql/sqlEveryday')
const timeUtil = require('../util/timeUtil')
const respUtil = require('../util/respUtil')
const path = new Map()
const editEveryday = (request, response) => {
  request.on('data', (data) => {
    console.log(111, data.toString().trim(), 111)
    sqlEveryday.insertEveryday(data.toString().trim(), timeUtil.getNowTime(), (result) => {
      response.writeHead(200)
      response.write(respUtil.writeResult('success', '添加成功', null))
      response.end()
    })
  })
}
path.set('/editEveryday', editEveryday)

const getEveryday = (request, response) => {
  sqlEveryday.getEveryday(result => {
    response.writeHead(200)
    response.write(respUtil.writeResult('success', '请求成功', result))
    response.end()
  })
}
path.set('/getEveryday', getEveryday)
module.exports.path = path
