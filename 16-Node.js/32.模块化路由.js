const express = require('express')
const app = express()

// app.use('/files', express.static('./files'))

// 1. 导入路由模块
const router = require('./32.router')

// 2. 注册路由模块，把router模块挂载在app上
// /api是路由模块的访问前缀，要输入地址http://127.0.0.1/api/user/list
app.use('/api', router)

// 注意： app.use() 函数的作用，就是来注册全局中间件

app.listen(80, () => {
    console.log('http://127.0.0.1')
})