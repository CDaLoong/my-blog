const express = require('express')
const app = new express();

app.use(express.static('../public/'))

app.listen(9527, () => {
    console.log('服务已启动')
})
