const express = require('express')
const app = express()

// 在这里，调用 express.static() 方法，快速的对外提供静态资源访问。
// 如果如下有多个静态资源需要托管，会按代码顺序查找资源
//'/files'是挂载的路径前缀  http://127.0.0.1/files/1.txt才能访问资源
app.use('/files', express.static('./16-Node.js/files'))

// http://127.0.0.1/index.html或http://127.0.0.1/index.css或http://127.0.0.1/index.js均可访问
app.use(express.static('./16-Node.js/09-clock'))

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})