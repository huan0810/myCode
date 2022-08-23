const express = require('express')
const app = express() //express()返回值就是一个服务器实例

// 挂载路由
app.get('/', (req, res) => {
    res.send('hello world.')
})
app.post('/', (req, res) => {
    res.send('Post Request.')
})

app.listen(80, () => {
    console.log('http://127.0.0.1')
})