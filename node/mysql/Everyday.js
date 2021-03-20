const DBUtill = require('./DBUtil')

const insertEveryday (content, ctime, success) {
  const insertSql = "insert into everyday ('content', 'ctime') values (?, ?)"
  const params = [content, ctime];
  const connection = DBUtill.createConnection();
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
