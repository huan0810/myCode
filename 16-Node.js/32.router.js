// 这是路由模块
// 1. 导入 express
const express = require('express')

// 2. 创建路由实例对象
const router = express.Router()

// 3. 挂载具体的路由，现在挂载在router上
router.get('/user/list', (req, res) => {
    res.send('Get user list.')
})
router.post('/user/add', (req, res) => {
    res.send('Add new user.')
})

// 4. 向外导出路由对象，外界在require('./32.router')时得到的就是router对象
module.exports = router