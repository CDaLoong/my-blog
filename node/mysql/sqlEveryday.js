const DBUtill = require('./DBUtil')

const insertEveryday = (content, ctime, success) => {
  const insertSql = 'insert into everyday (content, ctime) values (?, ?)'
  const params = [content, ctime]
  const connection = DBUtill.createConnection()
  connection.connect()
  connection.query(insertSql, params, (error, result) => {
    if (error === null || undefined) {
      success(result)
    } else {
      console.log(error)
    }
  })
  connection.end()
}
const getEveryday = (success) => {
  const insertSql = 'select * from everyday order by id desc limit 1;'
  const params = []
  const connection = DBUtill.createConnection()
  connection.connect()
  connection.query(insertSql, params, (error, result) => {
    if (error === null || undefined) {
      success(result)
    } else {
      console.log(error)
    }
  })
  connection.end()
}
module.exports.insertEveryday = insertEveryday
module.exports.getEveryday = getEveryday
