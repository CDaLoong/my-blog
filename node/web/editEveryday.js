const path = new Map()
const editEveryday = (request, response) => {
  request.on('data', (data) => {
    console.log(data.toString().trim())
  })
}
path.set('/editEveryday', editEveryday)
module.exports.path = path
